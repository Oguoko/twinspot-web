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

const initialState: InquiryState = {
  fullName: "",
  email: "",
  travelDates: "",
  budget: "",
  interests: "",
};

export default function InquiryForm() {
  const [formState, setFormState] = useState<InquiryState>(initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formPane}>
      <h2>Tell Us About Your Trip</h2>
      <p className={styles.formIntro}>
        Fill out the details below and our specialists will craft a custom
        itinerary for you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>FULL NAME</span>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formState.fullName}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, fullName: event.target.value }))
            }
          />
        </label>

        <label className={styles.field}>
          <span>EMAIL ADDRESS</span>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formState.email}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </label>

        <label className={styles.field}>
          <span>TRAVEL DATES</span>
          <input
            type="text"
            name="travelDates"
            placeholder="e.g. October 2024"
            value={formState.travelDates}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                travelDates: event.target.value,
              }))
            }
          />
        </label>

        <label className={styles.field}>
          <span>BUDGET PER PERSON</span>
          <select
            name="budget"
            value={formState.budget}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, budget: event.target.value }))
            }
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
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, interests: event.target.value }))
            }
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
