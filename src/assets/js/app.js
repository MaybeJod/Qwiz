/* styles */
import "../styles/reset.css";
import "../styles/style.css";

/* js */
import resetApp from "./reset";
import getQuestions from "./getQuestions";
import displayQuestions from "./displayQuestions";
import checkAnswer from "./checkAnswer";
import getQuestionAnswer from "./getQuestionAnswer";

const answerButtonElement = document.getElementsByClassName("answer");

let correctScore = 0;
let askedCount = 0;
let totalQuestions = 3;

export async function app() {
	resetApp();
	nextQuestion();
	displayQuestions(getQuestions(), askedCount);
	selectedAnswer(answerButtonElement);
}

function selectedAnswer(answerButtonElement) {
	let selectedAnswer = "";

	Array.from(answerButtonElement).forEach((button) => {
		button.addEventListener("click", () => {
			selectedAnswer = button.value;
			console.log("user from selected answer: " + selectedAnswer);
			if (
				checkAnswer(
					selectedAnswer,
					getQuestionAnswer(getQuestions(), askedCount)
				) === true
			) {
				correctScore++;
				console.log("asked count from selected answer: " + askedCount);
				console.log("correct score: " + correctScore);
				return true;
			} else {
				console.log("asked count from selected answer: " + askedCount);
				return false;
			}
		});
	});
}

function nextQuestion() {
	const nextQuestionButton = document.getElementById("nextQuestionButton");

	nextQuestionButton.addEventListener("click", () => {
		askedCount++;
		displayQuestions(getQuestions(), askedCount);
		selectedAnswer(answerButtonElement);
		console.log("asked count from button" + askedCount);
	});
}
