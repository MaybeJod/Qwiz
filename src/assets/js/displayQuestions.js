export default function displayQuestions(question, questionIndex) {
	const questionsSection = document.getElementById("displayQuestion");

	// Ensure the input is an array
	const questions = Array.isArray(question) ? question : [question];

	if (questions.length > 0) {
		questionsSection.innerHTML = "";
		const questionObject = questions[questionIndex];
		const questionElement = createQuestionsElement(questionObject);

		questionsSection.appendChild(questionElement);
	} else {
		console.error("No questions available to display!");
	}
}

function createQuestionsElement(questionObject) {
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
			(answer, index) =>
				`<li><button class="answer" value="${answer}">${
					index + 1
				}. ${answer}</button></li>`
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
				<ul>
					${answersElement}
				</ul>
			</div>
	`;

	console.log("the correct answer is: " + questionObject.correct_answer);
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
