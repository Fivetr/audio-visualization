// ALL: Michael Zayne Lumpkin
type PitchClass = "A" | "B" | "C" | "D" | "E" | "F" | "G";
type AccidentalSymbol = "bb" | "b" | "♮" | "#" | "##";
interface noteProperties {
  pitchClass: PitchClass;
  octave: number;
  accidental?: AccidentalSymbol;
}

const twelthRootOfTwo = Math.pow(2, 1 / 12);

export class Note {
  public pitchClass: PitchClass;
  public octave: number;
  public accidental: AccidentalSymbol;
  public frequency: number;

  constructor(
    pitchClass: PitchClass,
    octave: number,
    accidental?: AccidentalSymbol
  ) {
    this.pitchClass = pitchClass;
    this.octave = octave;
    this.accidental = accidental ?? "♮";
    this.frequency = Note.noteToFreq({ pitchClass, octave, accidental });
  }

  public toString = () => this.pitchClass + this.accidental + this.octave;

  public static noteToFreq = (note: Note | noteProperties) =>
    this.noteIndexToFreq(this.noteToIndex(note));
  static noteIndexToFreq = (noteIndex: number) =>
    440 * Math.pow(twelthRootOfTwo, noteIndex - 72);

  // 0 is A-2, 63 is C4, 72 is A4; returns value in Hz for A4=440 12-TET
  static noteToIndex = (note: Note | noteProperties) =>
    ({ C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 })[note.pitchClass]! +
    (note.accidental
      ? { bb: -2, b: -1, "♮": 0, "#": 1, "##": 2 }[note.accidental!]
      : 0) +
    12 * (note.octave + 1) +
    3;
}

export type { noteProperties };
