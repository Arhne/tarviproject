"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Navbar = () => {
  const NAV_LINKS = [
    {
      href: "/",
      key: "home",
      text: "Home",
    },
    {
      href: "/#about",
      key: "about us",
      text: "About Us",
    },
    {
      href: "/services",
      key: "our services",
      text: "Our Services (TARV)",
    },
    {
      key: "dropdown",
      text: "Resources",
      children: [
        {
          href: "/team",
          key: "our team",
          text: "Our Team",
        },
        {
          href: "/events",
          key: "events",
          text: "Events",
        },
        {
          href: "/gallery",
          key: "gallery",
          text: "Gallery",
        },
        {
          href: "/news",
          key: "news",
          text: "News",
        },
      ],
    },
    {
      href: "/contact",
      key: "contact",
      text: "Contact Us",
    },
  ];

  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("");
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const currentHash = window.location.hash;
    const currentFullPath = pathname + currentHash;

    const matchedLink = NAV_LINKS.find((link) => link.href === currentFullPath);

    // Only update activeLink if it has actually changed
    if (matchedLink && activeLink !== matchedLink.href) {
      setActiveLink(matchedLink.href || "");
    } else if (!matchedLink && activeLink !== pathname) {
      setActiveLink(pathname);
    }
  }, [pathname, activeLink]);

  const handleMenuToggle = () => {
    setMenu(!menu);

    const body = document.querySelector("body") as HTMLElement;

    if (body) {
      if (!menu) {
        body.classList.add("no-scroll");
      } else {
        body.classList.remove("no-scroll");
      }
    }
  };

  const handleCloseMenu = () => {
    setFadeOut(true);
    setTimeout(() => {
      setMenu(false);
      setFadeOut(false);
      const body = document.querySelector("body") as HTMLElement;
      if (body) {
        body.classList.remove("no-scroll");
      }
    }, 500);
  };

  const handleDropdownToggle = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={styles.navwrap}>
      <Link href="/">
        <Image src="/logo-brand.png" width={40} height={50} alt="Logo" />
      </Link>

      {menu ? (
        <div className={`${styles.overlay} ${fadeOut ? "fadeOut" : ""}`}>
          {NAV_LINKS.map((eachlink) =>
            eachlink.children ? (
              <div key={eachlink.key}>
                <button
                  onClick={handleDropdownToggle}
                  className={styles.dropdownToggle}
                >
                  {eachlink.text}
                  {dropdown ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
                </button>
                {dropdown && (
                  <ul className={styles.dropdownMenu}>
                    {eachlink.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className={
                            activeLink === child.href
                              ? styles.active
                              : styles.mobilelist
                          }
                          onClick={handleCloseMenu}
                        >
                          {child.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <li key={eachlink.key}>
                <Link
                onClick={handleCloseMenu}
                  href={eachlink.href}
                  className={
                    activeLink === eachlink.href
                      ? styles.active
                      : styles.mobilelist
                  }
                >
                  {eachlink.text}
                </Link>
              </li>
            )
          )}
        </div>
      ) : (
        <ul className={styles.desktopmenu}>
          {NAV_LINKS.map((eachlink) =>
            eachlink.children ? (
              <li
                key={eachlink.key}
                className={styles.dropdownParent}
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
              >
                <button className={styles.dropdownToggle}>
                  {eachlink.text}
                  {dropdown ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
                </button>
                {dropdown && (
                  <ul className={styles.dropdownMenu}>
                    {eachlink.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className={
                            activeLink === child.href
                              ? styles.active
                              : styles.menulist
                          }
                        >
                          {child.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={eachlink.key}>
                <Link
                  href={eachlink.href}
                  className={
                    activeLink === eachlink.href
                      ? styles.active
                      : styles.menulist
                  }
                >
                  {eachlink.text}
                </Link>
              </li>
            )
          )}
        </ul>
      )}

      <div className={styles.hamburger} onClick={handleMenuToggle}>
        {menu ? (
          <MdClose size={25} style={{ color: "rgb(11, 190, 23)" }} />
        ) : (
          <Image
            src="/icon-hamburger.svg"
            width={30}
            height={10}
            alt="menu icon"
          />
        )}
      </div>
    </div>
  );
};
export default Navbar;
