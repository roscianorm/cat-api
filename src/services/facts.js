const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export const getRandomCatFact = () => {
	const errorMsgAsFact = 'An error occurred, please try again.';

	return fetch(CAT_ENDPOINT_RANDOM_FACT)
		.then((res) => {
			if (!res.ok) {
				return errorMsgAsFact;
			}
			return res.json();
		})
		.then((data) => {
			const { fact } = data;
			return fact;
		})
		.catch((err) => {
			// Triggers only when there's an error with the request not the response
			console.error(err);
			return errorMsgAsFact;
		});
};
