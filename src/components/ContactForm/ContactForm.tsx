"use client";

import React, { useState } from "react";
import { isValidEmail, isValidPhoneNumber } from "@/utilities";

import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [successMessage, setSuccessMessage] = useState<string | null>("");

  const handlePhoneInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (
      !isValidPhoneNumber(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      key !== "ArrowLeft" &&
      key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!fullName) {
      setErrorMessage("Full Name is required");
      return;
    }

    if (!email) {
      setErrorMessage("Email is required");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    if (!phoneNumber) {
      setErrorMessage("Phone Number is required");
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setErrorMessage("Invalid phone number format");
      return;
    }

    if (!comments) {
      setErrorMessage("Comments are required");
      return;
    }

    setSuccessMessage("Message sent successfully!");
  };

  return (
    <div className={styles.form_container}>
      <h2 className="title_section">Contact Agent</h2>

      <form onSubmit={handleSubmit} noValidate className={styles.form}>
        <input
          type="text"
          id="fullName"
          placeholder="Full Name*"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          id="email"
          placeholder="Email*"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          id="phoneNumber"
          placeholder="Phone Number*"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onKeyDown={handlePhoneInput}
        />

        <textarea
          id="comments"
          placeholder="Comments*"
          required
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>

        <button title="Contact Now" type="submit" className="send_btn">
          Contact Now
        </button>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
