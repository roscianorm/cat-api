import { useState, useEffect } from 'react';
import { getRandomCatFact } from '../services/facts.js';

export default function useCatFact() {
	const [fact, setFact] = useState();

	const refreshFact = async () => {
		getRandomCatFact().then((newFact) => setFact(newFact));
		// OR getRandomCatFact().then(setFact);
	};

	// Get random fact
	useEffect(() => {
		(async () => await refreshFact())();
	}, []);

	return { fact, refreshFact };
}
