import { useEffect, useState } from 'react';

import '/style.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat';

export default function App() {
	const [fact, setFact] = useState();
	useEffect(() => {
		fetch(CAT_ENDPOINT_RANDOM_FACT)
			.then((res) => res.json())
			.then((data) => {
				const fact = data.fact;
				setFact(fact);

				const firstWord = fact.split(' ')[0];
				const firstThreeWords = fact.split(' ').slice(0, 3).join(' ');
				console.log({ firstWord, firstThreeWords });
			})
			.catch((err) => {
				setFact('An error occurred, please try again.');
				console.error(err);
			});
	}, []);

	const [image, setImage] = useState();
	useEffect(() => {
		fetch(CAT_ENDPOINT_IMAGE_URL).then((res) => setImage(res.url));
	}, []);

	return (
		<main>
			<h1>Cats App 🐈‍⬛</h1>
			<img src={image} alt="" width="450px" />
			{fact && <p>{fact}</p>}
		</main>
	);
}
