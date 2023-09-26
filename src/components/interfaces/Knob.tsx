interface KnobProps{
    label?: string
    min?: number;
    max?: number;
    steps?: number;
    digitPrecision?: number;
    unit?: string;
    value: number;
    setValue: (val: number) => void;
    scaling?: "linear" | "exponential"
}

const Knob = ({
    label = "",
    min = -1, 
    max = 1, 
    steps = 10,
    digitPrecision = 2,
    unit = "",
    value, 
    setValue
}: KnobProps
) => {
    return (
        <div style={{border: '2px black solid'}}>
            {label}
            <input type="range" min={min} max={max} value={value} step={(max - min)/steps} onChange={(e) => setValue(e.target.valueAsNumber)}/>
            {value.toFixed(digitPrecision) + unit}
        </div>
    )
}

export default Knob