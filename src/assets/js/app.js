/* styles */
import "../styles/reset.css";
import "../styles/style.css";

/* js */
import resetApp from "./reset";
import getQuestions from "./getQuestions";
import displayQuestions from "./displayQuestions";
import checkAnswer from "./checkAnswer";
import getQuestionAnswer from "./getQuestionAnswer";

export async function app() {
	resetApp();
	displayQuestions(getQuestions());
	selectedAnswer();
}

function selectedAnswer() {
	const answerButtonElement = document.getElementsByClassName("answer");
	let selectedAnswer = "";

	Array.from(answerButtonElement).forEach((button) => {
		button.addEventListener("click", () => {
			selectedAnswer = button.value;
			console.log("you choose: " + selectedAnswer);
			if (
				checkAnswer(selectedAnswer, getQuestionAnswer(getQuestions())) === true
			) {
				return selectedAnswer;
			}
		});
	});
}

function qwizScore() {
	let correctAnswer = "";
	let correctscore = 0;
	let askedCount = 0;
	let totalQuestions = 3;
}
