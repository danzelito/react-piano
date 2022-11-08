import React from "react";
import clsx from "clsx";
import { MidiValue, NoteType } from "../../domain/note";
import styles from "./Key.module.css";

type PressCallback = () => void;

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;

  onDown: PressCallback;
  onUp: PressCallback;
};

const Key: React.FunctionComponent<KeyProps> = (props) => {
  const { type, label, onUp, onDown, ...rest } = props;
  return (
    <button
      className={clsx(styles.key, styles[type])}
      type="button"
      {...rest}
      onMouseDown={onDown}
      onMouseUp={onUp}
    >
      {label}
    </button>
  );
};

export { Key };
