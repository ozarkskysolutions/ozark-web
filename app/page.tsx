import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ParallaxBackground from "@/components/ParallaxBackground";
import ParallaxSection from "@/components/ParallaxSection";
import FadeInSection from "@/components/FadeInSection";

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Modern React and Next.js applications built for speed, scalability, and long-term maintainability.",
  },
  {
    title: "Backend & API Systems",
    description:
      "Reliable backend services, integrations, and data flows designed to support real business operations.",
  },
  {
    title: "Automation & AI Solutions",
    description:
      "AI-powered tools and automation workflows that reduce manual work, streamline operations, and improve efficiency.",
  },
];

const highlights = [
  "Modern frontend architecture",
  "Scalable backend systems",
  "AI-powered automation",
  "Clean, maintainable code",
];

const work = [
  {
    title: "Operations Dashboard",
    description:
      "A modern dashboard experience that improved visibility and reduced manual tracking for operations-focused teams.",
  },
  {
    title: "Mobile Scheduling Platform",
    description:
      "A scheduling solution designed to streamline appointment management and create a faster, clearer user experience across devices.",
  },
  {
    title: "Enterprise Data & Reporting",
    description:
      "A reporting-focused solution that turned complex data into clear, structured views teams could use to make decisions faster.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      <ParallaxBackground />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Ozark Sky Solutions logo"
              width={38}
              height={38}
              priority
              className="h-10 w-10 object-contain transition duration-300 hover:scale-105"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Ozark Sky Solutions
            </p>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition duration-300 hover:text-white">
              Services
            </a>
            <a href="#work" className="transition duration-300 hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition duration-300 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative z-10">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">
              Web apps · APIs · AI automation
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Custom Web Apps & Automation That Help Your Business Run Faster.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Ozark Sky Solutions builds modern web applications, scalable backend
              systems, and AI-powered automation tools that help businesses reduce
              manual work, improve efficiency, and operate with confidence.
            </p>

            <p className="mt-4 text-sm text-white/60">
              For small businesses, teams, and growing companies that need better
              software — not just a website.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:opacity-95"
              >
                Request a Project Estimate
              </a>
              <a
                href="#work"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-white/10"
              >
                View Work
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.07]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ParallaxSection offset={40}>
            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1120] p-6">
                  <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                      <Image
                        src="/logo.png"
                        alt="Ozark Sky Solutions icon"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">
                        Ozark Sky Solutions
                      </p>
                      <p className="text-xs text-white/50">
                        Modern software delivery
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 transition duration-300 hover:bg-cyan-400/15">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                        Delivery Focus
                      </p>
                      <p className="mt-2 text-lg font-medium text-white">
                        Software that reduces manual work and supports real business
                        growth.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                          Frontend
                        </p>
                        <p className="mt-2 text-base font-medium text-white">
                          High-quality React / Next.js interfaces
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                          Backend
                        </p>
                        <p className="mt-2 text-base font-medium text-white">
                          APIs, services, integrations, and automation
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Approach
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/70">
                        We build software that looks polished on the surface and is
                        disciplined underneath — designed to solve real problems,
                        support real workflows, and hold up over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl lg:block" />
              <div className="absolute -bottom-8 left-10 hidden h-28 w-28 rounded-full bg-blue-500/15 blur-2xl lg:block" />
            </div>
          </ParallaxSection>
        </div>
      </section>

      <FadeInSection>
        <section id="services" className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for businesses that need more than a basic website.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                From polished user experiences to dependable backend systems, we
                deliver software that supports growth, efficiency, and long-term
                maintainability.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 h-1 w-14 rounded-full bg-cyan-300/80" />
                  <h3 className="text-xl font-medium text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/65">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="work"
          className="relative z-10 border-y border-white/10 bg-white/[0.02]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Selected Work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Designed to feel premium, built to perform.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                We focus on delivering software that improves workflows, reduces
                friction, and gives teams better tools to do their jobs.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {work.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-[#0a1020] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                    Case Study
                  </p>
                  <h3 className="mt-4 text-xl font-medium">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contact" className="relative z-10">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-10 backdrop-blur lg:p-14">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                    Let’s Build Something Strong
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Need a polished web app, internal tool, or modern software
                    presence?
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/70">
                    Ozark Sky Solutions partners with businesses that need software
                    that looks sharp, works reliably, and supports real-world
                    growth.
                  </p>

                  <p className="mt-6 text-sm text-white/60">
                    Typically respond within 24 hours.
                  </p>

                  <div className="mt-8">
                    <a
                      href="mailto:contact@ozarkskysolutions.com"
                      className="text-base font-medium text-cyan-200 transition hover:text-white"
                    >
                      contact@ozarkskysolutions.com
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </FadeInSection>

      <footer className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between lg:px-8">
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
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <p>© {new Date().getFullYear()} Ozark Sky Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}