"use client";

import React from "react";
import { services } from ".";
import Image from "next/image";
import style from "./styles.module.scss";
import Link from "next/link";

interface ServiceMember {
  key: number;
  pic: string;
}

const Services = () => {
  return (
    <div className={style.service}>
      <header className={style.pageHead}>
        <p className={style.kicker}>What we offer</p>
        <h1>Our services</h1>
        <p className={style.lead}>
          From investment facilitation to strategic partnerships, TARV builds
          the bridges that move capital, policy, and opportunity across Africa.
        </p>
      </header>

      <div className={style.memberpic}>
        {services.map((member: ServiceMember, index) => (
          <figure key={member.key} className={style.imgwrap}>
            <Image
              src={member.pic}
              alt={`TARV service ${index + 1}`}
              width={640}
              height={480}
              className={style.img}
            />
            <figcaption>Service focus {String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </div>

      <div className={style.ctaBand}>
        <h2>Ready to collaborate?</h2>
        <p>Tell us about your investment or partnership goals.</p>
        <Link href="/contact" className={style.cta}>
          Contact TARV
        </Link>
      </div>
    </div>
  );
};

export default Services;
