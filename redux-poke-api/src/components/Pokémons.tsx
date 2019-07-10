import React, { Component } from "react";
import { connect } from "react-redux";
import Pokemon from "../types/Pokemon";
import { AppState } from "../store";
import { fetchPokemonAPI } from "../api";

interface IPokémonsProps {
  pokéIndex: Pokemon[];
  fetchPokemonAPI: any;
}

class Pokémons extends Component<IPokémonsProps> {
  state = {
    pokéIndex: []
  };

  componentWillMount() {
    this.props.fetchPokemonAPI();
  }

  render() {
    const pokemonItems = this.props.pokéIndex.map((poke: Pokemon) => (
      <div key={poke.name}>{poke.name}</div>
    ));

    return (
      <div>
        <h2>Pokémon List</h2>
        {pokemonItems}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  pokéIndex: state.pokédeck.pokéIndex
});

export default connect(
  mapStateToProps,
  { fetchPokemonAPI }
)(Pokémons);
