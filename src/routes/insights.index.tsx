import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/section-heading";
import { ArrowRight } from "lucide-react";
import { INSIGHT_ARTICLES } from "@/lib/insights-data";

export const Route = createFileRoute("/insights/")({
  component: InsightsPage,
});

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
          {INSIGHT_ARTICLES.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-stone bg-white transition-colors hover:border-brand-blue/50"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {article.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink">{article.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.description}
                </p>
                <a
                  href={`/insights/${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-blue"
                  aria-label={`Read ${article.title}`}
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
