import Knob from "../../interfaces/Knob"

interface ADSR{
    attack: number;
    decay: number;
    sustain: number;
    release: number
}

interface EnvelopeADSRProps{
    adsr: ADSR
    setAdsr: (adsr: ADSR) => void;
}

const EnvelopeASDR = ({adsr, setAdsr}: EnvelopeADSRProps) => {
    
    const knobConfig = {min: 0, max: 2, steps:50};

    return (
        <div style={{borderColor: 'black', borderWidth:'2px', width: '150px', height: '400px', margin:'5px', padding: '5px'}}>
            amplitude envelope
            <Knob label={"Attack"} value={adsr.attack} setValue={(val) => setAdsr({...adsr, attack: val})} {...knobConfig}/>
            <Knob label={"Decay"} value={adsr.decay} setValue={(val) => setAdsr({...adsr, decay: val})} {...knobConfig}/>
            <Knob label={"Sustain"} value={adsr.sustain} setValue={(val) => setAdsr({...adsr, sustain: val})} {...knobConfig} max={1}/>
            <Knob label={"Release"} value={adsr.release} setValue={(val) => setAdsr({...adsr, release: val})} {...knobConfig} max={5}/>
        </div>
    )
}

export default EnvelopeASDR