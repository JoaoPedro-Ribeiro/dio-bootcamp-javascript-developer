const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecord = 1281;
const limit = 12;
let offset = 0;

function convertPokemonToHtml(pokemon){
  return `
  <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>

          <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
      </li>
  `
}

function loadPokemonItens(offset, limit){
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join(''); 
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () =>{
  offset += limit;

  const quantityRecord = offset + limit;

  if (quantityRecord >= maxRecord){
    const newLimit = maxRecord - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else{
    loadPokemonItens(offset, limit);
  }
})