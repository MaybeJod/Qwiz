export default function getQuestionAnswer(questionObject) {
	if (questionObject) {
		//console.log("getting questions answer");
		return questionObject[0].correct_answer;
	} else {
		console.log("No questions found in local storage.");
		return [];
	}
}
