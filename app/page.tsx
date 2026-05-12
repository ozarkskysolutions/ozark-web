import Image from "next/image";
import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import FadeInSection from "@/components/FadeInSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import ParallaxSection from "@/components/ParallaxSection";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    title: "Custom Web App Development",
    description:
      "Modern React and Next.js web applications built for customer portals, booking flows, dashboards, and business-critical workflows.",
    span: "lg:col-span-7",
  },
  {
    title: "Backend API Development",
    description:
      "Secure backend systems, third-party integrations, and data pipelines that connect the tools your business already depends on.",
    span: "lg:col-span-5",
  },
  {
    title: "AI Automation Services",
    description:
      "AI workflow automation, internal tools, and smart assistants that reduce repetitive admin work and speed up daily operations.",
    span: "lg:col-span-5",
  },
  {
    title: "High-Converting Business Websites",
    description:
      "Professional websites designed to explain your value clearly, build trust quickly, and turn more visitors into qualified leads.",
    span: "lg:col-span-7",
  },
];

const highlights = [
  "Custom web applications",
  "AI workflow automation",
  "Backend API systems",
  "Lead-focused websites",
];

const work = [
  {
    title: "Crown & Blade Barber Co.",
    label: "Barbershop & Grooming",
    tags: ["Service Menu", "Booking Flow"],
    description:
      "A service business website concept focused on premium brand trust, clear service pricing, and a faster path from visitor to booked appointment.",
    demo: "https://ozarkskysolutions.github.io/crown-blade-barber/",
    accent: "from-[#d8b76a] via-[#60492a] to-[#1b1511]",
  },
  {
    title: "Pine Hollow Stay",
    label: "Vacation Rental",
    tags: ["Availability", "Guest Inquiry"],
    description:
      "A vacation rental website concept built to showcase the experience, answer booking questions, and guide visitors toward an inquiry.",
    demo: "https://ozarkskysolutions.github.io/pine-hollow-stay/",
    accent: "from-[#99b49a] via-[#304b3d] to-[#101a16]",
  },
  {
    title: "Alder & Coast Realty",
    label: "Luxury Real Estate",
    tags: ["Listings", "Buyer Leads"],
    description:
      "A luxury real estate website concept with structured property presentation, refined messaging, and a polished experience for high-value buyers.",
    demo: "https://ozarkskysolutions.github.io/alder-coast-realty/",
    accent: "from-[#c7d7e2] via-[#385163] to-[#111821]",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#05070d] text-white">
      <ParallaxBackground />
      <SiteHeader />
      <StructuredData />

      <section className="relative z-10 px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid min-h-[calc(100dvh-8rem)] max-w-7xl items-center gap-16 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div>
            <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7.2rem)] font-semibold leading-[0.94] tracking-normal text-white">
              Custom web apps and AI automation for growing businesses.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              Ozark Sky Solutions designs and builds business websites, custom
              web applications, backend API systems, and AI-powered automation
              that help teams save time, capture leads, and operate with
              confidence.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PillCta href="#contact" variant="primary">
                Get a Project Estimate
              </PillCta>
              <PillCta href="#work" variant="secondary">
                View Work
              </PillCta>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/72 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-cyan-200/25 hover:text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ParallaxSection offset={34}>
            <HeroArtifact />
          </ParallaxSection>
        </div>
      </section>

      <FadeInSection>
        <section id="services" className="relative z-10 px-4 py-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Services"
              title="Web development and automation services built around real business outcomes."
              description="Whether you need a better website, a custom customer portal, an internal dashboard, or AI automation for repetitive tasks, the goal is the same: cleaner systems, less manual work, and more confident growth."
            />

            <div className="mt-16 grid gap-5 lg:grid-cols-12">
              {services.map((service, index) => (
                <ShellCard key={service.title} className={service.span}>
                  <div className="flex min-h-64 flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-[#090d17] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/70">
                        0{index + 1}
                      </p>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                    <div>
                      <h3 className="max-w-xl text-2xl font-semibold tracking-normal text-white sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-7 text-white/62">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ShellCard>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="work"
          className="relative z-10 border-y border-white/10 bg-white/[0.025] px-4 py-28 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Selected Work"
              title="Example websites designed to turn attention into action."
              description="These demo projects show how industry-specific design, clear copy, and focused calls to action can help service businesses, hospitality brands, and real estate teams create a stronger online presence."
            />

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {work.map((item, index) => (
                <ShellCard key={item.title}>
                  <article className="flex h-full flex-col rounded-[calc(2rem-0.375rem)] bg-[#080c15] p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                    <ProjectPreview
                      title={item.title}
                      label={item.label}
                      accent={item.accent}
                      index={index}
                      tags={item.tags}
                    />
                    <div className="flex flex-1 flex-col p-4 pt-6">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/44">
                        Demo Site / {item.label}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-normal text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/62">
                        {item.description}
                      </p>
                      <div className="mt-auto pt-7">
                        <PillCta href={item.demo} variant="secondary" external>
                          View Demo
                        </PillCta>
                      </div>
                    </div>
                  </article>
                </ShellCard>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contact" className="relative z-10 px-4 py-28 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <ShellCard>
              <div className="flex min-h-full flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-[linear-gradient(145deg,rgba(255,255,255,0.095),rgba(255,255,255,0.025))] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-12">
                <div>
                  <p className="inline-flex rounded-full border border-cyan-100/15 bg-cyan-100/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/72">
                    Let&apos;s Build Something Strong
                  </p>
                  <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
                    Need a website, web app, or automation system that actually
                    moves the business forward?
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-white/66">
                    Tell us what is slowing your team down, what needs to
                    convert better, or what process needs to be automated. We
                    will help shape the right software plan before a line of
                    code gets written.
                  </p>
                </div>

                <div className="mt-10 space-y-4 text-sm text-white/56">
                  <p>Project estimates, automation audits, and web app consultations typically receive a response within 24 hours.</p>
                  <a
                    href="mailto:ozarkskysolutions@gmail.com"
                    className="inline-flex text-base font-semibold text-cyan-100 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-white"
                  >
                    ozarkskysolutions@gmail.com
                  </a>
                </div>
              </div>
            </ShellCard>

            <ContactForm />
          </div>
        </section>
      </FadeInSection>

      <footer className="relative z-10 border-t border-white/10 bg-black/20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 py-10 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Ozark Sky Solutions logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <span>Ozark Sky Solutions</span>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#work" className="transition-colors hover:text-white">
              Examples
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>

          <p>&copy; {new Date().getFullYear()} Ozark Sky Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-end">
      <div>
        <p className="inline-flex rounded-full border border-cyan-100/15 bg-cyan-100/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/72">
          {label}
        </p>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-lg leading-8 text-white/62 lg:justify-self-end">
        {description}
      </p>
    </div>
  );
}

function ShellCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-white/[0.045] p-1.5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] ${className}`}
    >
      {children}
    </div>
  );
}

function PillCta({
  href,
  children,
  variant,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant: "primary" | "secondary";
  external?: boolean;
}) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center justify-between gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
        isPrimary
          ? "bg-white text-[#070a12] hover:bg-cyan-100"
          : "border border-white/12 bg-white/[0.045] text-white hover:border-cyan-100/25 hover:bg-white/[0.075]"
      }`}
    >
      <span>{children}</span>
      <span
        className={`grid h-9 w-9 place-items-center rounded-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 ${
          isPrimary ? "bg-[#070a12] text-white" : "bg-white/10 text-white"
        }`}
      >
        <ArrowIcon />
      </span>
    </a>
  );
}

