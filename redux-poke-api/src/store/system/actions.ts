import { AUTHENTICATE, SystemActionTypes } from "./types";

//Typescript infers that we are sending a authenticationAction
export function authenticate(): SystemActionTypes {
  return {
    type: AUTHENTICATE
  };
}
