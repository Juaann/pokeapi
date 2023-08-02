import { useState,useRef } from 'react'

const Item = ({value}) =>{
	return(
		
		<>		
			<div>
				{value}
			</div>
		</>
	)
}

export default function Formularios(){
	const inputValue = useRef()
	const [nombres,setNombres] = useState([])

	const handleSubmit = (event) =>{
		event.preventDefault()
		event.stopPropagation()
		const nombre = inputValue.current.value
		console.log(nombre);
		//debugger
		const nombresActualizados = [...nombres,nombre]
		setNombres(nombresActualizados)
		console.log(nombresActualizados);
	}
  return(
    <>
    	<h1>Formularios</h1>
    	<form onSubmit={handleSubmit}>
      	<label htmlFor='name'>Nombre: </label>
      	<input ref={inputValue}/>
      	<button>Enviar</button>
    	</form>
			<h2>Historial:</h2>
			<div>
				{nombres.map((nombre,index) =>{
						return(<Item key={index} value={nombre}/>)
					})
				}
			</div>
    </>
  )
}
