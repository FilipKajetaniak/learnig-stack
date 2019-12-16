import { Note } from "./Note";
import { Scale } from "./Scale";
import { Octave } from "./Octave";

export interface ScaleInterface {
  scale: Scale;
  octave: Octave;
  rootNote: Note;
}
