import { useEffect, useState } from 'react';
import { getRandomCatFact } from './services/facts';
import { getRandomImageWithText } from './services/image';
import '/style.css';

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
		getRandomCatFact().then((newFact) => {
			setFact(newFact);
		});
		// OR
		// getRandomCatFact().then(setFact);
	}, []);

	// Get random image with the first three words of the fact
	useEffect(() => {
		getRandomImageWithText(fact).then((newImageWithText) =>
			setImageWithText(newImageWithText)
		);
	}, [fact]);

	const handleClick = async () => {
		const newFact = await getRandomCatFact();
		setFact(newFact);
	};

	return (
		<main>
			<h1>Cats App 🐈‍⬛</h1>
			<button className="refresh-btn" type="button" onClick={handleClick}>
				Refresh
			</button>
			{imageWithText ? (
				<img src={imageWithText} alt="" width="450px" />
			) : (
				FILE_ERROR
			)}

			{fact && <p>{fact}</p>}
		</main>
	);
}
