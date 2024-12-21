export default function getQuestions() {
	const questionsFromLocalStorage = JSON.parse(
		localStorage.getItem("questions")
	);
	const firstQuestionsInfo = questionsFromLocalStorage[1];
	const firstQuestion = firstQuestionsInfo.question;
	const firstQuestionChoice =
		firstQuestionsInfo.incorrect_answers + firstQuestionsInfo.correct_answer;
	console.log("getting questions from local storage");
	console.log(firstQuestionsInfo);
	console.log(firstQuestion);
	console.log(firstQuestionChoice);
}
