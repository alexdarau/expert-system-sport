import React, { useState, useEffect } from 'react';
import data from './data'
export default function App() {
	const questions = [
		{
			questionText: 'What is your gender?',
			answerOptions: [
				{ answerText: 'Male', answerValue: 'm' },
				{ answerText: 'Female', answerValue: 'f' },
			],
		},
		{
			questionText: 'What is your goal?',
			answerOptions: [
				{ answerText: 'Weight loss', answerValue: 'weight loss' },
				{ answerText: 'Muscle growth', answerValue: 'muscle growth' },
				{ answerText: 'Stay fit', answerValue: 'stay fit' },
			],
		},
		{
			questionText: 'How many days per week?',
			answerOptions: [
				{ answerText: '3', answerValue: '3' },
				{ answerText: '4-5', answerValue: '4-5' },
				{ answerText: '6-7', answerValue: '6-7' },
			],
		},
		{
			questionText: 'What is your experience in the gym?',
			answerOptions: [
				{ answerText: 'Begginer', answerValue: 'begginer' },
				{ answerText: 'Intermediate', answerValue: 'intermediate' },
				{ answerText: 'Advanced', answerValue: 'advanced' },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showExercises, setshowExercises] = useState(false);
	const [premises, setPremises] = useState([]);
	const [results, setResult] = useState([]);
	useEffect(() => {
		if (premises.length === 4) {
			getConclusion(premises)
			setshowExercises(true);
		}
	}, [premises])
	const handleAnswerOptionClick = (value) => {


		setPremises([...premises, value]);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			//getConclusion(premises)
			setshowExercises(true);
		}
	};

	const getConclusion = (input) => {


		data.forEach(element => {
			let found = true;
			const dataPremises = element.premises;
			dataPremises.forEach(premise => {
				if (input.findIndex(e => e === premise.value) === -1) {
					found = false;
				}
			})



			if (found) {

				console.log("🚀 ~ file: App.js ~ line 78 ~ getConclusion ~ results", dataPremises)
				console.log("🚀 ~ file: App.js ~ line 67 ~ getConclusion ~ element.conclusion.value", element.conclusion[0])
				setResult(element.conclusion)
				console.log("Here:::", results)
			}
		})
	}

	return (
		<div className='app'>
			{showExercises ? (
				<div className='conclusion-section'>
					{results.map((item, index) => (
					<div key={index}>
						
						<ul> <b>Day {item.day}:</b>  
						{item.value.split(',').map((value, index) =>
							<li>{value}</li>
						)}
						</ul>
					</div>))}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.answerValue)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
