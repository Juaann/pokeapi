import {useRef} from 'react'

export default function Referencias(){
	const initialValueReference = useRef()
	const refButtonSend = useRef()
	const launchReference = () =>{
		console.log(initialValueReference.current.value)
		console.log(refButtonSend)
		if (refButtonSend.current.textContent === "Send") {
			refButtonSend.current.textContent = "sent"
		}else{
			refButtonSend.current.textContent = "Send"
		}
	}
	return(
		<>
		<h3>Referencias</h3>
		<input type="text" ref={initialValueReference}/>
		<button type="text" ref={refButtonSend} onClick={launchReference}>Send</button>
		</>
	)
}