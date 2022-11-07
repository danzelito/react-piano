import {Key} from '../Key';
import {notes} from '../../domain/note';
import styles from './Keyboard.module.css';

const Keyboard = () => {
  return (
    <div>
      {notes.map((note) => {
        const {midi, type, index, octave, pitch} = note;
		  return <Key key={midi} type={type} label={pitch} />;
      })}
    </div>
  );
};

export {Keyboard};
