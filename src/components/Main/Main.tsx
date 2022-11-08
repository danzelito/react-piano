import { KeyboardWithInstruments } from '../Keyboard/WithInstruments';
import {useAudioContext} from '../AudiocontextProvider/useAudioContext';
import {NoAudioMessage} from '../NoAudioMessage';

const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <KeyboardWithInstruments /> : <NoAudioMessage />;
};

export {Main};

