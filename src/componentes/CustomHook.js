import {useState} from 'react'
//Custom hook
function useCountCars(){
    const [cars,setCars] = useState(0)
    const positivo = () => setCars(cars+1)
    const negativo = () => setCars(cars-1)
    return{ cars,positivo,negativo }
}

export default function CustomHook(){
    const {cars,positivo,negativo} = useCountCars()
    return(
        <>
        <h3>Custom Hook - Contador</h3>
        <h3>{cars}</h3>
        <button onClick={negativo}>-</button>
        <button onClick={positivo}>+</button>
        </>
    )
}