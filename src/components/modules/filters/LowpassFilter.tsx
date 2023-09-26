import Knob from "../../interfaces/Knob"

interface FilterProps{
    cutoffFrequency: number;
    setCutoff: (freq: number) => void;
    resonance: number;
    setResonance: (q: number) => void; 
}

const LowpassFilter = ({cutoffFrequency, resonance, setCutoff, setResonance}: FilterProps) => {
    return (
        <div style={{borderColor: 'black', borderWidth:'2px', width: '150px', height: '400px', margin:'5px', padding: '5px'}}>
            Lowpass filter
            <Knob label="freq" min={0} max={22000} steps={5000} unit="hz" value={cutoffFrequency} digitPrecision={0} setValue={setCutoff} />
            <Knob label="resonance" min={0} max={60} steps={50} value={resonance} setValue={setResonance}/>
        </div>
    )
}

export default LowpassFilter