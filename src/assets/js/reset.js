import fetchApi from "./fetchApi";
import displayQuestions from "./displayQuestions";
import getQuestions from "./getQuestions";
//import { addAnswerListeners, nextQuestion } from "./app";

export default async function resetApp() {
	const _questionsSection = document.getElementById("displayQuestion");
	const buttonElement = document.getElementById("newQuestionButton");

	buttonElement.addEventListener("click", async () => {
		localStorage.clear();
		_questionsSection.innerText = "lol";

		const ApiUrl = "https://opentdb.com/api.php?amount=3&type=multiple";
		await fetchApi(ApiUrl);
		await displayQuestions(getQuestions(), 0);
		//addAnswerListeners();
		//nextQuestion();
	});
}
