export default async function fetchApi(url) {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("failed to fetch questions: " + response.status);
		}

		const data = await response.json();

		console.log(data);

		localStorage.setItem("questions", JSON.stringify(data.results));

		console.log("questions are saved in local storage!");

		return data;
	} catch (error) {
		return console.trace("An error yo: ", error.message);
	}
}
