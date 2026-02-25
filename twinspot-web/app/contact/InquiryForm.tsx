"use client";

import { FormEvent, useState } from "react";

import styles from "./contact.module.css";

type InquiryState = {
  fullName: string;
  email: string;
  travelDates: string;
  budget: string;
  interests: string;
};

type InquiryErrors = Partial<Record<keyof InquiryState, string>>;

const initialState: InquiryState = {
  fullName: "",
  email: "",
  travelDates: "",
  budget: "",
  interests: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values: InquiryState): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.interests.trim()) {
    errors.interests = "Travel interests are required.";
  }

  return errors;
}

export default function InquiryForm() {
  const [formState, setFormState] = useState<InquiryState>(initialState);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [banner, setBanner] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formState);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setBanner(null);
      return;
    }

    setErrors({});
    setBanner(null);
    setIsSending(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setBanner({
        type: "success",
        message: "Inquiry sent. We’ll respond within 24–48 hours.",
      });
      setFormState(initialState);
    } catch {
      setBanner({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleFieldChange = (field: keyof InquiryState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className={styles.formPane}>
      <h2>Tell Us About Your Trip</h2>
      <p className={styles.formIntro}>
        Fill out the details below and our specialists will craft a custom
        itinerary for you.
      </p>

      {banner ? (
        <div
          className={`${styles.banner} ${
            banner.type === "success" ? styles.successBanner : styles.errorBanner
          }`}
          role="status"
          aria-live="polite"
        >
          {banner.message}
        </div>
      ) : null}

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.field}>
          <span>FULL NAME</span>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formState.fullName}
            onChange={(event) => handleFieldChange("fullName", event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName ? (
            <p id="fullName-error" className={styles.errorText}>
              {errors.fullName}
            </p>
          ) : null}
        </label>

        <label className={styles.field}>
          <span>EMAIL ADDRESS</span>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formState.email}
            onChange={(event) => handleFieldChange("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className={styles.errorText}>
              {errors.email}
            </p>
          ) : null}
        </label>

        <label className={styles.field}>
          <span>TRAVEL DATES</span>
          <input
            type="text"
            name="travelDates"
            placeholder="e.g. October 2024"
            value={formState.travelDates}
            onChange={(event) =>
              handleFieldChange("travelDates", event.target.value)
            }
          />
        </label>

        <label className={styles.field}>
          <span>BUDGET PER PERSON</span>
          <select
            name="budget"
            value={formState.budget}
            onChange={(event) => handleFieldChange("budget", event.target.value)}
          >
            <option value="">$3,000 - $5,000</option>
            <option value="$3,000 - $5,000">$3,000 - $5,000</option>
            <option value="$5,000 - $8,000">$5,000 - $8,000</option>
            <option value="$8,000 - $12,000">$8,000 - $12,000</option>
            <option value="$12,000+">$12,000+</option>
          </select>
        </label>

        <label className={styles.field}>
          <span>TRAVEL INTERESTS</span>
          <textarea
            name="interests"
            rows={6}
            placeholder="What are you hoping to see? Specific species, regions, or activity preferences…"
            value={formState.interests}
            onChange={(event) => handleFieldChange("interests", event.target.value)}
            aria-invalid={Boolean(errors.interests)}
            aria-describedby={errors.interests ? "interests-error" : undefined}
          />
          {errors.interests ? (
            <p id="interests-error" className={styles.errorText}>
              {errors.interests}
            </p>
          ) : null}
        </label>

        <button type="submit" className={styles.submitButton} disabled={isSending}>
          {isSending ? "Sending…" : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}
