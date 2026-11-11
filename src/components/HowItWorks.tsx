import { Download, MapPin, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: Download,
    title: "Download",
    description: "Get the latest installer from GitHub Releases — free, always.",
  },
  {
    icon: Monitor,
    title: "Install",
    description: "Run the setup on your Windows computer. It takes less than a minute.",
  },
  {
    icon: MapPin,
    title: "Configure & Enjoy",
    description: "Pick your Tunisian city and language, then let the reminders flow.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Up and Running in{" "}
              <span className="font-display font-normal italic text-mint-300">Three</span> Steps
            </>
          }
          description="No accounts, no configuration files, no complexity. Download, install, done."
        />

        <ol className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden border-t border-dashed border-white/10 md:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 120} className="relative">
                <li className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-mint-500/25 bg-night-900 text-mint-300 shadow-[0_0_0_6px_rgb(6_11_18_/_1)]">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-mint-500 text-[11px] font-bold text-night-950">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
