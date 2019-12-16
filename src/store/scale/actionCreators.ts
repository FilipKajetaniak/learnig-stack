import {
  CHANGE_SCALE,
  ScaleActions,
  CHANGE_NOTE,
  CHANGE_OCTAVE
} from "./actions";
import { Scale } from "types/Scale";
import { Note } from "types/Note";
import { Octave } from "types/Octave";

export const changeScale = (scale: Scale): ScaleActions => ({
  type: CHANGE_SCALE,
  scale
});

export const changeNote = (note: Note): ScaleActions => ({
  type: CHANGE_NOTE,
  note
});

export const changeOctave = (octave: Octave): ScaleActions => ({
  type: CHANGE_OCTAVE,
  octave
});
