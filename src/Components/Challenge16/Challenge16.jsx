import React, { Component } from "react";
import "./Challenge16.css";

export default class Challenge16 extends Component {
  state = {
    pokemonList: [],
  };

  componentDidMount() {
    this.loadPokemon();
  }

  async loadPokemon() {
    for (let i = 1; i <= 151; i++) {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) =>
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
        .then((pokemon) => {
          let pokemonObj = {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            id: pokemon.id,
            image: pokemon.sprites.front_default,
          };
          this.setState({
            pokemonList: [...this.state.pokemonList, pokemonObj],
          });
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    }
  }

  render() {
    const { pokemonList } = this.state;
    return (
      <section className="challenge gallery">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 16</h2>
          <h3 className="challengeDescription">Gallery</h3>
        </div>
        <div className="galleryContainer">
          <h1>First Generation Pokémon</h1>
          {pokemonList.length === 0 ? (
            <ul className="galleryImages">
              <p>Uh Oh! There's been an error.</p>
            </ul>
          ) : (
            <ul className="galleryImages">
              {pokemonList.map((pokemon) => (
                <li key={pokemon.id} className="pokemonContainer">
                  <a
                    href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={pokemon.image} alt={pokemon.name}></img>
                    {pokemon.name.includes("Nidoran") ? (
                      <p>Nidoran</p>
                    ) : (
                      <p>{pokemon.name}</p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    );
  }
}
