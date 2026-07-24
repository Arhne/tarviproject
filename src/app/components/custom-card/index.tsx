import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface CardProps {
  icon?: ReactNode;
  title?: string;
  content?: string;
  index?: number;
}

const Card = ({ icon = null, title = "", content = "", index }: CardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        {typeof index === "number" && (
          <span className={styles.index}>{String(index).padStart(2, "0")}</span>
        )}
        {icon && <div className={styles.iconContainer}>{icon}</div>}
      </div>
      {title && <h3 className={styles.heading}>{title}</h3>}
      {content && <p className={styles.content}>{content}</p>}
    </article>
  );
};

export default Card;
