import { ToneOscillatorType } from "tone";
import Button from "../../interfaces/Button";

interface OscSimpleProps {
  setWaveform: (newWaveform: ToneOscillatorType) => void;
}

const OscSimple = ({ setWaveform }: OscSimpleProps) => {
  return (
    <div className="my-container">
      <div>osc</div>

      <select
        onChange={(e) => setWaveform(e.target.value as ToneOscillatorType)}
      >
        <option value="sine">sine</option>
        <option value="triangle">triangle</option>
        <option value="square">square</option>
        <option value="sawtooth">sawtooth</option>
      </select>
    </div>
  );
};

export default OscSimple;
