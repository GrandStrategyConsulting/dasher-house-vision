import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";

export const Route = createFileRoute("/development")({
  head: () => ({
    meta: [
      { title: "Development Pipeline | Dasher House Enterprises" },
      {
        name: "description",
        content:
          "Explore the Dasher House Enterprises development pipeline focused on multifamily homes, community living, adaptive reuse, and regeneration-area opportunities.",
      },
      { property: "og:title", content: "Development Pipeline | Dasher House Enterprises" },
      {
        property: "og:description",
        content:
          "Multifamily, community living, adaptive reuse, and regeneration-area projects.",
      },
      { property: "og:url", content: "/development" },
    ],
    links: [{ rel: "canonical", href: "/development" }],
  }),
  component: DevelopmentPage,
});

const SECTIONS = [
  {
    title: "Multifamily Homes",
    body: "Dasher House Enterprises is exploring and developing multi-unit residential projects designed to meet modern housing needs while contributing to neighborhood growth and livability.",
  },
  {
    title: "Community Living",
    body: "The company is interested in models of community living that balance private space, shared amenities, hospitality thinking, and a stronger sense of connection.",
  },
  {
    title: "Regeneration Areas",
    body: "Dasher House Enterprises identifies areas undergoing reinvestment, infrastructure improvement, cultural renewal, or demographic change. The goal is to participate in growth responsibly by creating properties that serve both residents and the wider community.",
  },
  {
    title: "Adaptive Reuse & Repositioning",
    body: "Where appropriate, Dasher House Enterprises looks at how existing assets can be reimagined, repositioned, or activated for new uses rather than treated as static properties.",
  },
];

const PIPELINE = [
  {
    name: "Multi-Unit Residential Project",
    assetClass: "Multifamily / Residential",
    region: "Regional — undisclosed",
    status: "In Development",
    stage: "Feasibility & design",
    description:
      "A residential project focused on livability, efficient design, and long-term community value.",
    opportunity: "Development",
  },
  {
    name: "Community Living Concept",
    assetClass: "Community Living",
    region: "Regeneration corridor",
    status: "Concept Stage",
    stage: "Concept development",
    description:
      "A shared-living concept exploring private space, hospitality-informed amenities, and stronger community connection.",
    opportunity: "Partnership / JV",
  },
  {
    name: "Regeneration Area Opportunity",
    assetClass: "Acquisition / Development",
    region: "Growth submarket",
    status: "Under Review",
    stage: "Opportunity assessment",
    description:
      "A potential project in an area experiencing reinvestment, infrastructure improvement, or neighborhood growth.",
    opportunity: "Seeking Partners",
  },
  {
    name: "Adaptive Reuse Study",
    assetClass: "Adaptive Reuse",
    region: "TBD",
    status: "Future Opportunity",
    stage: "Early exploration",
    description:
      "An early-stage look at an existing asset that could be repositioned for hospitality-led or community-centered use.",
    opportunity: "Future Opportunity",
  },
];

function DevelopmentPage() {
  return (
    <>
      <section className="border-b border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Development Pipeline"
            title="A development pipeline focused on livability, regeneration, and long-term value."
            description="Dasher House Enterprises is building a pipeline of projects that reflect the next phase of the company: multifamily homes, community living concepts, adaptive reuse opportunities, and development projects in neighborhoods with strong growth fundamentals."
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Each project is assessed through a practical development lens: location, demand,
            design potential, community context, capital requirements, execution risk, and
            long-term value creation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-lg border border-stone bg-white p-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue">
                Pipeline Focus
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{s.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Pipeline Projects" title="Projects in motion." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {PIPELINE.map((p) => (
              <article key={p.name} className="rounded-lg border border-stone bg-ivory p-7">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  <span>{p.assetClass}</span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-stone" />
                  <span className="text-muted-foreground">{p.region}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{p.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium">
                  <span className="rounded-sm bg-brand-orange/15 px-2.5 py-1 text-brand-orange">
                    {p.status}
                  </span>
                  <span className="rounded-sm bg-stone/60 px-2.5 py-1 text-ink/70">{p.stage}</span>
                  <span className="rounded-sm bg-brand-blue/10 px-2.5 py-1 text-brand-blue">
                    {p.opportunity}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    <Link to="/contact">Request More Information</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}