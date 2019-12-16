import { ChordInterface } from "types/ChordInterface";
import {
  ChordsActions,
  ADD_CHORD,
  REMOVE_CHORD,
  CHANGE_CHORD
} from "./actions";

const initialState: ChordInterface[] = [];

const chordsReducer = (state = initialState, action: ChordsActions) => {
  switch (action.type) {
    case ADD_CHORD:
      return [...state, action.chord];
    case REMOVE_CHORD:
      return state.filter(({ id }) => id !== action.id);
    case CHANGE_CHORD:
      return [...state, action.chord];
    default:
      return state;
  }
};

export default chordsReducer;
