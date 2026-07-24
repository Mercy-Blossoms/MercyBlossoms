const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mercy.blossoms/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582640826430",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 8.5h2.5V5h-2.5c-2 0-3.5 1.5-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9c0-.4.3-.5.5-.5z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/mercyblossoms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 19c1-3.5 1.5-6 2.2-8.7a2.3 2.3 0 1 1 4.5.5c-.4 1.7-1.2 3.2-3 3.2-1.3 0-2-.9-1.7-2.2" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:aislingbihari@mercyblossoms.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
];

export default function SocialLinks({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const color = variant === "light" ? "text-indigo" : "text-parchment";
  const hover = variant === "light" ? "hover:text-blossom-deep" : "hover:text-gold-light";

  return (
    <div className="flex items-center gap-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`${color} ${hover} transition-colors`}
        >
          <span className="block h-5 w-5">{s.icon}</span>
        </a>
      ))}
    </div>
  );
}
