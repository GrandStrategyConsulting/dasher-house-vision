import { createFileRoute, Outlet } from "@tanstack/react-router";

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
  component: () => <Outlet />,
});
