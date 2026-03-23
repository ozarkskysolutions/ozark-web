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
        message: "Thanks — your message was sent successfully.",
      });

      form.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to send message.";
      setFormState({ status: "error", message });
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#0a1020] p-8 shadow-2xl shadow-cyan-950/20">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
        Project Inquiry
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-white">
        Tell us about your project
      </h3>
      <p className="mt-3 text-sm leading-7 text-white/65">
        Share a few details and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-white/75">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-white/75">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm text-white/75">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-white/75">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40 focus:bg-white/[0.08]"
          />
        </div>

        <button
          type="submit"
          disabled={formState.status === "loading"}
          className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formState.status === "loading" ? "Sending..." : "Send Inquiry"}
        </button>

        {formState.message ? (
          <p
            className={`text-sm ${
              formState.status === "success" ? "text-cyan-200" : "text-red-300"
            }`}
          >
            {formState.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}