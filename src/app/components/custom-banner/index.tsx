import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface bannerprop {
  picture?: any;
  picturetwo?: any;
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
}: bannerprop) => {
  return (
    <div className={`${styles.bannerbg} ${style}`}>
      <div className={styles.banner}>
        <p className={styles.imgwrap}>
          <Image
            src={picture}
            alt="a banner pic"
            width={350}
            height={200}
            className={styles.img}
          />
        </p>

        <div className={styles.card}>
          <p className={styles.title}>
            {title} <span className="gradcolor">{gradtitle}</span>
          </p>
          <p className={styles.content}>{content}</p>
        </div>

        <div className={styles.card}>
          <p className={styles.title}>
            {titletwo} <span className="gradcolor">{gradtitletwo}</span>
          </p>
          <p className={styles.content}>{contenttwo}</p>
          <p className={styles.content}>{secondcontent}</p>
        </div>

        <p className={styles.imgwrap}>
          <Image
            src={picturetwo}
            alt="a banner pic"
            width={350}
            height={200}
            className={styles.img}
          />
        </p>
      </div>
    </div>
  );
};
