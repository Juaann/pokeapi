import {useRef} from 'react'

export default function Referencias(){
	const initialValueReference = useRef()
	const launchReference = () =>{
		console.log(initialValueReference.current.value)
	}
	return(
		<>
		<h3>Referencias</h3>
		<input type="text" ref={initialValueReference}/>
		<button type="text" onClick={launchReference}>Launch</button>
		</>
	)
}