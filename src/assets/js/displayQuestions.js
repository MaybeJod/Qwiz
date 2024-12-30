import createQuestionsElement from "./createQuestionsElement";

export default async function displayQuestions(question, questionIndex) {
	const questionsSection = document.getElementById("displayQuestion");
	questionsSection.innerHTML = "";
	// Ensure the input is an array
	const questions = Array.isArray(question) ? question : [question];

	if (questions.length > 0) {
		questionsSection.innerHTML = "";
		const questionObject = questions[questionIndex];
		const questionElement = createQuestionsElement(
			questionObject,
			questionIndex + 1,
			questions.length
		);

		questionsSection.appendChild(questionElement);
	} else {
		console.error("No questions available to display!");
	}
}
