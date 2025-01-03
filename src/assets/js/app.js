/* styles */
import "../styles/reset.css";
import "../styles/style.css";

/* js */
import resetApp from "./reset";
import getQuestions from "./getQuestions";
import displayQuestions from "./displayQuestions";
import checkAnswer from "./checkAnswer";

const nextQuestionButtonElement = document.getElementById("nextQuestionButton");
let correctScore = 0;
let askedCount = 0;
const totalQuestions = 3;

export function app() {
	start();
}

function start() {
	resetApp();
	askedCount = 0;
	displayQuestions(getQuestions(), askedCount);
	addAnswerListeners();
	setupNextQuestion();
	disableNextQuestionButton(); // Disable the button initially
}

export function addAnswerListeners() {
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
		button.disabled = true; // Disable all answer buttons
		if (checkAnswer(button.value, correctAnswer)) {
			button.classList.add("correct");
		} else {
			button.classList.add("incorrect");
		}
	});

	// Enable the "Next Question" button after answering
	enableNextQuestionButton();

	// Update the score if the answer is correct
	if (checkAnswer(selectedButton.value, correctAnswer)) {
		correctScore++;
		console.log(`Correct! Score: ${correctScore}`);
	} else {
		console.log(`Wrong! The correct answer was: ${correctAnswer}`);
	}
}

function setupNextQuestion() {
	nextQuestionButtonElement.addEventListener("click", () => {
		askedCount++;

		if (askedCount < totalQuestions) {
			displayQuestions(getQuestions(), askedCount);
			addAnswerListeners(); // Reattach listeners for new question
			disableNextQuestionButton(); // Disable the button again
		} else {
			alert(`Quiz over! Your score: ${correctScore}/${totalQuestions}`);
			nextQuestionButtonElement.remove(); // Remove the button at the end
		}
	});
}

function enableNextQuestionButton() {
	nextQuestionButtonElement.disabled = false;
}

function disableNextQuestionButton() {
	nextQuestionButtonElement.disabled = true;
}
