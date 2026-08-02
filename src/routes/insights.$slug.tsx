import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getInsightArticle, INSIGHT_ARTICLES } from "@/lib/insights-data";
import type { InsightArticle } from "@/lib/insights-data";

const SITE_URL = "https://dasher-house-vision.dailey.cloud";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getInsightArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const canonical = `${SITE_URL}/insights/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} | Dasher House Enterprises` },
        { name: "description", content: loaderData.description },
        { name: "author", content: "Dasher House Enterprises" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:url", content: canonical },
        { property: "og:image", content: loaderData.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.title },
        { name: "twitter:description", content: loaderData.description },
        { name: "twitter:image", content: loaderData.image },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: InsightArticlePage,
});

function InsightArticlePage() {
  const article = Route.useLoaderData() as InsightArticle;
  const currentIndex = INSIGHT_ARTICLES.findIndex((item) => item.slug === article.slug);
  const nextArticle = INSIGHT_ARTICLES[(currentIndex + 1) % INSIGHT_ARTICLES.length];
  const canonical = `${SITE_URL}/insights/${article.slug}`;
  const publishedDate = "2026-08-02";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: article.image,
        datePublished: publishedDate,
        dateModified: publishedDate,
        mainEntityOfPage: canonical,
        author: { "@type": "Organization", name: "Dasher House Enterprises", url: SITE_URL },
        publisher: { "@type": "Organization", name: "Dasher House Enterprises", url: SITE_URL },
        articleSection: article.category,
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
          { "@type": "ListItem", position: 3, name: article.title, item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article>
        <header className="border-b border-stone bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange"
            >
              <ArrowLeft className="h-4 w-4" /> All insights
            </Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
              {article.category}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {article.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>By Dasher House Enterprises</span>
              <span aria-hidden="true">•</span>
              <time dateTime={publishedDate}>August 2, 2026</time>
              <span aria-hidden="true">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <img
            src={article.image}
            alt=""
            className="aspect-[16/8] w-full rounded-xl border border-stone object-cover"
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:px-8">
          <div className="min-w-0">
            <section aria-labelledby="direct-answer" className="rounded-xl border border-brand-blue/25 bg-brand-blue/5 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">In brief</p>
              <h2 id="direct-answer" className="mt-3 font-display text-2xl font-semibold text-ink">
                The direct answer
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground">{article.answer}</p>
            </section>

            <div className="mt-12 space-y-12">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-3xl font-semibold text-ink">{section.heading}</h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets && (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-base leading-7 text-muted-foreground">
                          <Check className="mt-1 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <section className="mt-14 border-t border-stone pt-12" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="font-display text-3xl font-semibold text-ink">Frequently asked questions</h2>
              <div className="mt-7 divide-y divide-stone border-y border-stone">
                {article.faq.map((item) => (
                  <div key={item.question} className="py-6">
                    <h3 className="font-display text-xl font-semibold text-ink">{item.question}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-lg bg-ivory p-6 sm:p-8" aria-labelledby="sources-heading">
              <h2 id="sources-heading" className="font-display text-2xl font-semibold text-ink">Sources and further reading</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                This educational article was reviewed against the following authoritative sources. Regulations and facts can change; verify local requirements and obtain professional advice for a specific property.
              </p>
              <ul className="mt-5 space-y-3">
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-orange">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-stone bg-white p-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Editorial note</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Dasher House Enterprises publishes practical perspectives on real estate, hospitality, property activation, and community-centered development.
            </p>
            <Button asChild className="mt-6 w-full bg-brand-orange text-white hover:bg-brand-orange/90">
              <Link to="/contact">Discuss a property</Link>
            </Button>
          </aside>
        </div>
      </article>

      <section className="border-t border-stone bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Read next</p>
          <a href={`/insights/${nextArticle.slug}`} className="mt-4 flex items-center justify-between gap-6 rounded-lg border border-stone p-6 transition-colors hover:border-brand-blue/50">
            <span className="font-display text-2xl font-semibold text-ink">{nextArticle.title}</span>
            <ArrowRight className="h-5 w-5 shrink-0 text-brand-orange" />
          </a>
        </div>
      </section>
    </>
  );
}
