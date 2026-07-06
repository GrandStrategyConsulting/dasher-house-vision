import logoAsset from "@/assets/dasher-logo.png.asset.json";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  showWordmark?: boolean;
  inverted?: boolean;
};

export function LogoMark({ className, showWordmark = false, inverted = false }: LogoMarkProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-md border p-1",
          inverted ? "border-white/15 bg-white" : "border-stone bg-white",
        )}
      >
        <img
          src={logoAsset.url}
          alt="Dasher House Enterprises"
          width={44}
          height={44}
          className="h-full w-full object-contain"
        />
      </div>
      {showWordmark ? (
        <div className="flex min-w-0 flex-col leading-tight">
          <span
            className={cn(
              "font-display text-base font-semibold tracking-tight",
              inverted ? "text-white" : "text-ink",
            )}
          >
            Dasher House
          </span>
          <span
            className={cn(
              "text-[10px] font-medium uppercase tracking-[0.18em]",
              inverted ? "text-white/60" : "text-muted-foreground",
            )}
          >
            Enterprises
          </span>
        </div>
      ) : null}
    </div>
  );
}