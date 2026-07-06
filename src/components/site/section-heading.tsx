import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-blue",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-brand-orange" aria-hidden />
          {eyebrow}
        </div>
      ) : null}
      <Tag className="text-balance text-3xl font-semibold text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </Tag>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}