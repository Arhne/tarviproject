import React from "react";
import { CustomInput, CustomTextAreaInput } from "../components/custom-input";
import styles from "./styles.module.scss";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>
        {" "}
        Partner with <span className="gradcolor">Us</span>
      </h1>
      <p>
        We strive to stay in communication with our clients. Have a question
        about our business, or want to see if we match your specific needs? Send
        us a message, or give us a call. We&apos;re always happy to meet new clients!
      </p>
      <button className={styles.btn} type="button">
        <FaWhatsapp size={30} style={{ color: "rgb(11, 190, 23)" }} />
        <a href="#">Message us on WhatsApp</a>
      </button>

      <CustomInput placeholder="Email" type="email" />
      <CustomTextAreaInput placeholder="Tell us about your business needs, and we will get back to you with solutions" />
      <button className={styles.sendbtn} type="submit">
        Send
      </button>
    </div>
  );
};

export default Contact;
