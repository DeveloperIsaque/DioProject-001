const name = 'ditto'
const url2 = `https://pokeapi.co/api/v2/pokemon/${name}`

function convertPokemontoDetails(pokemon) {
    return `
    
    `
}

fetch(url2)
    .then((response) => response.json())
    .then((pokemonDetails) => {
        console.log(pokemonDetails)
    })
    .catch((error) => console.log(error)) 

console.log('sucesso!')