import {
  SystemState,
  SystemActionTypes,
  AUTHENTICATE
} from "./../../store/system/types";

const initialState: SystemState = {
  loggedIn: false
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
}
