"use client";

import { useState, type FormEvent } from "react";
import { personaOptions } from "@/lib/site-content";

type NewsletterFormProps = {
  compact?: boolean;
};

const inputClass =
  "w-full border border-brilliance/20 bg-obsidian/80 px-4 py-3 font-sans text-sm text-brilliance outline-none transition placeholder:text-brilliance/42 focus:border-pink focus:ring-2 focus:ring-pink/30";

const labelClass =
  "mb-2 block font-sans text-xs font-bold uppercase tracking-[0.16em] text-brilliance/70";

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const { status, handleSubmit } = useNetlifyForm();

  return (
    <>
      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={compact ? "grid gap-3" : "grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]"}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <p className="hidden">
          <label>
            Do not fill this out: <input name="bot-field" />
          </label>
        </p>
        <FormField label="First name" name="first-name" required />
        <FormField label="Email" name="email" type="email" required />
        <SelectField label="I am a..." name="persona" options={personaOptions} required />
        <button type="submit" className="btn-primary md:self-end">
          Subscribe
        </button>
      </form>
      <FormStatus status={status} />
    </>
  );
}

export function ConnectForm() {
  const { status, handleSubmit } = useNetlifyForm();

  return (
    <>
      <form
        name="connect"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="grid gap-5"
      >
        <input type="hidden" name="form-name" value="connect" />
        <p className="hidden">
          <label>
            Do not fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Your name" name="name" required />
          <FormField label="Email" name="email" type="email" required />
        </div>
        <FormField label="Organisation" name="organisation" />
        <TextAreaField label="What brought you here?" name="message" required />
        <FormField label="How did you hear about us?" name="referral" />
        <button type="submit" className="btn-primary w-fit">
          Send message
        </button>
      </form>
      <FormStatus status={status} />
    </>
  );
}

export function SpeakingForm() {
  const { status, handleSubmit } = useNetlifyForm();

  return (
    <>
      <form
        name="speaking-enquiry"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="grid gap-5"
      >
        <input type="hidden" name="form-name" value="speaking-enquiry" />
        <p className="hidden">
          <label>
            Do not fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Your name" name="name" required />
          <FormField label="Organisation" name="organisation" required />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Email" name="email" type="email" required />
        </div>
        <TextAreaField label="How can we help?" name="how-can-we-help" required />
        <button type="submit" className="btn-primary w-fit">
          Send enquiry
        </button>
      </form>
      <FormStatus status={status} />
    </>
  );
}

function useNetlifyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return { status, handleSubmit };
}

function FormStatus({ status }: { status: "idle" | "sending" | "sent" | "error" }) {
  if (status === "idle") {
    return null;
  }

  return (
    <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-pink" role="status">
      {status === "sending"
        ? "Sending..."
        : status === "sent"
          ? "Message received."
          : "Something went wrong. Please email hello@glamabyte.com.au."}
    </p>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label>
      <span className={labelClass}>{label}</span>
      <input
        className={inputClass}
        name={name}
        type={type}
        required={required}
        placeholder={label}
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label>
      <span className={labelClass}>{label}</span>
      <textarea
        className={`${inputClass} min-h-36 resize-y`}
        name={name}
        required={required}
        placeholder={label}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label>
      <span className={labelClass}>{label}</span>
      <select className={inputClass} name={name} required={required} defaultValue="">
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
