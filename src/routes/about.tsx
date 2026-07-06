import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lisa Moore | Founder of Dasher House Enterprises" },
      {
        name: "description",
        content:
          "Lisa Moore is the Owner, Founder, and CEO of Dasher House Enterprises, a boutique real estate development, hospitality, and property portfolio company.",
      },
      { property: "og:title", content: "About Lisa Moore | Founder of Dasher House Enterprises" },
      {
        property: "og:description",
        content:
          "Owner, Founder, and CEO of Dasher House Enterprises.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Purposeful Development",
    body: "Every project should have a clear role, audience, and value proposition.",
  },
  {
    title: "Community Awareness",
    body: "Strong development respects the neighborhood context and the people who make a place meaningful.",
  },
  {
    title: "Hospitality Thinking",
    body: "Great properties are not only built. They are experienced.",
  },
  {
    title: "Long-Term Stewardship",
    body: "Real estate value is created through vision, care, execution, and responsible ownership over time.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="About Lisa Moore"
            title="Lisa Moore develops real estate with vision, discipline, and a deep respect for place."
          />
          <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Lisa Moore is the Owner, Founder, and CEO of Dasher House Enterprises, a boutique
              real estate development, hospitality, and property portfolio company focused on
              creating spaces that generate value, connection, and long-term possibility.
            </p>
            <p>
              Through Dasher House Enterprises, Lisa is building a real estate platform that
              spans hospitality, event properties, short-stay rentals, multifamily homes, and
              community-centered development opportunities.
            </p>
            <p>
              Her flagship asset, Dasher House, reflects her wider development philosophy: a
              property should be more than a building. With the right vision, positioning, and
              activation, it can become a destination, a gathering place, a community asset, and
              a source of long-term value.
            </p>
            <p>
              Lisa's approach is practical and future-focused. She looks at properties not only
              as physical structures, but as assets with stories, uses, audiences, and unrealized
              potential. Her work sits at the intersection of real estate development,
              hospitality, community living, and neighborhood regeneration.
            </p>
            <p>
              She partners with people who want to build with care, move with discipline, and
              create places that serve both commercial and community purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Brand Story"
            title="The meaning behind Dasher House Enterprises."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Dasher House Enterprises is built around the belief that property can become more
              than a physical asset. With vision, care, and disciplined execution, a house can
              become a destination, a gathering place, a source of income, a community anchor,
              and a platform for future development.
            </p>
            <p>
              The dragonfly in the Dasher House identity reflects movement, transformation, and
              the ability to see possibility where others may only see property. The roofline
              reflects shelter, ownership, and place. Together, the identity captures the spirit
              of the company: developing spaces that hold people well and create long-term value.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Values" title="What guides the work." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-lg border border-stone bg-ivory p-7">
                <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Interested in working with Lisa or Dasher House Enterprises?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90">
            <Link to="/consultancy">Request a Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white"
          >
            <Link to="/partnerships">Explore Partnerships</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-ink hover:bg-stone/60">
            <Link to="/contact">Contact the Team</Link>
          </Button>
        </div>
      </section>
    </>
  );
}