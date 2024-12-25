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

let correctscore = 0;
let askedCount = 0;
let totalQuestions = 3;

export async function app() {
	resetApp();
	nextQuestion();
	displayQuestions(getQuestions(), askedCount);
	//displayQuestions(getQuestions(), askedCount);
	//selectedAnswer(answerButtonElement);
}

function selectedAnswer(answerButtonElement) {
	let selectedAnswer = "";

	Array.from(answerButtonElement).forEach((button) => {
		button.addEventListener("click", () => {
			selectedAnswer = button.value;
			console.log("user: " + selectedAnswer);
			if (
				checkAnswer(selectedAnswer, getQuestionAnswer(getQuestions())) === true
			) {
				askedCount++;
				correctscore++;
				console.log(askedCount);
				console.log(correctscore);
				return true;
			} else {
				askedCount++;
				console.log(askedCount);
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
		console.log(askedCount + 1);
	});
}

/* function qwizScore() {
	let correctAnswer = "";
	let correctscore = 0;
	let askedCount = 0;
	let totalQuestions = 3;
} */
