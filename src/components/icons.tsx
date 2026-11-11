type IconProps = {
  className?: string;
};

export function GitHubIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function WindowsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M0 3.449 9.75 2.1v9.451H0V3.449Zm10.949-1.6L24 0v11.4H10.949V1.849ZM0 12.6h9.75v9.451L0 20.699V12.6Zm10.949 0H24V24l-13.051-1.849V12.6Z" />
    </svg>
  );
}

export function CrescentIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect width="64" height="64" rx="15" fill="rgb(16 185 129 / 0.12)" />
      <mask id="crescent-cut">
        <rect width="64" height="64" fill="#fff" />
        <circle cx="41" cy="25" r="17" fill="#000" />
      </mask>
      <circle cx="30" cy="32" r="18" fill="#10b981" mask="url(#crescent-cut)" />
      <path
        fill="#34d399"
        d="M44 33.5l1.6 4.4 4.4 1.6-4.4 1.6L44 45.5l-1.6-4.4-4.4-1.6 4.4-1.6z"
      />
    </svg>
  );
}
