import { ChordInterface } from "types/ChordInterface";

export const ADD_CHORD = "ADD_CHORD";
export const REMOVE_CHORD = "REMOVE_CHORD";
export const CHANGE_CHORD = "CHANGE_CHORD";

export interface AddChordAction {
  type: typeof ADD_CHORD;
  chord: ChordInterface;
}

export interface RemoveChordAction {
  type: typeof REMOVE_CHORD;
  id: string;
}

export interface ChangeChordAction {
  type: typeof CHANGE_CHORD;
  chord: ChordInterface;
}

export type ChordsActions =
  | AddChordAction
  | RemoveChordAction
  | ChangeChordAction;
