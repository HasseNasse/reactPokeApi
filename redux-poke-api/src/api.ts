import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { fetchPokemon } from "./store/pokédeck/actions";
import { AppState } from "./store";
import Pokemon from "./types/Pokemon";

export const fetchPokemonAPI = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async dispatch => {
  console.log("Fetching Pokemon from PokéAPI");
  const asyncResp = await fetch("https://pokeapi.co/api/v2/pokemon")
    .then(resp => resp.json())
    .then(data => data.results);

  //Create Pokemon array
  const pokemonArray: Pokemon[] = Array.of(...asyncResp);
  dispatch(fetchPokemon(pokemonArray));
};
