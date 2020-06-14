import React, { useState } from 'react'
import { render } from 'react-dom'

import Entry from './components/Entry'
import Button from './components/Button'
import FlexContainer from './components/FlexContainer'


const App = () => {
	const [ currentNumber, setCurrentNumber ] = useState('---')
	const [ previousNumber, setPreviousNumber ] = useState(0)
	const [ currentOperator, setCurrentOperator ] = useState('')

	const setNumberFromClickEvent = (e) => {
		const numberToAppendFrom = isNaN(currentNumber) ? '' : currentNumber
		setCurrentNumber(numberToAppendFrom + e.target.textContent)
	}

	const setOperatorFromClickEvent = (e) => {
		if (currentOperator) {
			performOperation(currentOperator)
		} else {
			setPreviousNumber(parseInt(currentNumber))
			setCurrentNumber('---')
		}

		const operator = e.target.textContent
		setCurrentOperator(operator)
	}

	const performOperation = (operator) => {
		switch (operator) {
			case '+':
				setPreviousNumber(previousNumber + parseInt(currentNumber))
				setCurrentNumber('---')
				break
			case '-':
				setPreviousNumber(previousNumber - parseInt(currentNumber))
				setCurrentNumber('---')
				break
			case '*':
				setPreviousNumber(previousNumber * parseInt(currentNumber))
				setCurrentNumber('---')
				break
			case '/':
				setPreviousNumber(previousNumber / parseInt(currentNumber))
				setCurrentNumber('---')
				break
			default:
				break
		}
	}

	//TODO: fix
	const finalizeOperations = () => {
		performOperation(currentOperator)
		performOperation(currentOperator)
		setCurrentNumber(previousNumber)
	}

	return (
		<div
			style={{
				width: '50%',
				margin: '0 auto',
				fontFamily: "'Orbitron', sans-serif",
				fontSize: '22px',
				marginTop: '100px',
				maxWidth: '275px',
				userSelect: 'none'
			}}
		>
			<Entry>{currentNumber}</Entry>
			<FlexContainer>
				<Button onClick={() => setCurrentNumber('---')}>clear</Button>
				<Button operator onClick={setOperatorFromClickEvent}>
					÷
				</Button>
				<Button operator onClick={setOperatorFromClickEvent}>
					x
				</Button>
			</FlexContainer>
			<FlexContainer>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					7
				</Button>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					8
				</Button>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					9
				</Button>
				<Button style={{ width: '25%' }} operator onClick={setOperatorFromClickEvent}>
					-
				</Button>
			</FlexContainer>
			<FlexContainer>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					4
				</Button>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					5
				</Button>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					6
				</Button>
				<Button style={{ width: '25%' }} operator onClick={setOperatorFromClickEvent}>
					+
				</Button>
			</FlexContainer>
			<FlexContainer>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					1
				</Button>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					2
				</Button>
				<Button style={{ width: '25%' }} onClick={setNumberFromClickEvent}>
					3
				</Button>
				<Button style={{ width: '25%' }} operator onClick={finalizeOperations}>
					=
				</Button>
			</FlexContainer>
		</div>
	)
}

render(<App />, document.getElementById('root'))
