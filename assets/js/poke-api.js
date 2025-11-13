const pokeApi = {};

pokeApi.getPokemonDetail = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json());
};

pokeApi.getPokemons = (listaIds) => {
  const promessas = listaIds.map((id) => pokeApi.getPokemonDetail(id));
  return Promise.all(promessas); // espera todos os fetchs terminarem
};

// exemplo de uso
const meusPokemons = [25, 792, 791, 146, 1024, 716, 382, 250, 1001, 493];

pokeApi.getPokemons(meusPokemons)
  .then((pokemons) => {
    console.log(pokemons); // aqui estão os detalhes de cada um (nome, tipo, imagens etc.)
  });