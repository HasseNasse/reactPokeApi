import Pokemon from "../../types/Pokemon";

//State interface
export interface PokéDeckState {
  pokémons: Pokemon[];
  pokéIndex: Pokemon[];
}

//Action types
export const ADD_POKEMON = "ADD_POKEMON";
interface IAddPokemonAction {
  type: typeof ADD_POKEMON;
  payload: Pokemon;
}

export const REMOVE_POKEMON = "REMOVE_POKEMON";
interface IRemovePokemonAction {
  type: typeof REMOVE_POKEMON;
  payload: string;
}

export const FETCH_POKEMON = "FETCH_POKEMON";
interface IFetchPokemon {
  type: typeof FETCH_POKEMON;
  payload: Pokemon[];
}

// Combine actions with typescript union operator
export type PokéDeckActionTypes =
  | IAddPokemonAction
  | IRemovePokemonAction
  | IFetchPokemon;
