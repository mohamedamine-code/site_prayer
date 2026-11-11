import { ExternalLink, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { GitHubIcon, WindowsIcon } from "./icons";
import { DOWNLOAD_URL, INSTALLER_FILE, RELEASE_VERSION, RELEASES_URL, REPO_URL } from "../data/site";

export function Download() {
  return (
    <section id="download" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
              style={{ background: "radial-gradient(closest-side, rgb(16 185 129 / 0.6), transparent)" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgb(52 211 153 / 0.5), transparent)" }}
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <SectionHeading
                eyebrow="Get started"
                title={
                  <>
                    Bring Salati Tunisia to{" "}
                    <span className="font-display font-normal italic text-mint-300">Your Desktop</span>
                  </>
                }
                description="Stay connected to your daily prayers without opening your browser."
              />

              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-mint-500 px-7 py-4 text-base font-semibold text-night-950 shadow-[0_16px_40px_-10px_rgb(16_185_129_/_0.65)] transition-all hover:-translate-y-0.5 hover:bg-mint-400 hover:shadow-[0_20px_50px_-10px_rgb(16_185_129_/_0.8)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-300 sm:w-auto"
                >
                  <WindowsIcon className="h-5 w-5" />
                  Download for Windows
                </a>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-[15px] font-semibold text-slate-200 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-500 sm:w-auto"
                >
                  <GitHubIcon className="h-[18px] w-[18px]" />
                  View on GitHub
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 text-[12.5px]">
                <a
                  href={RELEASES_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-mint-500/25 bg-mint-500/10 px-3.5 py-1.5 font-semibold text-mint-300 transition-colors hover:bg-mint-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-400"
                >
                  Latest version · v{RELEASE_VERSION}
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
                <span className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-slate-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-mint-400" />
                  Open source
                </span>
                <span className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-slate-300">
                  <WindowsIcon className="h-3 w-3 text-slate-400" />
                  Windows 10 &amp; 11
                </span>
              </div>

              <p className="mt-7 text-xs leading-relaxed text-slate-500">
                Downloads {INSTALLER_FILE} directly from the official GitHub Releases page. No
                sign-up, no bundled software — just the app.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
