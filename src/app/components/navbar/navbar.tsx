"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
// import { document } from "postcss";

const Navbar = () => {
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

  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("");
  const [menu, setMenu] = useState(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const currentHash = window.location.hash;
    const currentFullPath = pathname + currentHash;

    const matchedLink = NAV_LINKS.find((link) => link.href === currentFullPath);

    // Only update activeLink if it has actually changed
    if (matchedLink && activeLink !== matchedLink.href) {
      setActiveLink(matchedLink.href);
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

  return (
    <div className={styles.navwrap}>
      <Link href="/">
        <Image src="/logo-brand.png" width={40} height={50} alt="Logo" />
      </Link>

      {menu ? (
        // <div className={styles.overlay} onClick={() => setMenu(!menu)}>
        <div
          className={`${styles.overlay} ${fadeOut ? "fadeOut" : ""}`}
          onClick={handleCloseMenu}
        >
          {NAV_LINKS.map((eachlink) => (
            <li key={eachlink.key}>
              {/* <Link
       href={eachlink.href}
       className={
         pathname === eachlink.href
           ? styles.active
           : styles.menulist
       }
     >
       {eachlink.text}
     </Link> */}
              <Link
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
          ))}
        </div>
      ) : (
        <ul className={styles.desktopmenu}>
          {NAV_LINKS.map((eachlink) => (
            <li key={eachlink.key}>
              <Link
                href={eachlink.href}
                className={
                  activeLink === eachlink.href ? styles.active : styles.menulist
                }
              >
                {eachlink.text}
              </Link>
            </li>
          ))}
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
{
  /* <div className={styles.search}>
    <input type="search" className={styles.input} placeholder="Search Anything" />
    <Image
        src="/search.png"
        width={19}
        height={4}
        alt="Search icon"
        />
    </div> */
}
