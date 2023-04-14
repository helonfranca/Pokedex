const pokemonList = document.getElementById("PokemonList");
const loadMoreButton = document.getElementById("loadmore");
const limit = 20;
let offset = 0;

function convertPokemonToLi(pokemon){
  
    return `<li class="pokemon ${pokemon.type}">
              <span class="number">#${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
  
              <div class="detail">
                <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}"> ${type}</li>`).join('')}
                </ol>
  
                <img src="${pokemon.photo}" alt="${pokemon.name}">
              </div>
            </li>`;
}

loadPokemonItens(offset,limit);

function loadPokemonItens(offset, limit){
  pokeApi.getPokemons(offset, limit) 
    .then((pokemons = []) => {
      const pokemonLis = pokemons.map(convertPokemonToLi).join("");
      pokemonList.innerHTML += pokemonLis;
  })
}

loadMoreButton.addEventListener('click', () => {
  offset += limit;
  loadPokemonItens(offset, limit);
})
