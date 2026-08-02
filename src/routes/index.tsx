import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Compass, Handshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import homeHero from "@/assets/home-hero.jpg";
import dasherHouseHero from "@/assets/dasher-house-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dasher House Enterprises | Real Estate, Hospitality & Development" },
      {
        name: "description",
        content:
          "Dasher House Enterprises is a boutique real estate development and property portfolio company founded by Lisa Moore, focused on hospitality-led assets, community living, and long-term value creation.",
      },
      {
        property: "og:title",
        content: "Dasher House Enterprises | Real Estate, Hospitality & Development",
      },
      {
        property: "og:description",
        content:
          "Boutique real estate development, hospitality, and property portfolio led by Lisa Moore.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const WHAT_WE_DO = [
  {
    icon: Building2,
    title: "Portfolio",
    body: "Distinctive real estate assets with character, commercial potential, and a clear role in the wider development strategy.",
  },
  {
    icon: Sparkles,
    title: "Hospitality",
    body: "Short-stay, event, retreat, and gathering spaces designed to create memorable experiences and recurring value.",
  },
  {
    icon: Compass,
    title: "Development",
    body: "Multifamily, adaptive reuse, and community living projects in areas with regeneration and growth potential.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    body: "Consultancy, advisory, joint venture, and development partnership opportunities for aligned property owners, investors, and collaborators.",
  },
] as const;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeHero}
            alt="Front exterior of Dasher House"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/45 to-ink/75" />
        </div>
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85">
              <span className="h-px w-10 bg-brand-orange" aria-hidden />
              Dasher House Enterprises
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Real estate developed with purpose, character, and long-term value.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              Dasher House Enterprises is a boutique real estate development and property
              portfolio company founded by Lisa Moore, focused on hospitality-led assets,
              community living, and thoughtful investment in high-growth neighborhoods.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90">
                <Link to="/portfolio">
                  Explore the Portfolio <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 bg-transparent text-white hover:bg-white hover:text-ink"
              >
                <Link to="/dasher-house">Book Dasher House</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-20">
          <SectionHeading
            as="h2"
            eyebrow="Company Positioning"
            title="A real estate platform built around place, people, and possibility."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:pt-2">
            <p>
              Dasher House Enterprises develops, activates, and stewards properties with a
              focus on long-term value creation. From hospitality-led spaces such as Dasher
              House to emerging multifamily and community living projects, the company is
              shaped by a belief that real estate should do more than occupy land. It should
              create opportunity, connection, experience, and momentum.
            </p>
            <p>
              Founded by Lisa Moore, Dasher House Enterprises brings together property vision,
              market awareness, hospitality thinking, community insight, and practical
              development execution.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-y border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Four pillars, one portfolio." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_DO.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative flex flex-col rounded-lg border border-stone bg-ivory p-7 transition-colors hover:border-brand-blue/40"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-brand-blue/10 text-brand-blue">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ASSET */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-2 rounded-lg border border-brand-blue/30" aria-hidden />
            <div className="relative overflow-hidden rounded-md">
              <img
                src={dasherHouseHero}
                alt="Front exterior of Dasher House"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Flagship Asset
            </span>
          </div>
          <div>
            <SectionHeading
              eyebrow="Featured Asset"
              title="Dasher House: The flagship asset."
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Dasher House is the signature hospitality and event property within the Dasher
              House Enterprises portfolio. Designed for short-stay guests, private gatherings,
              retreats, and curated experiences, Dasher House reflects the company's wider
              philosophy: spaces should be intentional, memorable, commercially alive, and
              rooted in a sense of place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-brand-orange text-white hover:bg-brand-orange/90">
                <Link to="/dasher-house">View Dasher House</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <Link to="/dasher-house">Book a Stay</Link>
              </Button>
              <Button asChild variant="ghost" className="text-ink hover:bg-stone/60">
                <Link to="/dasher-house">Plan an Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT + CONSULTANCY + PARTNERSHIPS */}
      <section className="border-y border-stone bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Development Pipeline"
              title="Building the next generation of community living."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Dasher House Enterprises is advancing a development pipeline focused on
                residential, multifamily, and community-centered real estate projects. The
                company is especially interested in areas experiencing renewal, reinvestment,
                infrastructure improvement, and neighborhood momentum.
              </p>
              <p>
                Each opportunity is considered through a disciplined development lens:
                location, livability, market demand, community context, design potential,
                capital requirements, and long-term value creation.
              </p>
            </div>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <Link to="/development">Explore the Development Pipeline</Link>
              </Button>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Consultancy & Advisory"
              title="Guidance for people ready to move from ownership to strategy."
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Dasher House Enterprises offers consultancy and advisory support for property
              owners, aspiring developers, investors, and partners who want to evaluate,
              activate, or develop real estate with greater clarity and confidence.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-ink">
              {[
                "Property vision and positioning",
                "Short-stay rental strategy",
                "Event and hospitality activation",
                "Multifamily development readiness",
                "Community living concepts",
                "Regeneration-area opportunity assessment",
                "Development partner readiness",
                "Portfolio storytelling and market positioning",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild className="bg-brand-orange text-white hover:bg-brand-orange/90">
                <Link to="/consultancy">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-stone bg-white p-10 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Partnerships & Investment"
                title="Partnering in places with growth potential."
              />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Dasher House Enterprises is open to aligned partnerships with developers,
                investors, property owners, and community stakeholders interested in
                thoughtful development opportunities. The focus is on high-growth locations,
                underutilized assets, and projects where design, hospitality, community, and
                disciplined execution can create stronger outcomes.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Button
                asChild
                size="lg"
                className="bg-brand-orange text-white hover:bg-brand-orange/90"
              >
                <Link to="/partnerships">
                  Start a Partnership Conversation <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT LISA PREVIEW */}
      <section className="border-t border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Leadership"
              title="Led by Lisa Moore, Owner, Founder, and CEO."
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Lisa Moore founded Dasher House Enterprises to bring together her vision for real
              estate, hospitality, community living, and long-term property value creation. Her
              work is rooted in the belief that the right property, in the right place, with
              the right strategy, can become more than an asset. It can become a destination,
              a gathering place, a home, a catalyst, and a source of opportunity.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                variant="outline"
                className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <Link to="/about">Meet Lisa Moore</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl md:text-[2.5rem] md:leading-[1.1]">
            Let's build places people remember — and communities that grow stronger because of them.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90">
              <Link to="/portfolio">Explore the Portfolio</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <Link to="/dasher-house">Book Dasher House</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-ink hover:bg-stone/60">
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
