interface KnobProps {
  label?: string;
  min?: number;
  max?: number;
  steps?: number;
  digitPrecision?: number;
  unit?: string;
  value: number;
  setValue: (val: number) => void;
  scaling?: "linear" | "exponential";
}

const Knob = ({
  label = "",
  min = -1,
  max = 1,
  steps = 10,
  digitPrecision = 2,
  unit = "",
  value,
  setValue,
}: KnobProps) => {
  return (
    <div className="mt-2">
      <span className="">{label}</span> : {value.toFixed(digitPrecision) + unit}
      <input
        className="slider transparent h-1 w-full cursor-pointer appearance-none border-transparent bg-neutral-20 rounded-lg"
        type="range"
        min={min}
        max={max}
        value={value}
        step={(max - min) / steps}
        onChange={(e) => setValue(e.target.valueAsNumber)}
      />
    </div>
  );
};

export default Knob;
