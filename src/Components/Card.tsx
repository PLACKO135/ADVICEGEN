import { useState, useEffect } from "react";
import divderDesktop from '../../images/pattern-divider-desktop.svg';
import IconDice from '../../images/icon-dice.svg';
import "./App.css"



const Card = () => {
    const [advice, setAdvice] = useState("")
	const [adviceId, setAdviceId] = useState(0)
	const fetchAdvice = async () => {
		try {
			const response = await fetch("https://api.adviceslip.com/advice")
			const data = await response.json()
			setAdvice(data.slip.advice)
			setAdviceId(data.slip.id)
		} catch (error) {
			console.error("Error fetching advice:", error)
		}
	}

	useEffect(() => {
		fetchAdvice()
	}, [])

	return (
		<div className="advice">
            {advice?(<><p>Advice #{adviceId}</p>
			<h1>"{advice}"</h1></>):(<h1>Loading...</h1>)}
			
			<img style={{ cursor: "default" }} src={divderDesktop} alt="divider" />
			<button onClick={() => fetchAdvice()}>
				<img src={IconDice}></img>
			</button>
		</div>
	)
}

export default Card;