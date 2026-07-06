import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import {
  InquiryForm,
  optionalString,
  requiredEmail,
  requiredString,
  type InquiryField,
} from "@/components/site/inquiry-form";
import dasherHouseHero from "@/assets/dasher-house-hero.jpg";
import dasherHouseLogo from "@/assets/dasher-house-logo.png.asset.json";


export const Route = createFileRoute("/dasher-house")({
  head: () => ({
    meta: [
      { title: "Dasher House | Events, Stays & Private Gatherings" },
      {
        name: "description",
        content:
          "Dasher House is the flagship hospitality and event property of Dasher House Enterprises, designed for memorable stays, private gatherings, retreats, and curated experiences.",
      },
      { property: "og:title", content: "Dasher House | Events, Stays & Private Gatherings" },
      {
        property: "og:description",
        content:
          "The flagship hospitality and event property of Dasher House Enterprises.",
      },
      { property: "og:url", content: "/dasher-house" },
    ],
    links: [{ rel: "canonical", href: "/dasher-house" }],
  }),
  component: DasherHousePage,
});

const USE_CASES = [
  {
    title: "Short-Stay Hospitality",
    body: "For guests seeking a memorable Airbnb or short-stay experience.",
  },
  {
    title: "Private Events",
    body: "For intimate celebrations, hosted gatherings, and special occasions.",
  },
  {
    title: "Retreats & Workshops",
    body: "For small group sessions, creative retreats, team gatherings, and facilitated experiences.",
  },
  {
    title: "Curated Community Moments",
    body: "For purposeful gatherings that bring people together in a beautiful, intentional space.",
  },
];

const FEATURES = [
  "Thoughtfully designed interiors",
  "Comfortable gathering areas",
  "Character-rich environment",
  "Flexible hosting possibilities",
  "Warm residential feel",
  "Elevated guest experience",
  "Memorable setting for connection",
  "Space designed for both rest and gathering",
];

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    alt: "Exterior of a character-rich home",
    caption: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm interior living space",
    caption: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Gathering space with sofas",
    caption: "Gathering Spaces",
  },
  {
    src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=80",
    alt: "Dining and hosting area",
    caption: "Dining & Hosting",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Bedroom with warm styling",
    caption: "Bedrooms",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Event setup with candles and dinnerware",
    caption: "Event Setup",
  },
  {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
    alt: "Neighborhood streetscape",
    caption: "Neighborhood",
  },
  {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural details",
    caption: "Details & Textures",
  },
];

const eventSchema = z.object({
  name: requiredString("Name", 100),
  email: requiredEmail(),
  phone: requiredString("Phone", 40),
  event_type: requiredString("Event type", 100),
  event_date: optionalString(40),
  guests: optionalString(20),
  budget: optionalString(60),
  message: requiredString("Message", 2000),
  follow_up: optionalString(60),
});

const eventFields: readonly InquiryField[] = [
  { name: "name", label: "Name", required: true, placeholder: "Your full name" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "(555) 555-5555" },
  {
    name: "event_type",
    label: "Type of event",
    type: "select",
    required: true,
    options: ["Private celebration", "Retreat / workshop", "Team gathering", "Community event", "Other"],
  },
  { name: "event_date", label: "Desired date", type: "date" },
  { name: "guests", label: "Number of guests", type: "number", placeholder: "e.g. 20" },
  {
    name: "budget",
    label: "Budget range",
    type: "select",
    options: ["Under $2,500", "$2,500–$5,000", "$5,000–$10,000", "$10,000+"],
  },
  {
    name: "follow_up",
    label: "Preferred follow-up",
    type: "select",
    options: ["Email", "Phone", "Text"],
  },
  { name: "message", label: "Message", type: "textarea", required: true, colspan: 2, placeholder: "Tell us about your event…" },
];

function DasherHousePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src={dasherHouseHero}
            alt="Dasher House interior with long dining table"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-orange">
              <span className="h-px w-10 bg-brand-orange" aria-hidden />
              Flagship Asset
            </div>
            <div className="mb-8 inline-block rounded-xl border border-white/20 bg-white p-4 shadow-lg">
              <img
                src={dasherHouseLogo.url}
                alt="The Dasher House logo"
                className="h-16 w-auto sm:h-20"
              />
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
              Dasher House
            </h1>
            <p className="mt-6 text-lg text-white/85">
              The flagship hospitality and event property of Dasher House Enterprises.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              Designed for memorable stays, private gatherings, retreats, and curated
              experiences, Dasher House brings together comfort, character, hospitality, and
              intentional use of space.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">

              <Button asChild size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90">
                <a href="#" aria-label="Book on Airbnb">Book on Airbnb</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 bg-transparent text-white hover:bg-white hover:text-ink"
              >
                <a href="#event-inquiry">Inquire About an Event</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Property Overview"
            title="A hospitality property and event destination — with purpose."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Dasher House is the flagship asset in the Dasher House Enterprises portfolio. It
              serves as both a hospitality property and an event destination, offering a warm,
              elevated setting for guests, hosts, families, teams, and communities.
            </p>
            <p>
              It reflects the company's wider approach to real estate: acquire or develop
              properties with potential, activate them with purpose, and create spaces that
              generate both commercial and human value.
            </p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-y border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Use Cases" title="Ways to experience Dasher House." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((u) => (
              <div key={u.title} className="rounded-lg border border-stone bg-ivory p-7">
                <h3 className="font-display text-lg font-semibold text-ink">{u.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="The Experience" title="Comfort, character, and space that hosts you well." />
          <ul className="grid gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-md border border-stone bg-white px-4 py-3 text-sm text-ink"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-y border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Inside Dasher House." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <figure
                key={g.caption + i}
                className={`overflow-hidden rounded-md border border-stone ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <figcaption className="sr-only">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-stone bg-white p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Planning a stay?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Dasher House is available for short-stay bookings and private hospitality experiences.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90">
              <a href="#" aria-label="View Airbnb availability">View Airbnb Availability</a>
            </Button>
          </div>
        </div>
      </section>

      {/* EVENT INQUIRY */}
      <section id="event-inquiry" className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Event Inquiry"
          title="Tell us about your event."
          description="Share a few details and the Dasher House team will follow up personally."
        />
        <div className="mt-10">
          <InquiryForm
            schema={eventSchema}
            fields={eventFields}
            submitLabel="Send Event Inquiry"
            confirmationMessage="Your Dasher House inquiry has been received. The team will follow up with you soon."
          />
        </div>
      </section>
    </>
  );
}