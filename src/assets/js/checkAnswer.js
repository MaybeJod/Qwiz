export default function checkAnswer(selectedAnswer, correctAnswer) {
	if (selectedAnswer === correctAnswer) {
		console.log("correct answer");
		return true;
	} else {
		console.log("are you stupid?");
		return false;
	}
}
