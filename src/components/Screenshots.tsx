import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SCREENSHOTS } from "../data/site";
import type { Screenshot } from "../data/site";

type FrameProps = {
  shot: Screenshot;
  eager?: boolean;
  onOpen: (shot: Screenshot) => void;
};

function ScreenshotFrame({ shot, eager = false, onOpen }: FrameProps) {
  return (
    <Reveal className={`col-span-1 ${shot.span}`}>
      <figure className="group h-full">
        <div className="glass relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgb(0_0_0_/_0.7)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_70px_-20px_rgb(16_185_129_/_0.25)] group-hover:ring-1 group-hover:ring-mint-500/30">
          <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
            <span className="ml-3 truncate text-[11px] font-medium text-slate-500">
              {shot.windowTitle}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onOpen(shot)}
            aria-label={`Open fullscreen view: ${shot.title}`}
            className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-mint-500"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              className={`${shot.aspect} w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]`}
            />
          </button>
        </div>

        <figcaption className="mt-5">
          <h3 className="text-[15px] font-semibold text-white">{shot.title}</h3>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-slate-400">{shot.description}</p>
        </figcaption>
      </figure>
    </Reveal>
  );
}

type LightboxProps = {
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

function Lightbox({ index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && index !== null)
        onNavigate((index + 1) % SCREENSHOTS.length);
      if (event.key === "ArrowLeft" && index !== null)
        onNavigate((index - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, index, onClose, onNavigate]);

  if (!isOpen || index === null) return null;
  const shot = SCREENSHOTS[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${shot.title} fullscreen view`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-night-950/92 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close fullscreen view"
        className="absolute right-4 top-4 rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-mint-400 sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      {SCREENSHOTS.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
            }}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-mint-400 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % SCREENSHOTS.length);
            }}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-mint-400 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <figure
        className="max-h-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={shot.src}
          alt={shot.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
        />
        <figcaption className="mt-4 text-center">
          <p className="text-sm font-semibold text-white">{shot.title}</p>
          <p className="mt-1 text-[13px] text-slate-400">{shot.description}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export function Screenshots() {
  const [active, setActive] = useState<number | null>(null);

  const handleNavigate = useCallback((index: number) => setActive(index), []);
  const handleClose = useCallback(() => setActive(null), []);
  const handleOpen = useCallback((shot: Screenshot) => {
    const index = SCREENSHOTS.findIndex((s) => s.id === shot.id);
    if (index >= 0) setActive(index);
  }, []);

  return (
    <section id="screenshots" className="relative scroll-mt-24 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2"
        style={{ background: "linear-gradient(to right, transparent, rgb(16 185 129 / 0.35), transparent)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Inside the app"
          title={
            <>
              A Closer Look at <span className="font-display font-normal italic text-mint-300">Salati</span>
            </>
          }
          description="Four thoughtfully designed views that keep your day organized — from the main dashboard to the always-on-top widget."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
          {SCREENSHOTS.map((shot, i) => (
            <ScreenshotFrame
              key={shot.id}
              shot={shot}
              eager={i === 0}
              onOpen={handleOpen}
            />
          ))}
        </div>
      </div>

      <Lightbox index={active} onClose={handleClose} onNavigate={handleNavigate} />
    </section>
  );
}
