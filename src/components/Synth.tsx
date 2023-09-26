import { useState } from "react";
import * as Tone from "tone";
import { Signal } from "tone";
import AmpSimple from "./modules/amps/AmpSimple";
import TriggerSwitch from "./modules/controlers/TriggerSwitch";
import EnvelopeASDR from "./modules/envelope_generators/EnvelopeADSR";
import LowpassFilter from "./modules/filters/LowpassFilter";
import OscSimple from "./modules/oscillators/OscSimple";
import Rack from "./Rack";

const Synth = () => {
  const [ignored, setIgnored] = useState(0);
  const forceUpdate = () => setIgnored(ignored + 1);

  const [gain] = useState(new Signal(0.5));
  const [oscillator] = useState(new Tone.Oscillator("C4", "sine"));
  const [envelope] = useState(
    new Tone.AmplitudeEnvelope({
      attack: 1,
      decay: 1,
      sustain: 0.5,
      release: 1.5,
    })
  );
  const [amp] = useState(new Tone.Multiply());
  const [filter] = useState(new Tone.Filter(22000, "lowpass", -12));

  oscillator.chain(envelope, amp, filter, Tone.Destination);
  gain.connect(amp.factor);

  filter.Q.value = 0;
  const triggerAttack = () => {
    oscillator.start();
    console.log("Trigger Attack");
    envelope.triggerAttack();
  };

  const triggerRelease = () => {
    console.log("Trigger Release");
    envelope.triggerRelease();
  };

  return (
    <>
      <Rack>
        <TriggerSwitch
          onHandler={triggerAttack}
          offHandler={triggerRelease}
          frequency={oscillator.frequency.value as number}
          setFrequency={(freq) => {
            oscillator.frequency.value = freq;
            forceUpdate();
          }}
        />
        <OscSimple
          setWaveform={(newWaveform: Tone.ToneOscillatorType) =>
            (oscillator.type = newWaveform)
          }
        />
        <EnvelopeASDR
          adsr={{
            attack: envelope.attack as number,
            decay: envelope.decay as number,
            sustain: envelope.sustain as number,
            release: envelope.release as number,
          }}
          setAdsr={(newAdsr) => {
            envelope.attack = newAdsr.attack;
            envelope.decay = newAdsr.decay;
            envelope.sustain = newAdsr.sustain;
            envelope.release = newAdsr.release;
            forceUpdate();
          }}
        />
        <LowpassFilter
          cutoffFrequency={filter.frequency.value as number}
          setCutoff={(freq) => {
            filter.frequency.value = freq;
            forceUpdate();
          }}
          resonance={filter.Q.value}
          setResonance={(q) => {
            filter.Q.value = q;
            forceUpdate();
          }}
        />
        <AmpSimple
          setGain={(newGain: number) => {
            gain.value = newGain;
            forceUpdate();
          }}
          gain={gain.value}
        />
      </Rack>
    </>
  );
};

export default Synth;
