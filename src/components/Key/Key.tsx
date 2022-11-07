import React from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";
console.log(styles)

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Key: React.FunctionComponent<KeyProps> = (props) => {
  const { type, label, ...rest } = props;
  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  );
};

export { Key };
