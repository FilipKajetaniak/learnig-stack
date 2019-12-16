import { ScaleInterface } from "types/ScaleInterface";
import {
  ScaleActions,
  CHANGE_SCALE,
  CHANGE_OCTAVE,
  CHANGE_NOTE
} from "./actions";

const initialState: ScaleInterface = {
  scale: "Major",
  octave: 3,
  rootNote: "c"
};

const scaleReducer = (state = initialState, action: ScaleActions) => {
  switch (action.type) {
    case CHANGE_SCALE:
      return { ...state, scale: action.scale };
    case CHANGE_NOTE:
      return { ...state, note: action.note };
    case CHANGE_OCTAVE:
      return { ...state, octave: action.octave };
    default:
      return state;
  }
};

export default scaleReducer;
