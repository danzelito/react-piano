import { useSoundFont } from "../../adapters/Soundfont/useSoundfont";
import { useAudioContext } from "../AudiocontextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";
import { useMount } from "../../utils/useMount/useMount";

export const KeyboardWithInstruments = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundFont({ AudioContext });

  useMount(load);
  return <Keyboard loading={loading} play={play} stop={stop} />;
};
