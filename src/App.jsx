import { useEffect, useState } from 'react';

import '/style.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat';
const FILE_ERROR = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M14 3v4a1 1 0 0 0 1 1h4" />
		<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
		<path d="M12 17l.01 0" />
		<path d="M12 11l0 3" />
	</svg>
);

export default function App() {
	const [fact, setFact] = useState();
	const [imageWithText, setImageWithText] = useState();

	// Get random fact
	useEffect(() => {
		fetch(CAT_ENDPOINT_RANDOM_FACT)
			.then((res) => {
				if (!res.ok) {
					setFact('An error occurred, please try again.');
					return;
				}
				return res.json();
			})
			.then((data) => {
				const { fact } = data;
				setFact(fact);
			})
			.catch((err) => {
				// Triggers only when there's an error with the request not the response
				setFact('An error occurred, please try again.');
				console.error(err);
			});
	}, []);

	// Get random image with the first three words of the fact
	useEffect(() => {
		if (!fact) return;

		// const firstWord = fact.split(' ')[0];
		const firstThreeWords = fact.split(' ').slice(0, 3).join('%20');
		// console.log({ firstWord, firstThreeWords });

		fetch(
			`${CAT_ENDPOINT_IMAGE_URL}/says/${firstThreeWords}?fontSize=50&fontColor=white`
		)
			.then((res) => {
				if (!res.ok) {
					setImageWithText(null);
					return;
				}
				const { url } = res;
				setImageWithText(url);
			})
			.catch((err) => {
				setImageWithText(null);
				console.log(err);
			});
	}, [fact]);

	return (
		<main>
			<h1>Cats App 🐈‍⬛</h1>

			{imageWithText ? (
				<img src={imageWithText} alt="" width="450px" />
			) : (
				FILE_ERROR
			)}

			{fact && <p>{fact}</p>}
		</main>
	);
}
