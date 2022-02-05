"use strict"

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F'
}

let form = document.querySelector("#search-pokemon")

document.addEventListener("DOMContentLoaded", () => fetchData())
form.addEventListener( "submit", event => buscarPokemon(event) )

function fetchData( pokemon="1"){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    fetch( url )
    .then( response => response.json() )
    .then( data => {
        mostrarPokemon( data )
    
    } )

}


function mostrarPokemon(pokemonData){
    let contenedor = document.getElementById( "pokemon-wrapper" )
    let img = contenedor.querySelector( "img" )
    /* let p = contenedor.querySelector("p") */

    img.src = pokemonData.sprites.other["official-artwork"].front_default
    /* p.textContent = pokemonData.name */
}

function buscarPokemon(event){
    let input = form.querySelector("input")
    let pokemonName = input.value.toLowerCase()
    
    fetchData( pokemonName)
    event.preventDefault()
}

function mostrarError(params){
    let toast = document.getElementById("toast")
    toast.classList.toggle("hidden")

    setTimeout(() => toast.classList.toggle("hidden"),
    3000)
}

/*2:16*/