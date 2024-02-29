import { useState, useEffect } from 'react';

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat';

// Custom Hook, the name of this kind of hooks always start with the word "use"
export default function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState();

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
					setImageUrl(null);
					return;
				}
				const { url } = res;
				setImageUrl(url);
			})
			.catch((err) => {
				console.log(err);
				setImageUrl(null);
			});
	}, [fact]);

	return { imageUrl };
}
