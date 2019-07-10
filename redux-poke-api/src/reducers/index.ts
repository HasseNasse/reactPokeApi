import { systemReducer } from "./system/reducers";
import { pokéDeckReducer } from "./pokédeck/reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  system: systemReducer,
  pokédeck: pokéDeckReducer
});
