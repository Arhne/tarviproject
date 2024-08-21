import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface CardProps {
  icon?: ReactNode;
  title?: string;
  content?: string;
}

const Card = ({ icon = null, title = "", content = "" }: CardProps) => {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <p className={styles.content}>
        {title && <span className={styles.heading}>{title}</span>}
        {content}
      </p>
    </div>
  );
};

export default Card;
