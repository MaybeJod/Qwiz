/* styles */
import "../styles/reset.css";
import "../styles/style.css";

/* js */
import fetchApi from "./fetchApi";
import getQuestions from "./getQuestions";
import displayQuestions from "./displayQuestions";

export function app() {
	const buttonElement = document.getElementById("newQuestionButton");

	buttonElement.addEventListener("click", () => {
		const ApiUrl = "https://opentdb.com/api.php?amount=1&type=multiple";
		localStorage.clear();
		fetchApi(ApiUrl);
		displayQuestions(getQuestions());
	});
	displayQuestions(getQuestions());
}
