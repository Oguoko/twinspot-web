"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import styles from "./contact.module.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  dates: string;
  groupSize: string;
  budgetRange: string;
  interests: string[];
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const interestOptions = [
  "Birding focus",
  "Wildlife safari",
  "Photography",
  "Family travel",
  "Private guiding",
  "Conservation visits",
];

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  dates: "",
  groupSize: "",
  budgetRange: "",
  interests: [],
  message: "",
};

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormState((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formState.name.trim()) {
      nextErrors.name = "Please share your name.";
    }

    if (!formState.email.trim()) {
      nextErrors.email = "An email address helps us respond quickly.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formState.groupSize.trim()) {
      nextErrors.groupSize = "Let us know your group size.";
    }

    if (!formState.budgetRange.trim()) {
      nextErrors.budgetRange = "Select a budget range to guide planning.";
    }

    if (!formState.message.trim()) {
      nextErrors.message = "Tell us a bit about your travel goals.";
    } else if (formState.message.trim().length < 20) {
      nextErrors.message = "Please add a little more detail (20+ characters).";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormState(initialState);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>Name *</span>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>

        <label className={styles.field}>
          <span>Email *</span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </label>

        <label className={styles.field}>
          <span>Phone (optional)</span>
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </label>

        <label className={styles.field}>
          <span>Preferred dates (optional)</span>
          <input
            type="text"
            name="dates"
            value={formState.dates}
            onChange={handleChange}
            placeholder="e.g. Aug 12–24, 2025"
          />
        </label>

        <label className={styles.field}>
          <span>Group size *</span>
          <input
            type="text"
            name="groupSize"
            value={formState.groupSize}
            onChange={handleChange}
            placeholder="e.g. 4 travellers"
          />
          {errors.groupSize && (
            <span className={styles.error}>{errors.groupSize}</span>
          )}
        </label>

        <label className={styles.field}>
          <span>Budget range *</span>
          <select
            name="budgetRange"
            value={formState.budgetRange}
            onChange={handleChange}
          >
            <option value="">Select a range</option>
            <option value="$3k-$5k">$3k–$5k per person</option>
            <option value="$5k-$8k">$5k–$8k per person</option>
            <option value="$8k-$12k">$8k–$12k per person</option>
            <option value="$12k+">$12k+ per person</option>
          </select>
          {errors.budgetRange && (
            <span className={styles.error}>{errors.budgetRange}</span>
          )}
        </label>
      </div>

      <div className={styles.interests}>
        <p className={styles.interestsLabel}>Interests</p>
        <div className={styles.interestGrid}>
          {interestOptions.map((interest) => (
            <label key={interest} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={formState.interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <label className={styles.field}>
        <span>Message *</span>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={6}
          placeholder="Share your goals, pace preferences, and any must-see species."
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </label>

      <button type="submit" className={styles.submit}>
        Send enquiry
      </button>

      {submitted && (
        <p className={styles.success} role="status">
          Thank you. We have received your note and will respond within two
          business days.
        </p>
      )}
    </form>
  );
}
