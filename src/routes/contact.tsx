import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Calendar, HandCoins, Handshake, Mic } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import {
  InquiryForm,
  optionalString,
  requiredEmail,
  requiredString,
  type InquiryField,
} from "@/components/site/inquiry-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Dasher House Enterprises" },
      {
        name: "description",
        content:
          "Contact Dasher House Enterprises for Dasher House bookings, real estate consultancy, partnership opportunities, or media inquiries.",
      },
      { property: "og:title", content: "Contact | Dasher House Enterprises" },
      {
        property: "og:description",
        content:
          "Start a conversation with Dasher House Enterprises.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CARDS = [
  {
    icon: Calendar,
    title: "Book Dasher House",
    body: "For Airbnb stays, private events, retreats, and hosted experiences.",
    cta: "Book or Inquire",
    to: "/dasher-house",
  },
  {
    icon: HandCoins,
    title: "Request Consultancy",
    body: "For property owners, aspiring developers, and individuals seeking real estate strategy support.",
    cta: "Request Consultancy",
    to: "/consultancy",
  },
  {
    icon: Handshake,
    title: "Explore Partnership",
    body: "For developers, investors, property owners, and aligned collaborators.",
    cta: "Explore Partnership",
    to: "/partnerships",
  },
  {
    icon: Mic,
    title: "Media or Speaking Inquiry",
    body: "For interviews, features, panels, or speaking opportunities related to real estate, hospitality, and community development.",
    cta: "Send Media Inquiry",
    to: "/contact",
  },
] as const;

const contactSchema = z.object({
  name: requiredString("Name", 100),
  email: requiredEmail(),
  phone: optionalString(40),
  inquiry_type: requiredString("Inquiry type", 80),
  organization: optionalString(120),
  property_location: optionalString(120),
  message: requiredString("Message", 2000),
  follow_up: optionalString(60),
});

const contactFields: readonly InquiryField[] = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  {
    name: "inquiry_type",
    label: "Inquiry type",
    type: "select",
    required: true,
    options: ["Booking or event", "Consultancy", "Partnership", "Media / speaking", "General"],
  },
  { name: "organization", label: "Organization / company" },
  { name: "property_location", label: "Property or project location" },
  { name: "message", label: "Message", type: "textarea", required: true, colspan: 2 },
  {
    name: "follow_up",
    label: "Preferred follow-up",
    type: "select",
    options: ["Email", "Phone", "Video call"],
  },
];

function ContactPage() {
  return (
    <>
      <section className="border-b border-stone bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Start the conversation with Dasher House Enterprises."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-lg border border-stone bg-white p-6 transition-colors hover:border-brand-blue/40"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md bg-brand-orange/15 text-brand-orange">
                <c.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-lg font-semibold text-ink">{c.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <div className="mt-6">
                <Link
                  to={c.to}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange"
                >
                  {c.cta} <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="send-message"
        className="mx-auto max-w-4xl scroll-mt-28 px-4 pb-24 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="General Inquiry"
          title="Send us a message."
          description="Not sure which route fits? Send a general note and we'll direct it to the right person."
        />
        <div className="mt-10">
          <InquiryForm
            schema={contactSchema}
            fields={contactFields}
            submitLabel="Send Inquiry"
            confirmationMessage="Your inquiry has been received. Dasher House Enterprises will follow up with you soon."
          />
        </div>
      </section>
    </>
  );
}
