export default function getQuestions() {
	const questionsFromLocalStorage = localStorage.getItem("questions");

	if (questionsFromLocalStorage) {
		// Parse the string into an array of objects
		const questionsArray = JSON.parse(questionsFromLocalStorage);
		//console.log("getting questions array");
		//console.log(questionsArray);
		return questionsArray;
	} else {
		console.log("No questions found in local storage.");
		return [];
	}
}
