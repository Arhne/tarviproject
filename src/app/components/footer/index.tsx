import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const NAV_LINKS = [
    { href: "/", key: "Home", text: "Home" },
    { href: "/#about", key: "About Us", text: "About" },
    { href: "/services", key: "Services", text: "Services" },
    { href: "/team", key: "Our Team", text: "Team" },
    { href: "/news", key: "News", text: "News" },
    { href: "/contact", key: "Contact Us", text: "Contact" },
  ];

  const offices = [
    {
      region: "Johannesburg",
      address: "36 Fort Street, Birnam, Johannesburg, 2196, South Africa",
      phone: "+27 735 658 420",
    },
    {
      region: "Lagos",
      address: "17 Amadu Tijani Str, Off Sanusi Fafunwa, V.I, Lagos, Nigeria",
      phone: "+234 808 770 0000",
    },
    {
      region: "Enugu",
      address: "Plot C, 14/15 Old Airport Road, Emene, Enugu, Nigeria",
      phone: "+234 808 660 0000",
    },
    {
      region: "Asaba",
      address:
        "No. 3 Umunkwo Street, Off St Bridget's School, Opposite Labour Party Office, Asaba, Delta State, Nigeria",
      phone: "+234 808 550 0000",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.upperfooter}>
        <div className={styles.brandBlock}>
          <p className={styles.flex}>
            <Image
              src="/logo-brand.png"
              width={48}
              height={48}
              className={styles.doodle}
              alt="TARV logo"
            />
            <span>TARV</span>
          </p>
          <p className={styles.tagline}>
            Building trade, finance and investment bridges across Africa.
          </p>
        </div>

        <div className={styles.offices}>
          <h3 className={styles.office}>Offices</h3>
          <div className={styles.officeGrid}>
            {offices.map((office) => (
              <div key={office.region} className={styles.officeItem}>
                <p className={styles.region}>{office.region}</p>
                <p>{office.address}</p>
                <a href={`tel:${office.phone.replace(/\s/g, "")}`}>{office.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.lowerfooter}>
        <ul className={styles.desktopmenu}>
          {NAV_LINKS.map((eachlink) => (
            <li key={eachlink.key}>
              <Link href={eachlink.href} className={styles.menulist}>
                {eachlink.text}
              </Link>
            </li>
          ))}
        </ul>
        <p>© {new Date().getFullYear()} The African Rebirth Vision. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
