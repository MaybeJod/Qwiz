export default function resetApp() {
	const _questionsSection = document.getElementById("displayQuestion");
	localStorage.clear();
	_questionsSection.innerText = "lol";
}
