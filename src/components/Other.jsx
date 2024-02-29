import { Fragment } from 'react';
import useCatImage from '../hooks/useCatImage.js';

export default function Other({ fact }) {
	const { imageUrl } = useCatImage({ fact });

	return (
		<Fragment>
			{imageUrl && <img src={imageUrl} alt="" width="450px" />}
		</Fragment>
	);
}
