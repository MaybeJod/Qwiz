/* styles */
import "../styles/reset.css";
import "../styles/style.css";

/* js */
import fetchApi from "./fetchApi";
import getQuestions from "./getQuestions";

export function app() {
	const buttonElement = document.getElementById("newQuestionButton");

	buttonElement.addEventListener("click", () => {
		localStorage.clear();
		const ApiUrl = "https://opentdb.com/api.php?amount=3&type=multiple";
		fetchApi(ApiUrl);
		getQuestions();
	});

	getQuestions();
}
