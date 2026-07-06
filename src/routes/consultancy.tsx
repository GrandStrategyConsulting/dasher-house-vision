import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SectionHeading } from "@/components/site/section-heading";
import {
  InquiryForm,
  optionalString,
  requiredEmail,
  requiredString,
  type InquiryField,
} from "@/components/site/inquiry-form";

export const Route = createFileRoute("/consultancy")({
  head: () => ({
    meta: [
      { title: "Real Estate Consultancy | Dasher House Enterprises" },
      {
        name: "description",
        content:
          "Dasher House Enterprises provides real estate consultancy for property owners, aspiring developers, and partners ready to evaluate, activate, or develop property.",
      },
      { property: "og:title", content: "Real Estate Consultancy | Dasher House Enterprises" },
      {
        property: "og:description",
        content:
          "Real estate advisory for property owners, aspiring developers, and partners.",
      },
      { property: "og:url", content: "/consultancy" },
    ],
    links: [{ rel: "canonical", href: "/consultancy" }],
  }),
  component: ConsultancyPage,
});

const SERVICES = [
  {
    title: "Property Vision & Strategy",
    body: "Clarify the highest and best use of a property, portfolio, or development idea.",
  },
  {
    title: "Short-Stay Rental Strategy",
    body: "Position properties for Airbnb, hospitality, guest experience, and operational readiness.",
  },
  {
    title: "Event Property Activation",
    body: "Explore how a property can generate value through events, retreats, private bookings, and hosted experiences.",
  },
  {
    title: "Multifamily Development Readiness",
    body: "Support early thinking around multi-unit residential development, feasibility, positioning, and project readiness.",
  },
  {
    title: "Community Living Concepts",
    body: "Develop ideas for community-centered housing models and shared living environments.",
  },
  {
    title: "Regeneration-Area Opportunity Review",
    body: "Assess neighborhood potential, community context, growth signals, and development opportunity.",
  },
];

const consultSchema = z.object({
  name: requiredString("Name", 100),
  email: requiredEmail(),
  phone: requiredString("Phone", 40),
  inquiry_type: requiredString("Type of inquiry", 100),
  property_location: optionalString(120),
  property_status: optionalString(120),
  goal: requiredString("Goal", 2000),
  timeline: optionalString(60),
  budget: optionalString(60),
  meeting_format: optionalString(60),
});

const consultFields: readonly InquiryField[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  {
    name: "inquiry_type",
    label: "Type of inquiry",
    type: "select",
    required: true,
    options: [
      "Property vision & strategy",
      "Short-stay rental strategy",
      "Event property activation",
      "Multifamily development readiness",
      "Community living concept",
      "Regeneration-area opportunity",
      "Other",
    ],
  },
  { name: "property_location", label: "Property location" },
  {
    name: "property_status",
    label: "Current property status",
    type: "select",
    options: ["Owned", "Under contract", "Evaluating", "Prospective"],
  },
  { name: "goal", label: "What are you trying to do?", type: "textarea", required: true, colspan: 2 },
  {
    name: "timeline",
    label: "Timeline",
    type: "select",
    options: ["Immediate", "3–6 months", "6–12 months", "12+ months"],
  },
  { name: "budget", label: "Budget or investment range" },
  {
    name: "meeting_format",
    label: "Preferred meeting format",
    type: "select",
    options: ["Video call", "Phone call", "In person"],
  },
];

function ConsultancyPage() {
  return (
    <>
      <section className="border-b border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Consultancy"
            title="Real estate consultancy for people ready to think bigger about property."
            description="Practical guidance for property owners, aspiring developers, and partners who want to evaluate, activate, or develop real estate with greater clarity and confidence."
          />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Dasher House Enterprises offers practical, entrepreneurial, and community-aware
              real estate advisory. The consultancy is designed for people who are serious about
              moving beyond property ownership into property strategy.
            </p>
            <p>
              Led by Lisa Moore, Owner, Founder, and CEO, the company helps clients understand
              what they have, what is possible, what needs to be tested, and what steps are
              required to move toward execution.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Services" title="Where we can help." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-lg border border-stone bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Request Consultation"
          title="Have a property, project, or development idea you want to evaluate?"
        />
        <div className="mt-10">
          <InquiryForm
            schema={consultSchema}
            fields={consultFields}
            submitLabel="Request Consultation"
            confirmationMessage="Your consultation inquiry has been received. Dasher House Enterprises will follow up with you soon."
          />
        </div>
      </section>
    </>
  );
}