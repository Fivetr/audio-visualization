// ALL: Michael Zayne Lumpkin
import { useState } from "react";
import Button from "../../interfaces/Button";
import { Note, noteProperties } from "../../../logic/Note";

type KeyProps = {
  onHandler: () => void;
  offHandler: () => void;
  setFrequency: (freq: number) => void;
  note: noteProperties;
};

const Key = ({ onHandler, offHandler, setFrequency, note }: KeyProps) => (
  <Button
    style="freq-button w-10 mr-2 focus:ring-4 focus:outline-none focus:ring-red-300"
    onClick={() => {
      setFrequency(Note.noteToFreq(note));
      onHandler();
    }}
    offClick={offHandler}
    label={note.toString()}
  />
);

const oneOctaveOfNotes: Pick<noteProperties, "pitchClass" | "accidental">[] = [
  { pitchClass: "C" },
  { pitchClass: "C", accidental: "#" },
  { pitchClass: "D" },
  { pitchClass: "D", accidental: "#" },
  { pitchClass: "E" },
  { pitchClass: "F" },
  { pitchClass: "F", accidental: "#" },
  { pitchClass: "G" },
  { pitchClass: "G", accidental: "#" },
  { pitchClass: "A" },
  { pitchClass: "A", accidental: "#" },
  { pitchClass: "B" },
];

interface KeyboardProps {
  onHandler: () => void;
  offHandler: () => void;
  setFrequency: (freq: number) => void;
}

const Keyboard = ({ onHandler, offHandler, setFrequency }: KeyboardProps) => {
  const [numOctaves, setNumOctaves] = useState(2);
  const [startingOctave, setStartingOctave] = useState(3);

  return (
    <div className="my-container w-fit gap-2 items-center">
      <div className="title">KEYBOARD</div>

      <div className="ml-2 flex flex-col gap-2 pt-[2rem]">
        <select
          className=" text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
          onChange={(e) => setNumOctaves(parseInt(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2" selected>
            2
          </option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="8">8</option>
        </select>
      </div>

      <div className="ml-2 flex flex-col gap-2 mt-2">
        <div>
          <span>
            <Button
              style="freq-button w-10 mr-2 focus:ring-4 focus:outline-none focus:ring-red-300"
              onClick={() =>
                setStartingOctave(Math.max(startingOctave - 1, -2))
              }
              label="-8ve"
            />
          </span>
          <span>
            <Button
              style="freq-button w-10 mr-2 focus:ring-4 focus:outline-none focus:ring-red-300"
              onClick={() => setStartingOctave(Math.min(startingOctave + 1, 8))}
              label="+8ve"
            />
          </span>
        </div>
      </div>

      <div style={{ height: "50px" }}></div>

      <div className="flex flex-col w-full gap-1">
        {Array(numOctaves)
          .fill(null)
          .map((_, index) => (
            <div>
              {oneOctaveOfNotes.map((note) => (
                <Key
                  {...{ onHandler, offHandler, setFrequency }}
                  note={
                    new Note(
                      note.pitchClass,
                      startingOctave + index,
                      note.accidental
                    )
                  }
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Keyboard;
