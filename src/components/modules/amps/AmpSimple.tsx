import Knob from "../../interfaces/Knob"

interface AmpSimpleProps{
    gain: number;
    setGain: (newGain: number) => void;
}

const AmpSimple = ({setGain, gain}: AmpSimpleProps) => {
    return (
        <div style={{borderColor: 'black', borderWidth:'2px', width: '150px', height: '400px', margin:'5px', padding: '5px'}}>
            amp
            <Knob label={"Gain"} min={0} max={1} value={gain} setValue={setGain} steps={20}/>
        </div>
    )
}

export default AmpSimple