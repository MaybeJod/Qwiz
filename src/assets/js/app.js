/* styles */
import "../styles/reset.css";
import "../styles/style.css";

/* js */
import resetApp from "./reset";
import fetchApi from "./fetchApi";
import getQuestions from "./getQuestions";
import displayQuestions from "./displayQuestions";
//import checkAnswer from "./checkAnswer";

export async function app() {
	const buttonElement = document.getElementById("newQuestionButton");

	buttonElement.addEventListener("click", async () => {
		resetApp();
		const ApiUrl = "https://opentdb.com/api.php?amount=3&type=multiple";
		await fetchApi(ApiUrl);

		displayQuestions(getQuestions());
	});
	displayQuestions(getQuestions());
}
