import { useState } from "react";
import { useForm, type FieldValues, type Path, type DefaultValues, type Resolver } from "react-hook-form";
import { z, type ZodType } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export type InquiryField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "date" | "number";
  placeholder?: string;
  required?: boolean;
  options?: readonly string[];
  colspan?: 1 | 2;
};

type InquiryFormProps<T extends FieldValues> = {
  fields: readonly InquiryField[];
  submitLabel: string;
  confirmationTitle?: string;
  confirmationMessage: string;
  schema: ZodType<T>;
  defaultValues?: DefaultValues<T>;
};

export function InquiryForm<T extends FieldValues>({
  fields,
  submitLabel,
  confirmationTitle = "Thank you",
  confirmationMessage,
  schema,
  defaultValues,
}: InquiryFormProps<T>) {
  const [submitted, setSubmitted] = useState(false);
  const resolver: Resolver<T> = async (values) => {
    const result = schema.safeParse(values);
    if (result.success) return { values: result.data, errors: {} };
    const errors: Record<string, { type: string; message: string }> = {};
    for (const issue of result.error.issues) {
      const key = issue.path.join(".") || "root";
      if (!errors[key]) errors[key] = { type: issue.code, message: issue.message };
    }
    return { values: {} as T, errors: errors as never };
  };
  const form = useForm<T>({
    resolver,
    defaultValues,
    mode: "onBlur",
  });

  if (submitted) {
    return (
      <div className="rounded-lg border border-brand-blue/20 bg-white p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{confirmationTitle}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{confirmationMessage}</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(async () => {
        // Frontend-only submission: persist state on the client and show confirmation.
        // Backend wiring (inquiries table) can be added later.
        await new Promise((resolve) => setTimeout(resolve, 350));
        setSubmitted(true);
        toast.success("Inquiry received");
      })}
      className="rounded-lg border border-stone bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const err = form.formState.errors[field.name as Path<T>];
          const message = err && typeof err === "object" && "message" in err ? String(err.message ?? "") : "";
          const colClass = field.colspan === 2 || field.type === "textarea" ? "sm:col-span-2" : "";
          return (
            <div key={field.name} className={`min-w-0 ${colClass}`}>
              <Label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-wide text-ink/70">
                {field.label}
                {field.required ? <span className="ml-1 text-brand-orange">*</span> : null}
              </Label>
              <div className="mt-2">
                {field.type === "textarea" ? (
                  <Textarea
                    id={field.name}
                    rows={5}
                    placeholder={field.placeholder}
                    {...form.register(field.name as Path<T>)}
                    className="focus-visible:ring-brand-blue"
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    {...form.register(field.name as Path<T>)}
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-ink shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <option value="">Select…</option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Input
                    id={field.name}
                    type={field.type ?? "text"}
                    placeholder={field.placeholder}
                    {...form.register(field.name as Path<T>)}
                    className="focus-visible:ring-brand-blue"
                  />
                )}
              </div>
              {message ? (
                <p className="mt-1.5 text-xs text-destructive">{message}</p>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We respond to inquiries personally within a few business days.
        </p>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="bg-brand-orange text-white hover:bg-brand-orange/90"
          size="lg"
        >
          {form.formState.isSubmitting ? "Sending…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}

// Reusable Zod primitives
export const requiredString = (label: string, max = 500) =>
  z.string().trim().min(1, `${label} is required`).max(max, `${label} is too long`);
export const requiredEmail = () =>
  z.string().trim().min(1, "Email is required").email("Enter a valid email").max(255);
export const optionalString = (max = 500) => z.string().trim().max(max).optional().or(z.literal(""));