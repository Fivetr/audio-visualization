import Button from "../../interfaces/Button";

interface TriggerSwitchProps{
    onHandler: () => any;
    offHandler: () => any;
    frequency: number;
    setFrequency: (freq: number) => void;
}

const TriggerSwitch = ({onHandler, offHandler, frequency, setFrequency}: TriggerSwitchProps) => {
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
                trigger
            </div>

            
            <div>
                <Button onClick={onHandler} label="on"/>
                <Button onClick={offHandler} label="off"/>
            </div>
            <div>
                <Button onClick={onHandler} offClick={offHandler} label="toggle"/>
            </div>
            <div>
                Frequency: <input type="number" value={frequency} onChange={(e) => setFrequency(e.target.valueAsNumber)} maxLength={7} style={{maxWidth:"100px"}}/>
            </div>
            <div>
                <Button onClick={() => setFrequency(frequency / 2)} label="-8ve"/>
                <Button onClick={() => setFrequency(frequency * 2)} label="+8ve"/>
            </div>
        </div>
    )
}

export default TriggerSwitch