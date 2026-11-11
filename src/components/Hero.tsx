import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import { PrayerCountdownDemo } from "./PrayerCountdownDemo";
import { HERO_EYEBROW, DOWNLOAD_URL, RELEASES_URL, RELEASE_VERSION } from "../data/site";

const TRUST_ITEMS = ["Free & open source", "Windows 10 / 11", "العربية · Français · English"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="bg-grid-faint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_35%,transparent_100%)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
        style={{ background: "radial-gradient(closest-side, rgb(16 185 129 / 0.55), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-32 hidden h-[420px] w-[420px] rounded-full opacity-[0.12] blur-[110px] lg:block"
        style={{ background: "radial-gradient(closest-side, #34d399, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-24">
        <div>
          <div className="animate-fade-up flex flex-wrap items-center gap-2.5">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
              {HERO_EYEBROW}
            </span>
            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-mint-500/25 bg-mint-500/10 px-3.5 py-1.5 text-xs font-semibold text-mint-300 transition-colors hover:bg-mint-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-400"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Latest release · v{RELEASE_VERSION}
            </a>
          </div>

          <h1
            className="animate-fade-up mt-7 text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]"
            style={{ animationDelay: "80ms" }}
          >
            Your Daily Prayers,{" "}
            <span className="font-display font-normal italic text-mint-300">Beautifully</span>{" "}
            Organized.
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-[15.5px] leading-relaxed text-slate-400 sm:text-[17px]"
            style={{ animationDelay: "160ms" }}
          >
            Salati Tunisia brings prayer times, Iqama schedules and smart notifications
            directly to your Windows desktop.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-3.5"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              download
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-mint-500 px-6 py-3.5 text-[15px] font-semibold text-night-950 shadow-[0_14px_36px_-10px_rgb(16_185_129_/_0.6)] transition-all hover:-translate-y-0.5 hover:bg-mint-400 hover:shadow-[0_18px_44px_-10px_rgb(16_185_129_/_0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-300"
            >
              <Download className="h-[18px] w-[18px] transition-transform group-hover:translate-y-0.5" />
              Download for Windows
            </a>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[15px] font-semibold text-slate-200 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-500"
            >
              Explore Features
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <ul
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13px] text-slate-500"
            style={{ animationDelay: "320ms" }}
          >
            {TRUST_ITEMS.map((item, i) => (
              <li key={item} className="flex items-center gap-2.5">
                {i > 0 && <span className="hidden h-3.5 w-px bg-white/10 sm:block" aria-hidden="true" />}
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up relative flex justify-center lg:justify-end" style={{ animationDelay: "300ms" }}>
          <div className="animate-float">
            <PrayerCountdownDemo />
          </div>
          <div
            className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-[100%] bg-mint-500/20 blur-2xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
