import { Download, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { GitHubIcon } from "./icons";
import {
  APP_NAME,
  APP_NAME_ARABIC,
  DOWNLOAD_URL,
  INSTALLER_FILE,
  ISSUES_URL,
  RELEASES_URL,
  REPO_URL,
} from "../data/site";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "How it works", href: "#how-it-works" },
];

const RESOURCE_LINKS = [
  {
    label: `Windows installer — ${INSTALLER_FILE}`,
    href: DOWNLOAD_URL,
    external: true,
    download: true,
  },
  { label: "GitHub releases", href: RELEASES_URL, external: true, download: false },
  { label: "GitHub repository", href: REPO_URL, external: true, download: false },
  { label: "Report an issue", href: ISSUES_URL, external: true, download: false },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-night-950/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {APP_NAME} ({APP_NAME_ARABIC}) is a free, open-source Windows app that keeps
              prayer times, Iqama schedules and reminders one glance away.
            </p>
          </div>

          <nav aria-label="Site sections">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Site</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-mint-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    {...(link.download ? { download: true } : {})}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-mint-300"
                  >
                    {link.label}
                    {link.download ? (
                      <Download className="h-3 w-3 opacity-60" />
                    ) : (
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-7 sm:flex-row">
          <p className="flex items-center gap-2 text-xs text-slate-500">
            <GitHubIcon className="h-3.5 w-3.5" />
            © {year} {APP_NAME}. Open source under its GitHub license.
          </p>
          <p className="text-xs text-slate-400">Made with care in Tunisia 🇹🇳</p>
        </div>
      </div>
    </footer>
  );
}
