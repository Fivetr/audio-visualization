import { ToneOscillatorType } from "tone"
import Button from "../../interfaces/Button"

interface OscSimpleProps{
    setWaveform: (newWaveform: ToneOscillatorType) => void;
}

const OscSimple = ({setWaveform}: OscSimpleProps) => {
    const style: React.CSSProperties = {
        borderColor: 'black', 
        borderWidth:'2px', 
        width: '150px', 
        height: '400px', 
        margin:'5px', 
        padding: '5px',
    }


    return (
        <div style={style}>
            <div>
                osc
            </div>

            <select onChange={e => setWaveform(e.target.value as ToneOscillatorType)}>
                <option value="sine">sine</option>
                <option value="triangle">triangle</option>
                <option value="square">square</option>
                <option value="sawtooth">sawtooth</option>
            </select>
        </div>
    )
}

export default OscSimple