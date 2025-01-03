import fisherYatesShuffle from "./fisherYatesShuffle";

export default function createQuestionsElement(
	questionObject,
	questionIndex,
	maxQuestion
) {
	const createQuestionArticle = document.createElement("article");
	createQuestionArticle.classList.add("questionElement");

	// Combine correct and incorrect answers into one array
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
			<p>question ${questionIndex} / ${maxQuestion}</p>
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

	console.log("The correct answer is:", questionObject.correct_answer);

	return createQuestionArticle;
}
