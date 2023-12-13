import Button from "../../interfaces/Button";

interface TriggerSwitchProps {
  onHandler: () => void;
  offHandler: () => void;
  frequency: number;
  setFrequency: (freq: number) => void;
}

const TriggerSwitch = ({
  onHandler,
  offHandler,
  frequency,
  setFrequency,
}: TriggerSwitchProps) => {
  // trigger switch that starts the oscillator
  // abandon
  return (
    // HTML elements: Michael Zayne Lumpkin
    // Styles: Desong Li
    <div className="my-container flex flex-col gap-2 items-center">
      <div className="title">TRIGGER</div>
      <div className="flex justify-center gap-2 mt-3">
        <Button style="on-off-button" onClick={onHandler} label="ON" />
        <Button style="on-off-button" onClick={offHandler} label="OFF" />
      </div>
      <div>
        <Button
          style="freq-button w-16 active:ring-4 active:outline-none active:ring-red-300"
          onClick={onHandler}
          offClick={offHandler}
          label="Toggle"
        />
      </div>

      <div className="flex flex-col w-full gap-1">
        <div className="flex justify-stretch items-center -ml-1 h-[130px]">
          <div>
            <span className="font-bold text-sm ml-1">Frequency: </span>
            <input
              type="number"
              value={Math.round(frequency)}
              onChange={(e) => setFrequency(e.target.valueAsNumber)}
              maxLength={7}
              className="w-[6rem] mx-auto p-[0.75rem] py-4 h-[1.5rem] rounded-xl mt-1"
            />
          </div>
          <div className="ml-2 flex flex-col gap-2 pt-[2rem]">
            <Button
              style="freq-button w-10 mr-2 focus:ring-4 focus:outline-none focus:ring-red-300"
              onClick={() => setFrequency(frequency * 2)}
              label="+8ve"
            />
            <Button
              style="freq-button w-10 mr-2 focus:ring-4 focus:outline-none focus:ring-red-300"
              onClick={() => setFrequency(frequency / 2)}
              label="-8ve"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriggerSwitch;
