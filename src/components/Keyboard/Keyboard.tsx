import React from "react";
import { Key } from "../Key";
import { selectKey } from "../../domain/keyboard";
import { MidiValue, notes } from "../../domain/note";
import styles from "./Keyboard.module.css";

export type KeyboardProps = {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
};

const Keyboard: React.FunctionComponent<KeyboardProps> = (props) => {
  const { loading, stop, play } = props;
  return (
    <div className={styles.keyboard}>
      {notes.map((note) => {
        const { midi, type, index, octave } = note;
        const label = selectKey(octave, index);
        return (
          <Key
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
};

export { Keyboard };
