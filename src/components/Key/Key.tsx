import React from 'react';
import {NoteType} from '../../domain/note';
import styles from './Key.module.css';

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Key: React.FC<KeyProps> = (props) => {
  const {type, label, ...rest} = props;
  return (
    <button className={styles[type]} type="button" {...rest}>
      {label}
    </button>
  );
};

export {Key};
