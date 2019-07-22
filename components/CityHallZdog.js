import React, { useRef } from 'react';
import { Anchor, Ellipse, Cylinder, Box, Hemisphere, Rect, Group, Shape, Polygon, useRender } from 'react-zdog';

const LIMESTONE = "#E2E2DC";
const LIMESTONE_DARK = "#cfcfc8";
const ROOF = "#84B290";
const HEIGHT = 12;

const CityHallZdog = () => {
	const ref = useRef(undefined);
	useRender(() => {
		ref.current.rotate.y += 0.01;
	});

	return (
		<Anchor ref={ref} scale={10}>
			{/*<Ellipse diameter={50} rotate={{x: Math.PI / 2}} translate={{y:5}} fill />*/}

			<Anchor translate={{y: -HEIGHT / 2}}>
				<Box width={30} depth={10} height={HEIGHT} color={LIMESTONE} />
				<Cylinder diameter={10} length={HEIGHT}	color={LIMESTONE}
					translate={{x: 15}} rotate={{x: Math.PI / 2}}/>
				<Box width={5} depth={5} height={HEIGHT} color={LIMESTONE} translate={{ x: 17.5, z: -2.5 }} />
				<Cylinder diameter={10} length={HEIGHT}	color={LIMESTONE}
					translate={{x: -15}} rotate={{x: Math.PI / 2}}/>
				<Box width={5} depth={5} height={HEIGHT} color={LIMESTONE} translate={{ x: -17.5, z: -2.5 }} />

				<Box width={10} depth={20} translate={{z:15}} height={HEIGHT} color={LIMESTONE} />
			</Anchor>

			<Group translate={{y: -HEIGHT / 2}}>
				<Box width={10} depth={2} height={2} translate={{ z: -1 - 5, y: -HEIGHT/2 + 1}} color={LIMESTONE_DARK} />
				<Cylinder diameter={1.5} length={HEIGHT} color={LIMESTONE_DARK}
					translate={{z: -1 - 5, x: -4 }} rotate={{x: Math.PI / 2}}/>
				<Cylinder diameter={1.5} length={HEIGHT} color={LIMESTONE_DARK}
					translate={{z: -1 - 5, x: -1.5 }} rotate={{x: Math.PI / 2}}/>
				<Cylinder diameter={1.5} length={HEIGHT} color={LIMESTONE_DARK}
					translate={{z: -1 - 5, x: 1.5 }} rotate={{x: Math.PI / 2}}/>
				<Cylinder diameter={1.5} length={HEIGHT} color={LIMESTONE_DARK}
					translate={{z: -1 - 5, x: 4 }} rotate={{x: Math.PI / 2}}/>
			</Group>

			<Anchor translate={{y: -HEIGHT}}>
				<Box width={10} depth={10} height={2} translate={{y: -1}} color={LIMESTONE_DARK}/>
				<Box width={8} depth={8} height={2} translate={{y: -2 - 1}} color={ROOF}/>
				<Cylinder diameter={5} length={4} color={LIMESTONE}
					translate={{y:-2 - 2 - 2}} rotate={{x: Math.PI / 2}} />
				<Hemisphere diameter={5} color={ROOF} translate={{y:-2 - 2 - 4}} rotate={{x: Math.PI / 2}}/>
				<Cylinder diameter={1} length={2} color={LIMESTONE}
					translate={{y:-2 - 2 - 4 - 2.5 - 1}} rotate={{x: Math.PI / 2}} />
				<Hemisphere diameter={1} color={ROOF} translate={{y:-2 - 2 - 4 - 2.5 - 2}} rotate={{x: Math.PI / 2}}/>
				<Cylinder diameter={0.2} length={2} color={LIMESTONE_DARK}
					translate={{y:-2 - 2 - 4 - 2.5 - 2 - 0.5 - 1}} rotate={{x: Math.PI / 2}} />

				<Group translate={{ z: -5 }}>
					<Rect width={5} height={2} fill color={ROOF}
						translate={{z: -1, x: 2.35, y:-1}} rotate={{x: Math.PI / 2, y: -Math.PI / 8}} />
					<Rect width={5} height={2} fill color={ROOF}
						translate={{z: -1, x: -2.35, y:-1}} rotate={{x: Math.PI / 2, y: Math.PI / 8}} />
					<Shape visible={false} translate={{z: -5, y: -5}}/>
				</Group>

				<Polygon radius={5} sides={3} fill translate={{z: -2 - 5, y: -0.7}} stroke={2} scale={{y: 0.23}} color={LIMESTONE_DARK} />
			</Anchor>

			<Group translate={{ x: 11, y: -HEIGHT - 1 }}>
				<Rect width={12} height={5} fill color={ROOF}
					translate={{z: 2.35}} rotate={{x: Math.PI / 2 - Math.PI / 8}} />
				<Rect width={12} height={5} fill color={ROOF}
					translate={{z: -2.35}} rotate={{x: Math.PI / 2 + Math.PI / 8}} />
				<Shape visible={false} translate={{y: -50}}/>
			</Group>

			<Group translate={{ x: -11, y: -HEIGHT - 1 }}>
				<Rect width={12} height={5} fill color={ROOF}
					translate={{z: 2.35}} rotate={{x: Math.PI / 2 - Math.PI / 8}} />
				<Rect width={12} height={5} fill color={ROOF}
					translate={{z: -2.35}} rotate={{x: Math.PI / 2 + Math.PI / 8}} />
				<Shape visible={false} translate={{y: -50}}/>
			</Group>
		</Anchor>
	);
}

export default CityHallZdog;
