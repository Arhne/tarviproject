"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", key: "home", text: "Home" },
  { href: "/#about", key: "about us", text: "About" },
  { href: "/services", key: "our services", text: "Services" },
  {
    key: "dropdown",
    text: "Resources",
    children: [
      { href: "/team", key: "our team", text: "Our Team" },
      { href: "/events", key: "events", text: "Events" },
      { href: "/gallery", key: "gallery", text: "Gallery" },
      { href: "/news", key: "news", text: "News" },
    ],
  },
  { href: "/contact", key: "contact", text: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [menu, setMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const currentHash = typeof window !== "undefined" ? window.location.hash : "";
    const currentFullPath = pathname + currentHash;
    const matchedLink = NAV_LINKS.find((link) => link.href === currentFullPath);

    if (matchedLink?.href) {
      setActiveLink(matchedLink.href);
    } else {
      setActiveLink(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    const body = document.body;
    if (menu) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
    return () => body.classList.remove("no-scroll");
  }, [menu]);

  const closeMenu = () => {
    setMenu(false);
  };

  const isActive = (href?: string) => href && activeLink === href;

  return (
    <>
      <header
        className={`${styles.navwrap} ${scrolled && !menu ? styles.scrolled : ""} ${
          menu ? styles.menuOpen : ""
        }`}
      >
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          <Image src="/logo-brand.png" width={44} height={44} alt="TARV logo" />
          <span>TARV</span>
        </Link>

        <nav className={styles.desktopmenu} aria-label="Primary">
          {NAV_LINKS.map((eachlink) =>
            eachlink.children ? (
              <div key={eachlink.key} className={styles.dropdownParent}>
                <button type="button" className={styles.dropdownToggle} aria-haspopup="true">
                  {eachlink.text}
                  <span className={styles.chevron} aria-hidden>
                    ▾
                  </span>
                </button>
                <ul className={styles.dropdownMenu}>
                  {eachlink.children.map((child) => (
                    <li key={child.key}>
                      <Link
                        href={child.href}
                        className={isActive(child.href) ? styles.active : styles.menulist}
                      >
                        {child.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={eachlink.key}
                href={eachlink.href!}
                className={isActive(eachlink.href) ? styles.active : styles.menulist}
              >
                {eachlink.text}
              </Link>
            )
          )}
          <Link href="/contact" className={styles.cta}>
            Partner with us
          </Link>
        </nav>

        <button
          type="button"
          className={`${styles.hamburger} ${menu ? styles.open : ""}`}
          onClick={() => setMenu((v) => !v)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {menu && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Mobile menu">
          <nav className={styles.overlayNav}>
            {NAV_LINKS.map((eachlink) =>
              eachlink.children ? (
                <div key={eachlink.key} className={styles.mobileGroup}>
                  <button
                    type="button"
                    onClick={() => setMobileDropdown((v) => !v)}
                    className={styles.dropdownToggle}
                    aria-expanded={mobileDropdown}
                  >
                    {eachlink.text}
                    <span className={styles.chevron}>{mobileDropdown ? "▾" : "▸"}</span>
                  </button>
                  {mobileDropdown && (
                    <ul className={styles.mobileDropdown}>
                      {eachlink.children.map((child) => (
                        <li key={child.key}>
                          <Link
                            href={child.href}
                            className={
                              isActive(child.href) ? styles.active : styles.mobilelist
                            }
                            onClick={closeMenu}
                          >
                            {child.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={eachlink.key}
                  href={eachlink.href!}
                  className={isActive(eachlink.href) ? styles.active : styles.mobilelist}
                  onClick={closeMenu}
                >
                  {eachlink.text}
                </Link>
              )
            )}
            <Link href="/contact" className={styles.cta} onClick={closeMenu}>
              Partner with us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
