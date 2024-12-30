import htmlDecode from "./htmlDecode";

export default function checkAnswer(selectedAnswer, correctAnswer) {
	if (selectedAnswer === htmlDecode(correctAnswer)) {
		console.log("nice it was correct");
		return true;
	} else {
		console.log(
			"from check answer, are you stupid? correct answer is: " + correctAnswer
		);
		return false;
	}
}
