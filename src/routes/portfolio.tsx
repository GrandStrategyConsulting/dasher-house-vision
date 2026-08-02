import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/utils";
import dasherHouseFront from "@/assets/dasher-house-front.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Dasher House Enterprises" },
      {
        name: "description",
        content:
          "Explore the Dasher House Enterprises portfolio of hospitality, event, residential, and community-centered real estate assets.",
      },
      { property: "og:title", content: "Portfolio | Dasher House Enterprises" },
      {
        property: "og:description",
        content:
          "A portfolio of hospitality-led, residential, and community-centered real estate assets.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const CATEGORIES = [
  "All",
  "Hospitality & Short-Stay",
  "Event Properties",
  "Multifamily Development",
  "Community Living",
  "Pipeline Projects",
  "Future Opportunities",
] as const;

type Project = {
  name: string;
  type: string;
  status: string;
  label?: string;
  useCases?: string;
  description: string;
  image: string;
  categories: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Dasher House",
    type: "Hospitality / Events / Short-Stay",
    status: "Active",
    label: "Flagship Asset",
    useCases: "Airbnb, events, retreats, private gatherings",
    description:
      "The flagship asset in the Dasher House Enterprises portfolio. It operates as a hospitality-led property for short-stay guests, private events, retreats, and curated gatherings.",
    image: dasherHouseFront,
    categories: ["Hospitality & Short-Stay", "Event Properties"],
    href: "/dasher-house",
  },
  {
    name: "Multi-Unit Residential Project",
    type: "Multifamily / Residential Development",
    status: "In Development",
    description:
      "A residential project focused on livability, efficient design, and long-term community value.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    categories: ["Multifamily Development", "Pipeline Projects"],
  },
  {
    name: "Community Living Concept",
    type: "Community Living / Regeneration Area",
    status: "Concept / Pipeline",
    description:
      "A development concept exploring shared living, neighborhood connection, and housing models aligned with changing community needs.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1400&q=80",
    categories: ["Community Living", "Pipeline Projects"],
  },
  {
    name: "Regeneration Area Opportunity",
    type: "Acquisition / Development Opportunity",
    status: "Under Review",
    description:
      "A potential project in an area experiencing reinvestment, infrastructure improvement, or neighborhood growth.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80",
    categories: ["Future Opportunities"],
  },
];

function PortfolioPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const visible =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(active));

  return (
    <>
      <section className="border-b border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="A growing portfolio of hospitality, residential, and community-centered real estate assets."
            description="The Dasher House Enterprises portfolio brings together properties with character, utility, and long-term potential. Each asset is evaluated not only for what it is today, but for what it can become through vision, activation, development, and stewardship."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                active === cat
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-stone bg-white text-ink/70 hover:border-brand-blue hover:text-brand-blue",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-lg border border-stone bg-white transition-colors hover:border-brand-blue/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {p.label ? (
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-sm bg-brand-orange px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    {p.label}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  <span>{p.type}</span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-stone" />
                  <span className="text-muted-foreground">{p.status}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{p.name}</h2>
                {p.useCases ? (
                  <p className="mt-1 text-xs text-muted-foreground">Use Cases: {p.useCases}</p>
                ) : null}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-6">
                  {p.href ? (
                    <Button asChild variant="outline" className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white">
                      <Link to={p.href}>View Property</Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white">
                      <Link to="/contact">Request More Information</Link>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
