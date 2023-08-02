import React from 'react';

export const Pokemon = ({avatar,name,onAddFavorites}) =>{
	return(
    <>
			<figure>
				<img src={avatar} alt={name}/>
				<figcaption>{name}</figcaption>
				<button onClick={()=> onAddFavorites({avatar,name})}>Favoritos</button>
			</figure>
    </>
	)
}