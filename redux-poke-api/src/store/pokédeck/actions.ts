import {
  ADD_POKEMON,
  REMOVE_POKEMON,
  FETCH_POKEMON,
  PokéDeckActionTypes
} from "./types";
import Pokemon from "../../types/Pokemon";
import Pokémons from "../../components/Pokémons";

//Typescript infers that we are sending a addPokemonAction
export function addPokemon(pokemon: Pokemon): PokéDeckActionTypes {
  return {
    type: ADD_POKEMON,
    payload: pokemon
  };
}

//Typescript infers that we are sending a removePokemonAction
export function removePokemon(pokemonName: string): PokéDeckActionTypes {
  return {
    type: REMOVE_POKEMON,
    payload: pokemonName
  };
}

//Typescript infers that we are sending a removePokemonAction
export function fetchPokemon(pokemonResp: Pokemon[]): PokéDeckActionTypes {
  return {
    type: FETCH_POKEMON,
    payload: pokemonResp
  };
}
