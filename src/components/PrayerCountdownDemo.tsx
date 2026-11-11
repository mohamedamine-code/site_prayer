import { useEffect, useState } from "react";
import { SAMPLE_PRAYERS } from "../data/site";
import type { Prayer } from "../data/site";

function toSeconds(prayer: Prayer, dayOffset: number): number {
  return dayOffset * 86400 + prayer.hour * 3600 + prayer.minute * 60;
}

function formatCountdown(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

function formatClock(prayer: Prayer): string {
  const h = String(prayer.hour).padStart(2, "0");
  const m = String(prayer.minute).padStart(2, "0");
  return `${h}:${m}`;
}

function computeNext() {
  const now = new Date();
  const nowSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  let next: Prayer = SAMPLE_PRAYERS[0];
  let dayOffset = 1;
  for (const prayer of SAMPLE_PRAYERS) {
    if (toSeconds(prayer, 0) > nowSeconds) {
      next = prayer;
      dayOffset = 0;
      break;
    }
  }

  const remaining = Math.max(0, Math.round(toSeconds(next, dayOffset) - nowSeconds));
  return { next, remaining, dayOffset };
}

export function PrayerCountdownDemo() {
  const [{ next, remaining, dayOffset }, setNext] = useState(computeNext);

  useEffect(() => {
    const timer = window.setInterval(() => setNext(computeNext()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="glass relative w-full max-w-md rounded-3xl p-6 shadow-[0_24px_60px_-24px_rgb(0_0_0_/_0.7)] sm:p-7">
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-60"
        style={{
          background:
            "linear-gradient(160deg, rgb(16 185 129 / 0.14) 0%, transparent 32%, transparent 70%, rgb(16 185 129 / 0.07) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Next prayer
          </p>
          <span className="flex items-center gap-2 rounded-full border border-mint-500/25 bg-mint-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-mint-300">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-mint-400" />
            Live
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{next.name}</h3>
            <p className="font-arabic mt-0.5 text-lg text-mint-400/90" dir="rtl" lang="ar">
              {next.arabic}
            </p>
          </div>
          <p
            className="text-[2rem] font-semibold leading-none tracking-tight text-white tabular-nums sm:text-[2.4rem]"
            aria-label={`Countdown to ${next.name}: ${formatCountdown(remaining)}`}
          >
            {formatCountdown(remaining)}
          </p>
        </div>

        <div className="mt-6 space-y-1.5 border-t border-white/5 pt-5">
          {SAMPLE_PRAYERS.map((prayer) => {
            const isNext =
              prayer.name === next.name && (dayOffset === 1 || prayer === next);
            return (
              <div
                key={prayer.name}
                className={`flex items-center justify-between rounded-xl px-3 py-1.5 text-sm transition-colors ${
                  isNext ? "bg-mint-500/10 text-mint-200" : "text-slate-400"
                }`}
              >
                <span className="flex items-baseline gap-2.5">
                  <span className={isNext ? "font-semibold" : ""}>{prayer.name}</span>
                  <span className="font-arabic text-xs opacity-80" dir="rtl" lang="ar">
                    {prayer.arabic}
                  </span>
                </span>
                <span className={`tabular-nums ${isNext ? "font-semibold" : ""}`}>
                  {formatClock(prayer)}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-5 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-mint-500" />
            Tunis, Tunisia
          </span>
          <span>Sample times — preview only</span>
        </p>
      </div>
    </div>
  );
}
