export default async function fetchApi(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		localStorage.setItem("questions", JSON.stringify(data.results));
		console.log("questions are saved in local storage!");
		return data;
	} catch (error) {
		console.trace("An error yo: ", error.message);
	}
}