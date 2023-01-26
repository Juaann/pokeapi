import React, { useState } from 'react'

export default function ContadorHooks(props){
  const [contador, setContador] = useState(0);
  const suma = () => setContador(contador+1)
  const resta = () => setContador(contador-1)
  return(
    <>
      <h1>Hook - useState</h1>
      <h3>Contador de {props.titulo}</h3>
      <h2>{contador}</h2>
      <button onClick={suma}>+</button>
      <button onClick={resta}>-</button>
    </>
  )
}

ContadorHooks.defaultProps ={
  titulo: "seguidores"
}

// import React, { useState } from 'react'

// export default function ContadorHooks(props){
//   const [contador, setContador] = useState(0)
//   const sumar = () => setContador(contador+1)
//   const restar = () => setContador(contador-1)
//   return(
//     <>
//       <h1>Hook - useState</h1>
//       <h2>Contador de {props.titulo}</h2>
//       <p>{contador}</p>
//       <button onClick={sumar}>+</button>
//       <button onClick={restar}>-</button>
//     </>
//   )
// }

// ContadorHooks.defaultProps ={
//   titulo:'seguidores'
// }