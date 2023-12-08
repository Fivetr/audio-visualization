import { ToneOscillatorType } from "tone";

interface OscSimpleProps {
  setWaveform: (newWaveform: ToneOscillatorType) => void;
}

const OscSimple = ({ setWaveform }: OscSimpleProps) => {
  return (
    // HTML elements: Michael Zayne Lumpkin
    // Style: Desong Li
    <div className="my-container h-20 flex items-center ">
      <span className="title mr-4">OCS</span>
      <div>
        <select
          className=" text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
          onChange={(e) => setWaveform(e.target.value as ToneOscillatorType)}
        >
          <option value="sine">sine</option>
          <option value="triangle">triangle</option>
          <option value="square">square</option>
          <option selected value="sawtooth">
            sawtooth
          </option>
        </select>
      </div>
    </div>
  );
};

export default OscSimple;
