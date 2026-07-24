import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";

interface BannerProp {
  picture?: StaticImageData | string;
  picturetwo?: StaticImageData | string;
  gradtitletwo?: string;
  title?: string;
  titletwo: string;
  content?: string;
  contenttwo?: string;
  style?: string;
  secondcontent?: string;
  gradtitle?: string;
}

export const Banners = ({
  picture,
  picturetwo,
  title,
  titletwo,
  content,
  contenttwo,
  secondcontent,
  gradtitle,
  gradtitletwo,
  style,
}: BannerProp) => {
  return (
    <div className={`${styles.bannerbg} ${style || ""}`}>
      <div className={styles.banner}>
        <div className={styles.imgwrap}>
          {picture && (
            <Image
              src={picture}
              alt="Vision"
              width={640}
              height={480}
              className={styles.img}
            />
          )}
        </div>

        <div className={styles.copy}>
          <p className={styles.kicker}>Purpose</p>
          <h2 className={styles.title}>
            {title} <span className="accent">{gradtitle}</span>
          </h2>
          <p className={styles.content}>{content}</p>
        </div>

        <div className={`${styles.copy} ${styles.copyAlt}`}>
          <p className={styles.kicker}>Direction</p>
          <h2 className={styles.title}>
            {titletwo} <span className="accent">{gradtitletwo}</span>
          </h2>
          <p className={styles.content}>{contenttwo}</p>
          {secondcontent && <p className={styles.content}>{secondcontent}</p>}
        </div>

        <div className={styles.imgwrap}>
          {picturetwo && (
            <Image
              src={picturetwo}
              alt="Mission"
              width={640}
              height={480}
              className={styles.img}
            />
          )}
        </div>
      </div>
    </div>
  );
};
