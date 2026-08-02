import { Link } from "@tanstack/react-router";
import { LogoMark } from "./logo-mark";

const NAV_COLS: Array<{ heading: string; items: Array<{ to: string; label: string }> }> = [
  {
    heading: "Company",
    items: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Lisa" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Portfolio",
    items: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/dasher-house", label: "Dasher House" },
      { to: "/development", label: "Development" },
    ],
  },
  {
    heading: "Work With Us",
    items: [
      { to: "/consultancy", label: "Consultancy" },
      { to: "/partnerships", label: "Partnerships" },
      { to: "/contact", label: "Start a Conversation" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <LogoMark showWordmark inverted />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Dasher House Enterprises is a boutique real estate development, hospitality,
              and property portfolio company founded by Lisa Moore.
            </p>
            <div className="mt-8">
              <a
                href="/contact#send-message"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-colors hover:text-white"
              >
                Start a conversation
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
          {NAV_COLS.map((col) => (
            <div key={col.heading} className="min-w-0">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {item.label === "Start a Conversation" ? (
                      <a
                        href="/contact#send-message"
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-white/55">
          <p className="max-w-3xl leading-relaxed">
            Information on this website is for general informational purposes only and does not
            constitute investment, legal, financial, or tax advice.
          </p>
          <p className="mt-4">© Dasher House Enterprises LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
