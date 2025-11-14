const pokeApi = {};

function convertPokeApiDetailToPokemons(pokeDetail) {
  const pokemon = new Pokemon();

  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonDetail = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemons);
};

pokeApi.getPokemons = (listaIds) => {
  const promessas = listaIds.map((id) => pokeApi.getPokemonDetail(id));
  return Promise.all(promessas);
};
