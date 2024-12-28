export default function getQuestionAnswer(questionObject, questionIndex) {
	if (questionObject) {
		//console.log("getting questions answer");
		return questionObject[questionIndex].correct_answer;
	} else {
		console.log("No questions found in local storage.");
		return [];
	}
}
