const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat';

export const getRandomImageWithText = async (fact) => {
	if (!fact) return;

	// const firstWord = fact.split(' ')[0];
	const firstThreeWords = fact.split(' ').slice(0, 3).join('%20');
	// console.log({ firstWord, firstThreeWords });

	return fetch(
		`${CAT_ENDPOINT_IMAGE_URL}/says/${firstThreeWords}?fontSize=50&fontColor=white`
	)
		.then((res) => {
			if (!res.ok) {
				return null;
			}
			const { url } = res;
			return url;
		})
		.catch((err) => {
			console.log(err);
			return null;
		});
};
