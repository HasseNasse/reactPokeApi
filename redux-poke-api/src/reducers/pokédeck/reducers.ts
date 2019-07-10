import {
  ADD_POKEMON,
  REMOVE_POKEMON,
  FETCH_POKEMON,
  PokéDeckActionTypes,
  PokéDeckState
} from "./../../store/pokédeck/types";

const initialState: PokéDeckState = {
  pokémons: [],
  pokéIndex: []
};

export function pokéDeckReducer(
  state = initialState,
  action: PokéDeckActionTypes
): PokéDeckState {
  switch (action.type) {
    case ADD_POKEMON:
      return {
        ...state,
        pokémons: [...state.pokémons, action.payload]
      };
    case REMOVE_POKEMON:
      const filteredPokemon = state.pokémons.filter(
        poke => action.payload !== poke.name
      );
      return {
        ...state,
        pokémons: [...filteredPokemon]
      };
    case FETCH_POKEMON:
      console.log("Fetched Pokemons");
      debugger;
      return { ...state, pokéIndex: action.payload };
    default:
      return state;
  }
}
