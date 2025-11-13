function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

function convertPokemonToLi(pokemon) {
  const image = pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default;

  return `
    <li class="pokemon">
      <span class="number">#${pokemon.id}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          ${convertPokemonTypesToLi(pokemon.types).join('')}
        </ol>

        <img src="${image}" alt="${pokemon.name}">
      </div>
    </li>
  `;
}

const meusPokemonsList = [25, 792, 791, 146, 1024, 716, 382, 250, 1001, 493];

pokeApi.getPokemons(meusPokemonsList).then((pokemons = []) => {
    const pokemonList = document.querySelector('.pokemons');
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
});
