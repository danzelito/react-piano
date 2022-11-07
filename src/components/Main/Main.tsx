import React from 'react';
import {Keyboard} from '../Keyboard/Keyboard';
import {useAudioContext} from '../AudiocontextProvider/useAudioContext';
import {NoAudioMessage} from '../NoAudioMessage';

const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};

export {Main};
