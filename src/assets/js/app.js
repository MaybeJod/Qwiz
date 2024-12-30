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

export function app() {
	resetApp();
	nextQuestion();
	displayQuestions(getQuestions(), askedCount);
	selectedAnswer(answerButtonElement);
}

function selectedAnswer(answerButtonElement) {
	Array.from(answerButtonElement).forEach((button) => {
		button.addEventListener("click", () => {
			console.log("user from selected answer: " + button.value);
			if (
				checkAnswer(
					button.value,
					getQuestionAnswer(getQuestions(), askedCount)
				) === true
			) {
				correctScore++;
				console.log("asked count from selected answer: " + askedCount);
				console.log("correct score: " + correctScore);
				answerButtonElement.disabled = true;
				button.classList.add("correct");
				return true;
			} else {
				console.log("asked count from selected answer: " + askedCount);
				answerButtonElement.disabled = true;
				button.classList.add("incorrect");
				return false;
			}
		});
	});
}

function nextQuestion() {
	const nextQuestionButton = document.getElementById("nextQuestionButton");

	nextQuestionButton.addEventListener("click", () => {
		askedCount++;
		if (askedCount < totalQuestions) {
			displayQuestions(getQuestions(), askedCount);
			selectedAnswer(answerButtonElement);
			console.log("asked count from button " + askedCount);
		} else {
			alert(`qwiz over, your score: ${correctScore}`);
		}
	});
}