function HeroArtifact() {
  return (
    <div className="relative">
      <ShellCard>
        <div className="rounded-[calc(2rem-0.375rem)] bg-[#080c15] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white/[0.07] ring-1 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="Ozark Sky Solutions icon"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white/92">
                  Ozark Sky Solutions
                </p>
                <p className="text-xs text-white/44">Web apps, APIs, automation</p>
              </div>
            </div>
            <div className="hidden rounded-full border border-emerald-200/15 bg-emerald-200/8 px-3 py-1 text-xs text-emerald-100/72 sm:block">
              Systems online
            </div>
          </div>

          <div className="grid gap-4 pt-5">
            <div className="rounded-[1.45rem] border border-cyan-100/14 bg-[linear-gradient(135deg,rgba(125,211,252,0.16),rgba(255,255,255,0.035))] p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/72">
                Delivery Focus
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug text-white">
                Custom software that reduces manual work, improves lead flow,
                and supports real business growth.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MiniPanel title="Frontend" text="React and Next.js interfaces built for conversion and clarity" />
              <MiniPanel title="Backend" text="APIs, integrations, data flows, and automation systems" />
            </div>

            <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.035] p-5">
              <div className="mb-4 flex items-center justify-between text-xs text-white/42">
                <span>Project clarity</span>
                <span>01 / 04</span>
              </div>
              <div className="space-y-2">
                {[72, 88, 58].map((width) => (
                  <div key={width} className="h-2 rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-emerald-200"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ShellCard>
    </div>
  );
}

function MiniPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.035] p-5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">
        {title}
      </p>
      <p className="mt-3 text-base font-semibold leading-6 text-white">{text}</p>
    </div>
  );
}

function ProjectPreview({
  title,
  label,
  accent,
  index,
  tags,
}: {
  title: string;
  label: string;
  accent: string;
  index: number;
  tags: string[];
}) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-gradient-to-br ${accent} p-4`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.22),transparent_35%,rgba(0,0,0,0.18))]" />
      <div className="relative flex h-full flex-col justify-between rounded-[1.15rem] border border-white/18 bg-black/18 p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/36" />
            <span className="h-2 w-2 rounded-full bg-white/28" />
          </div>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/68">
            0{index + 1}
          </span>
        </div>
        <div>
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/62">
            {label}
          </p>
          <p className="mt-2 max-w-[12rem] text-2xl font-semibold leading-tight text-white">
            {title}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/16 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/72"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
    >
      <path
        d="M4.25 11.75 11.5 4.5m0 0H5.75m5.75 0v5.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ozark Sky Solutions",
    url: "https://www.ozarkskysolutions.com",
    email: "ozarkskysolutions@gmail.com",
    description:
      "Custom web application development, backend API systems, business websites, and AI automation services for growing businesses.",
    areaServed: "United States",
    serviceType: [
      "Custom web application development",
      "AI workflow automation",
      "Business process automation",
      "Backend API development",
      "Professional business website design",
      "Internal tools development",
    ],
    sameAs: [
      "https://ozarkskysolutions.github.io/crown-blade-barber/",
      "https://ozarkskysolutions.github.io/pine-hollow-stay/",
      "https://ozarkskysolutions.github.io/alder-coast-realty/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
