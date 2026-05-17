import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { team } from "@/lib/site-content";

export function PageHero({
  overline,
  title,
  copy,
  image,
  cta,
}: {
  overline: string;
  title: string;
  copy: string;
  image?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-obsidian text-brilliance">
      <Atmosphere />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.78fr] lg:px-10">
        <div className="relative z-10 max-w-4xl">
          <Overline>{overline}</Overline>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.96] text-brilliance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <PulseDivider />
          <p className="mt-7 max-w-2xl text-lg leading-8 text-brilliance/82 sm:text-xl sm:leading-9">
            {copy}
          </p>
          {cta ? (
            <div className="mt-9">
              <CtaLink href={cta.href}>{cta.label}</CtaLink>
            </div>
          ) : null}
        </div>
        <HeroImage image={image ?? "/assets/network-globe.png"} />
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-obsidian px-5 py-20 sm:px-8 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  overline,
  title,
  copy,
  center = false,
}: {
  overline: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Overline center={center}>{overline}</Overline>
      <h2 className="mt-5 font-display text-4xl font-black leading-tight text-brilliance sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-brilliance/76">{copy}</p> : null}
    </div>
  );
}

export function Overline({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <p
      className={`font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}

export function CtaLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a href={href} className={variant === "primary" ? "btn-primary" : "btn-secondary"}>
      {children}
    </a>
  );
}

export function TeamGrid({ spacious = false }: { spacious?: boolean }) {
  return (
    <div className={`mt-12 grid gap-6 ${spacious ? "lg:grid-cols-3" : "md:grid-cols-3"}`}>
      {team.map((member) => (
        <article key={member.name} className="card overflow-hidden">
          <div className={spacious ? "relative aspect-[4/5]" : "relative aspect-square"}>
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
          </div>
          <div className={spacious ? "p-7" : "p-6"}>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-pink">
              {member.role}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold text-brilliance">{member.name}</h3>
            <p className="mt-4 text-sm leading-7 text-brilliance/74">{member.bio}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.16em] text-aqua">
              {member.socials.map((social) => (
                <a key={social.label} href={social.href} className="hover:text-pink">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ValueGrid({
  items,
}: {
  items: Array<{ title: string; copy: string; icon?: string; accent?: string }>;
}) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {items.map((item) => (
        <article
          key={item.title}
          className="card p-6"
          style={{ "--frame-accent": item.accent } as CSSProperties}
        >
          {item.icon ? (
            <Image
              src={item.icon}
              alt=""
              width={72}
              height={72}
              className="mb-5 h-16 w-16 object-contain"
            />
          ) : null}
          <h3 className="font-display text-2xl font-bold text-brilliance">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-brilliance/72">{item.copy}</p>
        </article>
      ))}
    </div>
  );
}

export function CtaBand({
  overline,
  title,
  copy,
  href = "/connect",
  label = "Start a conversation",
}: {
  overline: string;
  title: string;
  copy?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Section className="border-y border-pink/20">
      <div className="relative overflow-hidden border border-pink/35 bg-[radial-gradient(circle_at_88%_20%,rgba(217,46,133,0.28),transparent_18rem),linear-gradient(135deg,rgba(217,46,133,0.12),rgba(1,0,0,0)_55%)] p-8 sm:p-12">
        <SectionHeading overline={overline} title={title} copy={copy} />
        <div className="mt-8">
          <CtaLink href={href}>{label}</CtaLink>
        </div>
      </div>
    </Section>
  );
}

export function PulseDivider() {
  return (
    <div className="mt-8 w-full max-w-xl text-pink" aria-hidden="true">
      <svg
        viewBox="0 0 620 44"
        className="h-9 w-full overflow-visible drop-shadow-[0_0_12px_rgba(217,46,133,0.9)]"
        fill="none"
        role="presentation"
      >
        <path
          d="M0 22H122L137 22L151 8L168 36L187 14L205 22H315L331 22L346 6L365 38L383 22H620"
          stroke="currentColor"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function Atmosphere() {
  return (
    <>
      <div className="hero-particles absolute inset-0 -z-20" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(217,46,133,0.26),transparent_18rem),radial-gradient(circle_at_86%_24%,rgba(0,255,255,0.12),transparent_18rem),radial-gradient(circle_at_70%_82%,rgba(138,0,196,0.22),transparent_20rem)]" />
    </>
  );
}

function HeroImage({ image }: { image: string }) {
  return (
    <div className="relative min-h-[24rem] lg:min-h-[38rem]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink/55 shadow-[0_0_52px_rgba(217,46,133,0.38)] sm:h-[26rem] sm:w-[26rem]" />
      <div className="absolute left-1/2 top-1/2 h-[15rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[50%] border border-aqua/35 sm:h-[20rem] sm:w-[34rem]" />
      <Image
        src={image}
        alt=""
        width={900}
        height={900}
        priority
        className="image-fade absolute left-1/2 top-1/2 max-h-[34rem] w-[min(92vw,34rem)] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_0_42px_rgba(217,46,133,0.48)]"
      />
    </div>
  );
}
