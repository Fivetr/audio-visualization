import { useState, useMemo, useRef } from "react";
import * as Tone from "tone";
import { Signal } from "tone";
import AmpSimple from "./modules/amps/AmpSimple";
import EnvelopeASDR from "./modules/envelope_generators/EnvelopeADSR";
import LowpassFilter from "./modules/filters/LowpassFilter";
import OscSimple from "./modules/oscillators/OscSimple";
import Rack from "./Rack";
import Sidebar from "./Sidebar";
import { modules } from "../../types/index";
import DeleteButton from "./interfaces/DeleteButton";
import Keyboard from "./modules/controlers/Keyboard";
import Oscilloscope from "./modules/visualizers/Oscilloscope";
import Oscilloscope_fft from "./modules/visualizers/Oscilloscope_fft";

// Desong Li
export const moduleLists: string[] = [
  "Triggers",
  "OCS",
  "Amplitude Envelope",
  "Lowpass Filter",
  "AMP",
  "Visualizers",
  "Visualizers_fft",
];

const Synth = () => {
  // Desong Li
  const memoizedValue = useMemo(() => {
    const res: modules = {};
    moduleLists.forEach((item) => (res[item] = { isOpen: false, title: item }));
    return res;
  }, [moduleLists]);

  const [Modules, setModules] = useState(memoizedValue);
  const [waveform, setWaveform] = useState<Uint8Array>(new Uint8Array(2048));
  const [histographForm, sethistographForm] = useState<Uint8Array>(
    new Uint8Array(2048)
  );

  // Michael Zayne Lumpkin
  const [ignored, setIgnored] = useState(0);
  const forceUpdate = () => setIgnored(ignored + 1);
  const [gain] = useState(new Signal(0.3));
  const [oscillator] = useState(new Tone.Oscillator("C4", "sawtooth"));
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

  // Desong Li
  const analyser = useRef<Tone.Analyser | null>(null);
  const fft_analyser = useRef<Tone.Analyser | null>(null);

  analyser.current = new Tone.Analyser("waveform", 256);
  fft_analyser.current = new Tone.Analyser("fft", 2048);

  // Michael Zayne Lumpkin
  oscillator.chain(
    envelope,
    amp,
    filter,
    analyser.current,
    fft_analyser.current,
    Tone.Destination
  );
  gain.connect(amp.factor);

  // Desong Li
  const triggerAttack = () => {
    oscillator.start();
    envelope.triggerAttack();
    if (analyser.current !== null) {
      const newWaveformFloat32 = analyser.current.getValue();
      const newWaveform = new Uint8Array(newWaveformFloat32.length);
      for (let i = 0; i < newWaveformFloat32.length; i++) {
        const sample = Math.min(
          1,
          Math.max(-1, newWaveformFloat32[i] as number)
        );
        newWaveform[i] = Math.round((sample + 1) * 127);
      }
      setWaveform(newWaveform);
    }
    if (fft_analyser.current !== null) {
      const newfftFloat32 = fft_analyser.current.getValue();
      const newfft = new Uint8Array(newfftFloat32.length);
      for (let i = 0; i < newfftFloat32.length; i++) {
        const normalizedValue = ((newfftFloat32[i] as number) + 100) / 100;
        newfft[i] = Math.round(normalizedValue * 256);
      }
      sethistographForm(newfft);
    }
  };

  // Desong Li
  const triggerRelease = () => {
    console.log("Trigger Release");
    envelope.triggerRelease();
  };

  return (
    // HTML elements, JS and styles: Desong Li
    // Modules: Michael Zayne Lumpkin
    <>
      <Rack>
        {/* Desong Li */}
        {Modules["Triggers"].isOpen ? (
          <section className="relative">
            <Keyboard // Michael Zayne Lumpkin
              onHandler={triggerAttack}
              offHandler={triggerRelease}
              setFrequency={(freq) => {
                oscillator.frequency.value = freq;
                forceUpdate();
              }}
            />
            <DeleteButton setModules={setModules} module="Triggers" />
          </section>
        ) : null}
        {/* Desong Li */}
        <section className="flex flex-col gap-3">
          {Modules["OCS"].isOpen ? (
            <div className="relative">
              <OscSimple // Michael Zayne Lumpkin
                setWaveform={(newWaveform: Tone.ToneOscillatorType) =>
                  (oscillator.type = newWaveform)
                }
              />
              <DeleteButton setModules={setModules} module="OCS" />
            </div>
          ) : null}
          {Modules["Amplitude Envelope"].isOpen ? (
            <section className="relative">
              <EnvelopeASDR // Michael Zayne Lumpkin
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
              <DeleteButton
                setModules={setModules}
                module="Amplitude Envelope"
              />
            </section>
          ) : null}
        </section>
        {/* Desong Li */}
        <div className="flex flex-col gap-3">
          {Modules["Lowpass Filter"].isOpen ? (
            <section className="relative">
              <LowpassFilter // Michael Zayne Lumpkin
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
              <DeleteButton setModules={setModules} module="Lowpass Filter" />
            </section>
          ) : null}
          {Modules["AMP"].isOpen ? (
            <section className="relative">
              <AmpSimple // Michael Zayne Lumpkin
                setGain={(newGain: number) => {
                  gain.value = newGain;
                  forceUpdate();
                }}
                gain={gain.value}
              />
              <DeleteButton setModules={setModules} module="AMP" />
            </section>
          ) : null}
        </div>
        {/* Desong Li */}
        <div className="flex flex-col gap-3">
          {Modules["Visualizers"].isOpen ? (
            <section className="relative">
              <Oscilloscope waveform={waveform} />
              <DeleteButton setModules={setModules} module="Visualizers" />
            </section>
          ) : null}
          {Modules["Visualizers_fft"].isOpen ? (
            <section className="relative">
              <Oscilloscope_fft histogram={histographForm} />
              <DeleteButton setModules={setModules} module="Visualizers_fft" />
            </section>
          ) : null}
        </div>
        <Sidebar Modules={Modules} setModules={setModules} />
      </Rack>
    </>
  );
};

export default Synth;
