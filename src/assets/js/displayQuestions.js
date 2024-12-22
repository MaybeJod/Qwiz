export default function displayQuestions(question) {
	const questionsSection = document.getElementById("displayQuestion");

	// Ensure the input is an array
	const questions = Array.isArray(question) ? question : [question];

	questions.forEach((questionItem) => {
		const questionsElement = createQuestionsElement(questionItem);
		questionsSection.appendChild(questionsElement);
	});
}

function createQuestionsElement(questionsArray) {
	const createQuestionArticle = document.createElement("article");
	createQuestionArticle.classList.add("question");

	// combines correct and incorrect answers in one array
	const answers = [
		questionsArray.correct_answer,
		...questionsArray.incorrect_answers,
	];

	const shuffledAnswerArray = fisherYatesShuffle(answers)
		.map(
			(answer, index) =>
				`<li><button class="answer">${index + 1}. ${answer}</button></li>`
		)
		.join("");

	createQuestionArticle.innerHTML = `
			<h2 id="question">${questionsArray.question}</h2>
			<p>
				<span id="category">${questionsArray.category}</span>
				/
				<span id="difficulty">${questionsArray.difficulty}</span>
			</p>
			<div id="answers">
				<ul>
					${shuffledAnswerArray}
				</ul>
			</div>
	`;

	console.log(questionsArray.correct_answer);
	return createQuestionArticle;
}

// how to randomize (shuffle) a js array (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function fisherYatesShuffle(array) {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
