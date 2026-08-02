import logoAsset from "@/assets/dasher-house-logo.png";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  showWordmark?: boolean;
  inverted?: boolean;
};

export function LogoMark({ className, inverted = false }: LogoMarkProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center",
        inverted ? "rounded-lg bg-white p-1.5 shadow-sm" : "",
        className,
      )}
    >
      <img
        src={logoAsset}
        alt="Dasher House Enterprises"
        width={523}
        height={386}
        className="h-9 w-auto object-contain sm:h-10"
      />
    </div>
  );
}
