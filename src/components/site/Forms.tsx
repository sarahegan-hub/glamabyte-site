"use client";

import { useState, type FormEvent } from "react";
import { personaOptions } from "@/lib/site-content";

type NewsletterFormProps = {
  compact?: boolean;
  buttonLabel?: string;
};

const inputClass =
  "w-full border border-brilliance/20 bg-obsidian/80 px-4 py-3 font-sans text-sm text-brilliance outline-none transition placeholder:text-brilliance/42 focus:border-pink focus:ring-2 focus:ring-pink/30";

const labelClass =
  "mb-2 block font-sans text-xs font-bold uppercase tracking-[0.16em] text-brilliance/70";

export function NewsletterForm({ compact = false, buttonLabel = "Subscribe" }: NewsletterFormProps) {
  const { status, handleSubmit } = useNetlifyForm();

  return (
    <>
      <form
        name="newsletter"
        method="POST"
        action="/__forms.html"
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
          {buttonLabel}
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
        action="/__forms.html"
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
        action="/__forms.html"
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

export function DebateForm() {
  const { status, handleSubmit } = useNetlifyForm();

  return (
    <>
      <form
        name="great-aussie-ai-ethics-debate"
        method="POST"
        action="/__forms.html"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="grid gap-7"
      >
        <input type="hidden" name="form-name" value="great-aussie-ai-ethics-debate" />
        <p className="hidden">
          <label>
            Do not fill this out: <input name="bot-field" />
          </label>
        </p>
        <RadioGroup
          legend="Is technology improving or ruining elite sport?"
          name="vote"
          options={["It's making it better.", "It's ruining it."]}
          required
        />
        <TextAreaField
          label="Tell us why."
          name="comment"
        />
        <p className="-mt-4 text-sm italic leading-7 text-brilliance/68">
          *Your quotes may be used anonymously.
        </p>
        <FormField label="Email" name="email" type="email" />
        <p className="text-sm leading-7 text-brilliance/68">
          We collect your vote, optional comment and optional email so Glamabyte can analyse the
          debate, publish a public summary and send you the verdict if you opt in. Your quotes may
          be used anonymously. We will not publish your email. If you provide your email, you may
          receive promotional emails from Glamabyte and/or Boardrooms to Backyards™. You can
          unsubscribe at any time. See our{" "}
          <a
            href="https://glamabyte.com.au/privacy-policy"
            className="text-aqua underline decoration-pink/60 underline-offset-4 hover:text-pink"
          >
            Privacy Policy
          </a>
          .
        </p>
        <button type="submit" className="btn-primary w-fit">
          Submit vote
        </button>
      </form>
      {status === "sent" ? (
        <div className="mt-6 border border-aqua/35 bg-aqua/10 p-5 text-brilliance">
          <p className="font-display text-2xl font-bold">Your vote is in.</p>
          <p className="mt-3 leading-8 text-brilliance/78">
            The verdict lands in the first Boardrooms to Backyards™ newsletter on Monday 29 June.
            Subscribe for the verdict so you do not miss it.
          </p>
        </div>
      ) : (
        <FormStatus status={status} />
      )}
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
      const response = await fetch(form.action, {
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

function RadioGroup({
  legend,
  name,
  options,
  required = false,
}: {
  legend: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset className="grid gap-3">
      <legend className={labelClass}>{legend}</legend>
      <div className="grid gap-3">
        {options.map((option) => (
          <label
            key={option}
            className="flex gap-3 border border-brilliance/15 bg-obsidian/80 p-4 text-sm leading-6 text-brilliance/82 transition focus-within:border-pink focus-within:ring-2 focus-within:ring-pink/30"
          >
            <input
              className="mt-1 h-4 w-4 accent-pink"
              type="radio"
              name={name}
              value={option}
              required={required}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
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
