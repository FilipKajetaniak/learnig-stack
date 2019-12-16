import { Scale } from "types/Scale";
import { Octave } from "types/Octave";
import { Note } from "types/Note";

export const CHANGE_SCALE = "CHANGE_SCALE";
export const CHANGE_NOTE = "CHANGE_NOTE";
export const CHANGE_OCTAVE = "CHANGE_OCTAVE";

export interface ChangeScaleAction {
  type: typeof CHANGE_SCALE;
  scale: Scale;
}

export interface ChangeNoteAction {
  type: typeof CHANGE_NOTE;
  note: Note;
}

export interface ChangeOctaveAction {
  type: typeof CHANGE_OCTAVE;
  octave: Octave;
}

export type ScaleActions =
  | ChangeScaleAction
  | ChangeNoteAction
  | ChangeOctaveAction;
