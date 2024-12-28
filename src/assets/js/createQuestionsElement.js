import fisherYatesShuffle from "./fisherYatesShuffle";

export default function createQuestionsElement(questionObject) {
	const createQuestionArticle = document.createElement("article");
	createQuestionArticle.classList.add("questionElement");

	// combines correct and incorrect answers in one array
	const answers = [
		questionObject.correct_answer,
		...questionObject.incorrect_answers,
	];

	const shuffledAnswerArray = fisherYatesShuffle(answers);

	const answersElement = shuffledAnswerArray
		.map(
			(answer) =>
				`<li><button class="answer" value="${answer}">${answer}</button></li>`
		)
		.join("");

	createQuestionArticle.innerHTML = `
			<h2 id="question">${questionObject.question}</h2>
			<p>
				<span id="category">${questionObject.category}</span>
				/
				<span id="difficulty">${questionObject.difficulty}</span>
			</p>
			<div id="answersContainer">
				<ol>
					${answersElement}
				</ol>
			</div>
	`;

	console.log("the correct answer is: " + questionObject.correct_answer);
	return createQuestionArticle;
}
