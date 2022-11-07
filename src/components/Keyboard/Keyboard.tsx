import { Key } from "../Key";
import { selectKey } from "../../domain/keyboard";
import { notes } from "../../domain/note";
import styles from "./Keyboard.module.css";

const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      {notes.map((note) => {
        const { midi, type, index, octave} = note;
        const label = selectKey(octave, index);
        return <Key key={midi} type={type} label={label} />;
      })}
    </div>
  );
};

export { Keyboard };
