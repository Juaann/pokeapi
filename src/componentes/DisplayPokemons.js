import React, { useState,useEffect } from 'react';
import { Pokemon } from './Pokemon';
const pokeApiURL = 'https://pokeapi.co/api/v2/pokemon/'

let puerta = false
export default function DisplayPokemons(){
  const [favoritePokemons, setFavoritePokemons] = useState([])
  const [pokemons, setPokemons] = useState([])
  const getAllPokemons = async () => {
    // retrieve all pokemons
    const response = await fetch(pokeApiURL)
    const jsonData = await response.json()
    return jsonData.results;
  }
  
  const getPokemonByUrl = async (url) => {
    // retrieve all pokemons
    const response = await fetch(url)
    return await response.json()
  }
  
  const parseAndSetPokemons = async (pokemonsUnparsed) => {
    //console.log(pokemonsUnparsed);
    const pokemonResponsesPromises = await pokemonsUnparsed.map(async (pokemon) => {
      const pokemonData = await getPokemonByUrl(pokemon.url)
      return {
        id: pokemonData.id,
        name: pokemonData.name,
        avatar :pokemonData.sprites.front_default,
      }
    })
    const parsedPokemons = await Promise.all(pokemonResponsesPromises)
    setPokemons(parsedPokemons)
  }
  
  useEffect(() => {
    if (!puerta){
      puerta = true;
      const init = async () => {
        const allPokemons = await getAllPokemons()
        parseAndSetPokemons(allPokemons)
      }
      init()
 		}
 	},[])
  
  const onAddFavorites = (pokemon) =>{
      setFavoritePokemons([...favoritePokemons, pokemon])
  }

	return(
		<>
			<h1>Hook - useEffect (peticiones aync/pokeapi)</h1>
			{pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			):(
				pokemons.map((el)=>(<Pokemon onAddFavorites={onAddFavorites} key={el.id} name={el.name} avatar={el.avatar}/>))
			)}
      <div>
        <h2>Mis favoritos</h2>
        {favoritePokemons.map((pokemon)=> <p key={pokemon.name}>{pokemon.name}</p>)}
      </div>
		</>
	)
}
