import React, { useState } from "react";
import styles from "./customInput.module.scss";


interface IFormInput {
  placeholder: string;
  labelText?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  type?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
}
interface ITextAreaInput {
  placeholder: string;
  labelText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
  disabled?: boolean;
}

export const CustomInput = ({
  placeholder,
  labelText,
  errorMessage,
  onChange,
  ...rest
}: IFormInput) => {
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};


export const CustomTextAreaInput = ({
  value,
  placeholder,
  labelText,
  onChange,
  errorMessage,
}: ITextAreaInput) => {
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <textarea
        cols={10}
        rows={5}
        className={styles.textarea}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};


