import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  component: Index,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

function Index() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent", { description: "We'll be in touch shortly." });
      setValues({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-display text-xl font-semibold tracking-tight">Kindling</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#story" className="hover:text-foreground">Story</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <Button asChild variant="outline" size="sm" className="rounded-full">
          <a href="#contact">Get in touch</a>
        </Button>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-10 pb-24 md:grid-cols-12 md:px-10 md:pt-16 md:pb-32">
        <div className="md:col-span-7">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" />
            Issue 001 — Now in private beta
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Work that <em className="italic text-accent">feels</em>
            <br />
            considered.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Kindling is a quiet workspace for writers, designers and independent
            studios — built for focus, craft, and the small rituals of good work.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group rounded-full px-6">
              <a href="#contact">
                Request an invite
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <a href="#story" className="text-sm font-medium text-foreground underline underline-offset-4 decoration-accent/60 hover:decoration-accent">
              Read the manifesto
            </a>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8 text-sm">
            <div>
              <dt className="text-muted-foreground">Studios</dt>
              <dd className="mt-1 font-display text-2xl">120+</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Countries</dt>
              <dd className="mt-1 font-display text-2xl">18</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Uptime</dt>
              <dd className="mt-1 font-display text-2xl">99.9</dd>
            </div>
          </dl>
        </div>

        <div className="relative md:col-span-5">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--gradient-warm)] blur-2xl opacity-70" />
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-editorial)]">
            <img
              src={heroImage}
              alt="Editorial abstract composition in warm cream and terracotta"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-editorial)] md:block">
            <p className="font-display text-sm italic text-muted-foreground">"Finally, a tool that gets out of the way."</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-foreground">— Lena K., Studio Fold</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Tell us what<br />you're building.
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              We read every message. Expect a thoughtful reply within two working days.
            </p>
            <p className="mt-10 font-display text-lg">hello@kindling.studio</p>
          </div>

          <form onSubmit={onSubmit} noValidate className="md:col-span-7 space-y-6 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-editorial)]">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  maxLength={100}
                  placeholder="Ada Lovelace"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  maxLength={255}
                  placeholder="ada@studio.co"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                maxLength={1000}
                placeholder="A little about your project…"
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-muted-foreground">{values.message.length}/1000</p>
              <Button type="submit" size="lg" disabled={submitting} className="rounded-full px-6">
                {submitting ? "Sending…" : "Send message"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} Kindling Studio. Made with care.</p>
          <p className="font-display italic">A calm place to do good work.</p>
        </div>
      </footer>
    </main>
  );
}
