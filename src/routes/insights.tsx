import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/section-heading";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Dasher House Enterprises" },
      {
        name: "description",
        content:
          "Insights on real estate development, hospitality-led property, Airbnb strategy, community living, regeneration areas, and property activation.",
      },
      { property: "og:title", content: "Insights | Dasher House Enterprises" },
      {
        property: "og:description",
        content:
          "Perspectives on real estate, hospitality, and community-centered development.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const ARTICLES = [
  {
    category: "Real Estate Development",
    title: "What Makes a Property More Than a Property?",
    excerpt:
      "The difference between owning real estate and stewarding it — and why the distinction changes long-term outcomes.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Property Ownership Lessons",
    title: "How to Think Like a Developer Before You Buy",
    excerpt:
      "The mental shift owners make when they start looking at property as a strategy, not just a purchase.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Event Property Activation",
    title: "Why Hospitality Thinking Matters in Real Estate",
    excerpt:
      "Hospitality is not a category — it's a lens that can lift the value of nearly any residential asset.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Regeneration Areas",
    title: "The Opportunity in Regeneration Areas",
    excerpt:
      "Where community reinvestment meets disciplined development — and how to read the signals early.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Event Property Activation",
    title: "Turning a Home Into a Destination",
    excerpt:
      "What it actually takes to move a residential property into a hosted, revenue-generating asset.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Airbnb & Short-Stay Strategy",
    title: "What Property Owners Should Know Before Launching an Airbnb",
    excerpt:
      "A practical readiness checklist for owners considering short-stay rental as a serious strategy.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Community Living",
    title: "Community Living and the Future of Residential Development",
    excerpt:
      "Why the next generation of housing will be judged on connection as much as square footage.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Regeneration Areas",
    title: "What Regeneration Really Means for Property Owners and Developers",
    excerpt:
      "Beyond the buzzword: how to evaluate whether a neighborhood is genuinely turning.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Event Property Activation",
    title: "How to Evaluate Whether a Property Can Become an Event Space",
    excerpt:
      "The physical, operational, and neighborhood factors that make or break event potential.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
];

function InsightsPage() {
  return (
    <>
      <section className="border-b border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Insights"
            title="Insights on real estate, hospitality, and community-centered development."
            description="Perspectives from Dasher House Enterprises on the ideas shaping the portfolio, the pipeline, and the wider practice of thoughtful real estate."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-stone bg-white transition-colors hover:border-brand-blue/50"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {a.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink">{a.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-blue"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}