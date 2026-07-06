import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SectionHeading } from "@/components/site/section-heading";
import { DisclaimerBox } from "@/components/site/disclaimer-box";
import {
  InquiryForm,
  optionalString,
  requiredEmail,
  requiredString,
  type InquiryField,
} from "@/components/site/inquiry-form";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships & Investment | Dasher House Enterprises" },
      {
        name: "description",
        content:
          "Dasher House Enterprises explores aligned development partnerships with property owners, developers, investors, and community stakeholders.",
      },
      { property: "og:title", content: "Partnerships & Investment | Dasher House Enterprises" },
      {
        property: "og:description",
        content:
          "Aligned partnerships in thoughtful development and high-growth locations.",
      },
      { property: "og:url", content: "/partnerships" },
    ],
    links: [{ rel: "canonical", href: "/partnerships" }],
  }),
  component: PartnershipsPage,
});

const TYPES = [
  {
    title: "Developer Partnerships",
    body: "For developers seeking a strategic, hospitality-informed, or community-centered partner.",
  },
  {
    title: "Investor Conversations",
    body: "For aligned investors interested in real estate opportunities with long-term value potential.",
  },
  {
    title: "Property Owner Collaborations",
    body: "For owners with underutilized assets or properties that may benefit from repositioning, development, or activation.",
  },
  {
    title: "Community & Civic Partnerships",
    body: "For stakeholders interested in responsible development, neighborhood activation, and community value creation.",
  },
];

const partnerSchema = z.object({
  name: requiredString("Name", 100),
  email: requiredEmail(),
  phone: requiredString("Phone", 40),
  organization: optionalString(120),
  role: optionalString(80),
  partnership_type: requiredString("Partnership type", 80),
  summary: requiredString("Summary", 2000),
  market: optionalString(120),
  timeline: optionalString(60),
  message: optionalString(2000),
  follow_up: optionalString(60),
});

const partnerFields: readonly InquiryField[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "organization", label: "Organization" },
  { name: "role", label: "Role" },
  {
    name: "partnership_type",
    label: "Partnership type",
    type: "select",
    required: true,
    options: [
      "Developer partnership",
      "Investor conversation",
      "Property owner collaboration",
      "Community / civic partnership",
    ],
  },
  { name: "market", label: "Location or market" },
  {
    name: "timeline",
    label: "Timeline",
    type: "select",
    options: ["Immediate", "3–6 months", "6–12 months", "12+ months"],
  },
  {
    name: "summary",
    label: "Project or opportunity summary",
    type: "textarea",
    required: true,
    colspan: 2,
  },
  { name: "message", label: "Additional message", type: "textarea", colspan: 2 },
  {
    name: "follow_up",
    label: "Preferred follow-up",
    type: "select",
    options: ["Email", "Phone", "Video call"],
  },
];

function PartnershipsPage() {
  return (
    <>
      <section className="border-b border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Partnerships & Investment"
            title="Partnerships for thoughtful development in high-growth areas."
            description="Dasher House Enterprises collaborates with aligned developers, investors, property owners, and community stakeholders to explore development opportunities with long-term value potential."
          />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Dasher House Enterprises is interested in strategic partnerships where vision,
              execution, capital, community insight, and development discipline can come together.
            </p>
            <p>
              The company's focus is on projects with strong fundamentals: location, demand,
              neighborhood momentum, housing need, adaptive reuse potential, hospitality
              activation, or community living opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Ways to Partner" title="Four kinds of conversations." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TYPES.map((t) => (
            <div key={t.title} className="rounded-lg border border-stone bg-white p-8">
              <h3 className="font-display text-xl font-semibold text-ink">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <DisclaimerBox>
            Information on this website is for general informational and introductory purposes
            only. It does not constitute an offer to sell securities, a solicitation of
            investment, legal advice, financial advice, or tax advice. Any potential partnership
            or investment opportunity is subject to independent due diligence, professional
            advice, formal documentation, and applicable laws.
          </DisclaimerBox>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Start a Conversation"
          title="Explore an aligned partnership."
        />
        <div className="mt-10">
          <InquiryForm
            schema={partnerSchema}
            fields={partnerFields}
            submitLabel="Start Partnership Conversation"
            confirmationMessage="Your partnership inquiry has been received. Dasher House Enterprises will follow up with you soon."
          />
        </div>
      </section>
    </>
  );
}