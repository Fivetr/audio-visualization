import Knob from "../../interfaces/Knob";

interface FilterProps {
  cutoffFrequency: number;
  setCutoff: (freq: number) => void;
  resonance: number;
  setResonance: (q: number) => void;
}

const LowpassFilter = ({
  cutoffFrequency,
  resonance,
  setCutoff,
  setResonance,
}: FilterProps) => {
  return (
    <div className="my-container">
      Lowpass filter
      <Knob
        label="freq"
        min={0}
        max={22000}
        steps={5000}
        unit="hz"
        value={cutoffFrequency}
        digitPrecision={0}
        setValue={setCutoff}
      />
      <Knob
        label="resonance"
        min={0}
        max={60}
        steps={50}
        value={resonance}
        setValue={setResonance}
      />
    </div>
  );
};

export default LowpassFilter;
