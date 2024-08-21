import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const NAV_LINKS = [
    {
      href: "/",
      key: "Home",
      text: "Home",
    },
    {
      href: "/#about",
      key: "About Us",
      text: "About Us",
    },
    {
      href: "/services",
      key: "Our Services (TARVI)",
      text: "Our Services (TARVI)",
    },
    {
      href: "/team",
      key: "Our Team",
      text: "Our Team",
    },
    {
      href: "/contact",
      key: "Contact Us",
      text: "Contact Us",
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.upperfooter}>
        <p className={styles.flex}>
          <Image
            src="/logo-brand.png"
            width={80}
            height={50}
            className={styles.doodle}
            alt="advert"
          />
          TARVi
        </p>
        <p className={styles.office}>
          TARVi OFFICE ADDRESSES phone numbers and email
        </p>
        <p>
          (South/West )17 Amadu Tijani Str,, Off Sanusi Fafunwa, V.I, Lagos
          Nigeria (+234) 0808 770 0000
        </p>
        <p>
          ( South/ East): Plot C, 14/15 Old Airport Road, Emene, Enugu Phone
          (+234) 0808 660 0000
        </p>
        <p>
          (South/South): No, 3 Umunkwo Street Off St Bridget&apos;s School Opposite
          Labour Party Office Asaba Delta State, Nigeria.Phone: (+234) 0808 550
          0000
        </p>
      </div>

      <div className={styles.lowerfooter}>
        <ul className={styles.desktopmenu}>
          {NAV_LINKS.map((eachlink) => (
            <Link
              href={eachlink.href}
              key={eachlink.key}
              className={styles.menulist}
            >
              {eachlink.text}
            </Link>
          ))}
        </ul>
        <p>Copyright © 2024 The African Rebirth Vision - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
