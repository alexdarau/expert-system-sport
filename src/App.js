import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Care este sexul tău?',
			answerOptions: [
				{ answerText: 'Barbat', isCorrect: false },
				{ answerText: 'Femeie', isCorrect: false },
			],
		},
		{
			questionText: 'Obiectiv?',
			answerOptions: [
				{ answerText: 'slabit', isCorrect: false },
				{ answerText: 'masa musculara', isCorrect: true },
				{ answerText: 'mentinere in forma', isCorrect: false },
			],
		},
		{
			questionText: 'Cate zile pe saptamana?',
			answerOptions: [
				{ answerText: '3', isCorrect: true },
				{ answerText: '4-5', isCorrect: false },
				{ answerText: '6-7', isCorrect: false },
			],
		},
		{
			questionText: 'Skill level',
			answerOptions: [
				{ answerText: 'slab', isCorrect: false },
				{ answerText: 'bun', isCorrect: false },
				{ answerText: 'super', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showExercises, setshowExercises] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setshowExercises(true);
		}
	};
	return (
		<div className='app'>
			{showExercises ? (
				<div className='score-section'>
					Sport si bani!
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
