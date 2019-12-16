import { createStore, combineReducers } from "redux";
import scaleReducer from "./scale/reducers";
import chordsReducer from "./chords/reducers";

const rootReducer = combineReducers({
  scale: scaleReducer,
  chords: chordsReducer
});
const store = createStore(rootReducer);

export default store;
