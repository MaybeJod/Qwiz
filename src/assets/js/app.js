/* styles */
import "../styles/reset.css";
import "../styles/style.css";

/* js */
import resetApp from "./reset";
import getQuestions from "./getQuestions";
import displayQuestions from "./displayQuestions";
//import checkAnswer from "./checkAnswer";

export async function app() {
	resetApp();
	displayQuestions(getQuestions());
}
