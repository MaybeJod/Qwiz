//to convert html entities into normal text of correct answer if there is any
export default function htmlDecode(textString) {
	let doc = new DOMParser().parseFromString(textString, "text/html");
	return doc.documentElement.textContent;
}
