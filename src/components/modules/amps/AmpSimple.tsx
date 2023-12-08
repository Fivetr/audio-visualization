import Knob from "../../interfaces/Knob";

interface AmpSimpleProps {
  gain: number;
  setGain: (newGain: number) => void;
}

const AmpSimple = ({ setGain, gain }: AmpSimpleProps) => {
  return (
    // HTML elements: Michael Zayne Lumpkin
    // Style: Desong Li
    <div className="my-container h-[7.5rem] flex flex-col">
      <span className="title">AMP</span>
      <Knob
        label={"Gain"}
        min={0}
        max={1}
        value={gain}
        setValue={setGain}
        steps={20}
      />
    </div>
  );
};

export default AmpSimple;
