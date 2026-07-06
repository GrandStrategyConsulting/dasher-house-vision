import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DisclaimerBox({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-4 rounded-lg border border-brand-blue/25 bg-white/60 p-5 text-sm leading-relaxed text-muted-foreground",
        className,
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
      <p className="min-w-0">{children}</p>
    </div>
  );
}