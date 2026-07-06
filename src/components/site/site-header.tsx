import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "./logo-mark";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/dasher-house", label: "Dasher House" },
  { to: "/development", label: "Development" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/about", label: "About Lisa" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-stone bg-ivory/90 backdrop-blur"
          : "border-transparent bg-ivory/70 backdrop-blur",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Dasher House Enterprises home">
          <LogoMark showWordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-ink"
              activeProps={{ className: "text-brand-blue" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <Button
            asChild
            variant="outline"
            className="hidden border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white lg:inline-flex"
          >
            <Link to="/partnerships">Partner With Us</Link>
          </Button>
          <Button
            asChild
            className="hidden bg-brand-orange text-white shadow-sm hover:bg-brand-orange/90 sm:inline-flex"
          >
            <Link to="/dasher-house">Book Dasher House</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-stone text-ink xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[65px] z-40 h-[calc(100dvh-65px)] overflow-y-auto border-t border-stone bg-ivory xl:hidden">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-ink"
                  activeProps={{ className: "text-brand-blue" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button
                asChild
                className="bg-brand-orange text-white hover:bg-brand-orange/90"
                onClick={() => setOpen(false)}
              >
                <Link to="/dasher-house">Book Dasher House</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue hover:text-white"
                onClick={() => setOpen(false)}
              >
                <Link to="/partnerships">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}