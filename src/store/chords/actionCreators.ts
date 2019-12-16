import { ChordInterface } from "types/ChordInterface";
import {
  ADD_CHORD,
  REMOVE_CHORD,
  CHANGE_CHORD,
  ChordsActions
} from "./actions";

export const addChord = (chord: ChordInterface): ChordsActions => ({
  type: ADD_CHORD,
  chord
});

export const removeChord = (id: string): ChordsActions => ({
  type: REMOVE_CHORD,
  id
});

export const changeChord = (chord: ChordInterface): ChordsActions => ({
  type: CHANGE_CHORD,
  chord
});
