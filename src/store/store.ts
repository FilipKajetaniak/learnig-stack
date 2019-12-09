import { createStore, Action } from "redux";

const rootReducer = (state: any = {}, actions: Action<any>) => state;

const store = createStore(rootReducer);

export default store;
