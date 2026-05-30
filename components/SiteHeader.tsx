"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Examples" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-5 sm:px-6">
      <div className="relative z-10 mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#070a12]/75 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.28)] shadow-black/20 backdrop-blur-2xl">
        <a
          href="#"
          onClick={closeMenu}
          className="group flex items-center gap-3 rounded-full py-1 pl-1 pr-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.07] ring-1 ring-white/10">
            <Image
              src="/logo.png"
              alt="Ozark Sky Solutions logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/88 sm:text-xs">
            Ozark Sky
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm text-white/68 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.07] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group hidden items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#070a12] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-cyan-100 active:scale-[0.98] md:flex"
        >
          Get an Estimate
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#070a12] text-white transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105">
            <ArrowIcon />
          </span>
        </a>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="relative grid h-11 w-11 place-items-center rounded-full bg-white/[0.07] text-white ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96] md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-0 bg-[#05070d]/88 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-[100dvh] flex-col justify-end px-6 pb-12 pt-28">
          <nav className="space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block rounded-[1.6rem] border border-white/10 bg-white/[0.05] px-6 py-5 text-3xl font-semibold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${isOpen ? 110 + index * 70 : 0}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={closeMenu}
            className={`group mt-6 flex items-center justify-between rounded-full bg-white py-2 pl-6 pr-2 text-base font-semibold text-[#070a12] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isOpen ? "translate-y-0 opacity-100 delay-300" : "translate-y-10 opacity-0"
            }`}
          >
            Get a Project Estimate
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#070a12] text-white transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </header>
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
