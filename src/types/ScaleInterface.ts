import { Note } from "./Note";
import { Scale } from "./Scale";
import { Octave } from "./Octave";

export interface ScaleInterface {
  scale: string;
  octave: Octave;
  rootNote: Note;
}
