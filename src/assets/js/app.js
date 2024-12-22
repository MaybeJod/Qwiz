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
	//checkAnswerIsCorrect();
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
				console.log("nice");
				return selectedAnswer;
			} else {
				//const correctAnswer = getQuestions[0].correct_answer;
				console.log("the correct answer is: ");
			}
		});
	});
}
