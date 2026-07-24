import React from "react";
import { services } from ".";
import Image from "next/image";
import style from "./styles.module.scss";
import Link from "next/link";

const Services = () => {
  return (
    <div className={style.service}>
      <header className={style.pageHead}>
        <p className={style.kicker}>What we offer</p>
        <h1>Our services</h1>
        <p className={style.lead}>
          TARV builds trade, finance, and investment bridges across Africa —
          from policy advocacy and partnership structuring to infrastructure
          delivery and media-led rebranding.
        </p>
      </header>

      <div className={style.serviceGrid}>
        {services.map((service) => (
          <article key={service.key} className={style.serviceCard}>
            <div className={style.media}>
              <Image
                src={service.pic}
                alt={service.title}
                width={800}
                height={560}
                className={style.img}
              />
            </div>
            <div className={style.copy}>
              <p className={style.index}>
                {String(service.key).padStart(2, "0")}
              </p>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
            </div>
          </article>
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
