import React, { useState,useEffect } from 'react';
const pokeApiURL = 'https://pokeapi.co/api/v2/pokemon/'

function Pokemon({avatar,name}){
	return(
    <>
		<figure>
			<img src={avatar} alt={name}/>
			<figcaption>{name}</figcaption>
      <button onClick={console.log()}>Favoritos</button>
		</figure>
    </>
	)
}

let puerta = false
export default function DisplayPokemons(){
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
    console.log(pokemonsUnparsed);
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
  
	return(
		<>
			<h1>Hook - useEffect (peticiones aync/pokeapi)</h1>
			{pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			):(
				pokemons.map((el)=>(<Pokemon key={el.id} name={el.name} avatar={el.avatar}/>))
			)}
		</>
	)
}

//  let ejecutado = false;

//  export default function AjaxHooks(){
//  	const [pokemons, setPokemons] = useState([])
//  	useEffect(() => {
//  		if (!ejecutado){
//  			ejecutado = true;
//  			let url = "https://pokeapi.co/api/v2/pokemon/";
//  			fetch(url)
//  				.then((res)=>res.json())
//  				.then((json)=>{
//  					json.results.forEach((el)=>{
//  						fetch(el.url)
//  							.then((res)=>res.json())
//  							.then((json)=>{
//  								let pokemon ={
//  									id:json.id,
//  									name:json.name,
//  									avatar:json.sprites.front_default,
//  								}
//  								setPokemons((pokemons)=>[...pokemons,pokemon])
//  							})
//  					})
//  				})
//  		}
//  	},[])