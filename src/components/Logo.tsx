import { CrescentIcon } from "./icons";
import { APP_NAME, APP_NAME_ARABIC } from "../data/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#top"
      className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint-500"
      aria-label={`${APP_NAME} — back to top`}
    >
      <CrescentIcon className="h-9 w-9 transition-transform duration-300 group-hover:rotate-12" />
      <span className="flex items-baseline gap-2">
        <span className="text-[17px] font-semibold tracking-tight text-white">{APP_NAME}</span>
        {!compact && (
          <span className="font-arabic text-sm text-mint-400/90" dir="rtl" lang="ar">
            {APP_NAME_ARABIC}
          </span>
        )}
      </span>
    </a>
  );
}
