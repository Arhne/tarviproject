"use client";

import React from "react";
import { CustomInput, CustomTextAreaInput } from "../components/custom-input";
import styles from "./styles.module.scss";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <header className={styles.pageHead}>
        <p className={styles.kicker}>Get in touch</p>
        <h1>Partner with us</h1>
        <p className={styles.lead}>
          Have a question about our work, or want to explore a partnership?
          Send a message — we&apos;re always open to meaningful conversations.
        </p>
      </header>

      <a
        className={styles.btn}
        href="https://wa.me/27735658420"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={22} />
        Message us on WhatsApp
      </a>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <CustomInput placeholder="Email" type="email" labelText="Email" />
        <CustomTextAreaInput
          labelText="Message"
          placeholder="Tell us about your business needs, and we will get back to you with solutions"
        />
        <button className={styles.sendbtn} type="submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
