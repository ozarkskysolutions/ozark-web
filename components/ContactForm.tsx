"use client";

import { FormEvent, useState } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: "loading", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormState({
        status: "success",
        message: "Thanks - your message was sent successfully.",
      });

      form.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to send message.";
      setFormState({ status: "error", message });
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-1.5 shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
      <div className="rounded-[calc(2rem-0.375rem)] bg-[#080c15] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-8">
        <p className="inline-flex rounded-full border border-cyan-100/15 bg-cyan-100/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/72">
          Web App & Automation Inquiry
        </p>
        <h3 className="mt-5 text-3xl font-semibold tracking-normal text-white">
          Tell us what you want to build or automate
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/62">
          Share a few details about your website, web app, internal tool, or
          automation idea and we&apos;ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-white/72">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-[1.25rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-cyan-200/45 focus:bg-white/[0.075] focus:ring-4 focus:ring-cyan-200/10"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white/72">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-[1.25rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-cyan-200/45 focus:bg-white/[0.075] focus:ring-4 focus:ring-cyan-200/10"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm text-white/72">
              Company
            </label>
            <input
              id="company"
              name="company"
              className="w-full rounded-[1.25rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-cyan-200/45 focus:bg-white/[0.075] focus:ring-4 focus:ring-cyan-200/10"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-white/72">
              Project Goals
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-[1.25rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-cyan-200/45 focus:bg-white/[0.075] focus:ring-4 focus:ring-cyan-200/10"
            />
          </div>

          <button
            type="submit"
            disabled={formState.status === "loading"}
            className="group flex w-full items-center justify-between rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-semibold text-[#070a12] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-cyan-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{formState.status === "loading" ? "Sending..." : "Request Estimate"}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#070a12] text-white transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105">
              <ArrowIcon />
            </span>
          </button>

          {formState.message ? (
            <p
              aria-live="polite"
              className={`text-sm ${
                formState.status === "success" ? "text-cyan-100" : "text-red-300"
              }`}
            >
              {formState.message}
            </p>
          ) : null}
        </form>
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
