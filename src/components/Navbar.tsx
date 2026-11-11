import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { GitHubIcon } from "./icons";
import { REPO_URL, DOWNLOAD_URL } from "../data/site";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/5 bg-night-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <Logo compact={scrolled} />

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            className="rounded-lg p-2.5 text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-500"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            download
            className="group flex items-center gap-2 rounded-xl bg-mint-500 px-4 py-2.5 text-sm font-semibold text-night-950 shadow-[0_8px_24px_-8px_rgb(16_185_129_/_0.55)] transition-all hover:bg-mint-400 hover:shadow-[0_10px_28px_-8px_rgb(16_185_129_/_0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-300"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2.5 text-slate-200 transition-colors hover:bg-white/5 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/5 px-5 pb-5 pt-2 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-[15px] font-medium text-slate-200 transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            download
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-mint-500 px-4 py-3 text-sm font-semibold text-night-950"
          >
            <Download className="h-4 w-4" />
            Download for Windows
          </a>
        </div>
      )}
    </header>
  );
}
