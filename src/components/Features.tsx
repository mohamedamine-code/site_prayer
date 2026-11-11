import {
  AppWindow,
  Bell,
  CalendarClock,
  Clock,
  Languages,
  RefreshCw,
  Timer,
  WifiOff,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Clock,
    title: "Accurate Prayer Times",
    description: "Precise prayer times calculated for every Tunisian city, always at a glance.",
  },
  {
    icon: CalendarClock,
    title: "Iqama Schedules",
    description: "Follow congregation with local Iqama times displayed next to each prayer.",
  },
  {
    icon: Timer,
    title: "Live Prayer Countdown",
    description: "A real-time HH:MM:SS countdown so you never lose track of the next prayer.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Gentle, timely reminders for Adhan and Iqama — exactly when you need them.",
  },
  {
    icon: AppWindow,
    title: "Floating Desktop Widget",
    description: "A compact always-on-top widget that keeps prayer times visible anywhere.",
  },
  {
    icon: WifiOff,
    title: "Offline Support",
    description: "Prayer times are cached locally and work perfectly without an internet connection.",
  },
  {
    icon: Languages,
    title: "Multiple Languages",
    description: "Full interface support for Arabic, French and English — switch in one click.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Updates",
    description: "The app keeps itself up to date in the background, quietly and reliably.",
  },
];

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  const Icon = feature.icon;
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint-500/30 hover:shadow-[0_20px_45px_-18px_rgb(16_185_129_/_0.3)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(to right, transparent, rgb(52 211 153 / 0.6), transparent)" }}
          aria-hidden="true"
        />
        <div className="mb-5 inline-flex rounded-xl border border-mint-500/20 bg-mint-500/10 p-2.5 text-mint-300 transition-colors duration-300 group-hover:border-mint-500/35 group-hover:bg-mint-500/15">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-[15px] font-semibold text-white">{feature.title}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{feature.description}</p>
      </article>
    </Reveal>
  );
}

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute -left-48 top-1/3 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-[110px]"
        style={{ background: "radial-gradient(closest-side, #10b981, transparent)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything You Need,{" "}
              <span className="font-display font-normal italic text-mint-300">Nothing</span> You Don't
            </>
          }
          description="Eight focused capabilities built around one goal: helping you stay connected to your daily prayers."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} delay={(i % 4) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
