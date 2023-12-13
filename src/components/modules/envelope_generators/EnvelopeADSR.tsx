// ALL: Michael Zayne Lumpkin
import Knob from "../../interfaces/Knob";

interface ADSR {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

interface EnvelopeADSRProps {
  adsr: ADSR;
  setAdsr: (adsr: ADSR) => void;
}

const EnvelopeASDR = ({ adsr, setAdsr }: EnvelopeADSRProps) => {
  // amlitude evelope; Attack, Descay, Sustian, Release
  const knobConfig = { min: 0, max: 2, steps: 50 };

  return (
    // HTML elements: Michael Zayne Lumpkin
    // Style: Desong Li
    <div className="my-container h-[300px]">
      <span className="title">AMPLITUDE ENVELOPE</span>
      {/* adjust the level */}
      <Knob
        label={"Attack"}
        value={adsr.attack}
        setValue={(val) => setAdsr({ ...adsr, attack: val })}
        {...knobConfig}
      />
      <Knob
        label={"Decay"}
        value={adsr.decay}
        setValue={(val) => setAdsr({ ...adsr, decay: val })}
        {...knobConfig}
      />
      <Knob
        label={"Sustain"}
        value={adsr.sustain}
        setValue={(val) => setAdsr({ ...adsr, sustain: val })}
        {...knobConfig}
        max={1}
      />
      <Knob
        label={"Release"}
        value={adsr.release}
        setValue={(val) => setAdsr({ ...adsr, release: val })}
        {...knobConfig}
        max={5}
      />
    </div>
  );
};

export default EnvelopeASDR;
