import Knob from "../../interfaces/Knob";

interface AmpSimpleProps {
  gain: number;
  setGain: (newGain: number) => void;
}

const AmpSimple = ({ setGain, gain }: AmpSimpleProps) => {
  return (
    <div className="my-container">
      amp
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
