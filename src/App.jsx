import useCatFact from './hooks/useCatFact.js';
import useCatImage from './hooks/useCatImage.js';
import '/style.css';

// import Other from './components/Other.jsx';

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
	const { fact, refreshFact } = useCatFact();
	const { imageUrl } = useCatImage({ fact });

	const handleClick = async () => await refreshFact();

	return (
		<main>
			<h1>Cats App 🐈‍⬛</h1>
			<button className="refresh-btn" type="button" onClick={handleClick}>
				Refresh
			</button>
			{imageUrl && <img src={imageUrl} alt="" width="450px" id="catImg" />}
			{fact && <p>{fact}</p>}
			{/*
				<Other fact="Cats are awesome" />
				<Other fact="Cats rule" />
				<Other fact="Cats" /> 
			*/}
		</main>
	);
}
