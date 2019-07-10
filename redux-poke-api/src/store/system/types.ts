//State interface
export interface SystemState {
  loggedIn: boolean;
}

//Action types
export const AUTHENTICATE = "AUTHENTICATE";
interface IAuthenticateAction {
  type: typeof AUTHENTICATE;
}

// Combine actions with typescript union operator
export type SystemActionTypes = IAuthenticateAction; // | anotherAction
