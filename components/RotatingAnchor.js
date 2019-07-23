import React, { useRef } from 'react';
import { Anchor, useRender } from 'react-zdog';

const RotatingAnchor = ({ children }) => {
	const ref = useRef(undefined);
	useRender(() => {
		ref.current.rotate.y += 0.005;
	});

	return (
		<Anchor ref={ref} rotate={{x: -Math.PI / 8, y: 0}}>{ children }</Anchor>
	);
}

export default RotatingAnchor;