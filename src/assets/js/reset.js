import fetchApi from "./fetchApi";
import displayQuestions from "./displayQuestions";
import getQuestions from "./getQuestions";

export default async function resetApp() {
	const _questionsSection = document.getElementById("displayQuestion");
	const buttonElement = document.getElementById("newQuestionButton");

	buttonElement.addEventListener("click", async () => {
		localStorage.clear();
		_questionsSection.innerText = "lol";

		const ApiUrl = "https://opentdb.com/api.php?amount=1&type=multiple";
		await fetchApi(ApiUrl);
		displayQuestions(getQuestions());
	});
}
