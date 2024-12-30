/* styles */
import "../styles/reset.css";
import "../styles/style.css";

/* js */
import resetApp from "./reset";
import getQuestions from "./getQuestions";
import displayQuestions from "./displayQuestions";
import checkAnswer from "./checkAnswer";

let correctScore = 0;
let askedCount = 0;
const totalQuestions = 3;

export function app() {
	resetApp();
	nextQuestion();
	displayQuestions(getQuestions(), askedCount);
	addAnswerListeners();
}

function addAnswerListeners() {
	const answerButtons = document.getElementsByClassName("answer");
	Array.from(answerButtons).forEach((button) => {
		button.addEventListener("click", () => handleAnswerClick(button));
	});
}

function handleAnswerClick(selectedButton) {
	const currentQuestion = getQuestions()[askedCount];
	const correctAnswer = currentQuestion.correct_answer;
	const answerButtons = document.getElementsByClassName("answer");

	Array.from(answerButtons).forEach((button) => {
		// Disable all buttons after an answer is selected
		button.disabled = true;

		if (checkAnswer(button.value, correctAnswer) === true) {
			button.classList.add("correct");
		} else {
			button.classList.add("incorrect");
		}
	});

	if (checkAnswer(selectedButton.value, correctAnswer) === true) {
		correctScore++;
		console.log(`Correct! Score: ${correctScore}`);
	} else {
		console.log(`Wrong! The correct answer was: ${correctAnswer}`);
	}
}

function nextQuestion() {
	const nextQuestionButton = document.getElementById("nextQuestionButton");

	nextQuestionButton.addEventListener("click", () => {
		askedCount++;

		if (askedCount < totalQuestions) {
			displayQuestions(getQuestions(), askedCount);
			addAnswerListeners();
		} else {
			alert(`Quiz over! Your score: ${correctScore}/${totalQuestions}`);
		}
	});
}
