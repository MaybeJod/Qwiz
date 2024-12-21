export default function displayQuestions(questionsArray) {
	const questionsElement = document.getElementById("question");
	const questions = questionsArray[0].question;

	questionsElement.innerText = questions;
}
