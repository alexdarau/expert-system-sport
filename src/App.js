import React, { useState } from 'react';

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
			questionText: 'How manny days per week?',
			answerOptions: [
				{ answerText: '3', answerValue: '3' },
				{ answerText: '4-5', answerValue: '5' },
				{ answerText: '6-7', answerValue: '7' },
			],
		},
		{
			questionText: 'What is your experience?',
			answerOptions: [
				{ answerText: 'Begginer', answerValue: 'begginer' },
				{ answerText: 'Intermediate' , answerValue: 'intermediate' },
				{ answerText: 'Advanced' , answerValue: 'advanced' },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showExercises, setshowExercises] = useState(false);
	const [premises, setPremises] =  useState([]);

	const handleAnswerOptionClick = (value) => {
		setPremises([...premises, value]);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			getConclusion(premises)
			setshowExercises(true);
		}
		console.log("🚀 ~ file: App.js ~ line 44 ~ handleAnswerOptionClick ~ premises", premises)
	};

	const getConclusion = (premises) => {
	}

	return (
		<div className='app'>
			{showExercises ? (
				<div className='score-section'>
					{premises}
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
