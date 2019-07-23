import React, { Fragment } from 'react';
import { Anchor, Ellipse, Cylinder, Box, Hemisphere, Rect, RoundedRect, Group, Shape, Polygon } from 'react-zdog';

const LIMESTONE = "#E2E2DC";
const LIMESTONE_DARK = "#cfcfc8";
const GROUND = "#fafafa";
const ROOF = "#707065";
const ROOF_GREEN = "#96BAA0";
const WINDOW = "#DBF0F9";
const WINDOW_FRAME = "#C0CACE";

const HEIGHT = 12;

const Windows = ({w=6, h=2}) => {
	let windows = [];
	for (let x = 0; x < w; x++) {
		for (let y = 0; y < h; y++) {
			windows.push((
				<Anchor key={`${x}.${y}`} translate={{x: (x - w / 2 + 0.5) * 2, y: (y - h / 2 + 0.5) * 3}}>
					<RoundedRect width={1} height={2.2} fill color={WINDOW} />
					<RoundedRect width={1} height={2.2} stroke={3} color={WINDOW_FRAME} />
				</Anchor>
			));
		}
	}

	return (<Fragment>{windows.map(win=>win)}</Fragment>);
};

const Spire = ({color=ROOF, ...props}) => (
	<Anchor {...props}>
		<Cylinder diameter={1.5} length={1.5} color={LIMESTONE}
			translate={{y: -1.5/2}} rotate={{x: Math.PI / 2}} />
		<Hemisphere diameter={1.5} color={color} translate={{y: -1.5}} rotate={{x: Math.PI / 2}}/>
	</Anchor>
);

const CityHallZdog = () => (
	<Anchor scale={10} rotate={{y: Math.PI * 0.8, x: -Math.PI / 8 }}>
		{/* Ground */}
		<Group>
			<Ellipse diameter={50} fill rotate={{x:Math.PI/2}} color={GROUND}/>
			<Shape translate={{y: 100000}} visible={false}/>
		</Group>

		<Anchor translate={{z: -5}}>
			{/*<Group>
				<Shape translate={{y: 50000000}} />
				<Box width={14} height={3} depth={15} translate={{z: 15.5, y:1.5, x: 12}}
					topFace="transparent" bottomFace={"#777"} color={LIMESTONE_DARK}/>
				<Box width={14} height={3} depth={15} translate={{z: 15.5, y:1.5, x: -12}}
					topFace="transparent" bottomFace={"#777"} color={LIMESTONE_DARK}/>

				<Rect width={300} height={300} translate={{z: -142}} rotate={{x: Math.PI / 2}} fill color={GROUND}/>
				<Rect width={300} height={200} translate={{z: 123}} rotate={{x: Math.PI / 2}} fill color={GROUND}/>
				<Rect width={100} height={15} translate={{z: 15.5, x: 69}} rotate={{x: Math.PI / 2}} fill color={GROUND}/>
				<Rect width={100} height={15} translate={{z: 15.5, x: -69}} rotate={{x: Math.PI / 2}} fill color={GROUND}/>
			</Group>*/}

			{/* Front base + noth/south wing roofs */}
			<Group translate={{y: -HEIGHT}}>
				<Anchor translate={{y: HEIGHT / 2}}>
					<Box width={30} depth={10} height={HEIGHT} color={LIMESTONE} />
					<Cylinder diameter={10} length={HEIGHT}	color={LIMESTONE}
						translate={{x: 15}} rotate={{x: Math.PI / 2}}/>
					<Box width={5} depth={5} height={HEIGHT} color={LIMESTONE} translate={{ x: 17.5, z: -2.5 }} />
					<Cylinder diameter={10} length={HEIGHT}	color={LIMESTONE}
						translate={{x: -15}} rotate={{x: Math.PI / 2}}/>
					<Box width={5} depth={5} height={HEIGHT} color={LIMESTONE} translate={{ x: -17.5, z: -2.5 }} />
				</Anchor>

				<Anchor translate={{ y: - 1 }}>
					<Box width={10} depth={10} height={2} translate={{}} color={LIMESTONE_DARK}/>

					<Anchor translate={{ x: 11 }}>
						<Rect width={12} height={5} fill color={ROOF}
							translate={{z: 2.35}} rotate={{x: Math.PI / 2 - Math.PI / 8}} />
						<Rect width={12} height={5} fill color={ROOF}
							translate={{z: -2.35}} rotate={{x: Math.PI / 2 + Math.PI / 8}} />
						<Spire translate={{y: -1}}/>
					</Anchor>

					<Anchor translate={{ x: -11 }}>
						<Rect width={12} height={5} fill color={ROOF}
							translate={{z: 2.35}} rotate={{x: Math.PI / 2 - Math.PI / 8}} />
						<Rect width={12} height={5} fill color={ROOF}
							translate={{z: -2.35}} rotate={{x: Math.PI / 2 + Math.PI / 8}} />
						<Spire translate={{y: -1}}/>
					</Anchor>
				</Anchor>
			</Group>

			{/* Big spire on top */}
			<Group translate={{ y: -HEIGHT - 1}}>
				<Box width={8} depth={8} height={2} translate={{y: -1 - 1}} color={ROOF}/>
				<Cylinder diameter={5} length={4} color={LIMESTONE}
					translate={{y:-1 - 2 - 2}} rotate={{x: Math.PI / 2}} />
				<Hemisphere diameter={5} color={ROOF} translate={{y:-1 - 2 - 4}} rotate={{x: Math.PI / 2}}/>
				<Cylinder diameter={1.3} length={1.5} color={LIMESTONE}
					translate={{y:-1 - 2 - 4 - 2.5 - 1.5/2}} rotate={{x: Math.PI / 2}} />
				<Hemisphere diameter={1.3} color={ROOF} translate={{y:-1 - 2 - 4 - 2.5 - 1.5}} rotate={{x: Math.PI / 2}}/>
				<Cylinder diameter={0.2} length={1} color={LIMESTONE_DARK}
					translate={{y:-1 - 2 - 4 - 2.5 - 1.5 - 0.5 - 0.5}} rotate={{x: Math.PI / 2}} />
			</Group>

			{/* Front facade */}
			<Group>
				<Anchor translate={{y: -HEIGHT / 2}}>
					<Box width={10} depth={2} height={2} translate={{ z: -1 - 5, y: -HEIGHT/2 + 1}} color={LIMESTONE_DARK} />
					<Box width={10} depth={2} height={2} translate={{ z: -1 - 5, y: HEIGHT/2 - 1}} color={LIMESTONE_DARK} />
					<Cylinder diameter={1.5} length={HEIGHT} color={LIMESTONE_DARK}
						translate={{z: -1 - 5, x: -4 }} rotate={{x: Math.PI / 2}}/>
					<Cylinder diameter={1.5} length={HEIGHT} color={LIMESTONE_DARK}
						translate={{z: -1 - 5, x: -1.5 }} rotate={{x: Math.PI / 2}}/>
					<Cylinder diameter={1.5} length={HEIGHT} color={LIMESTONE_DARK}
						translate={{z: -1 - 5, x: 1.5 }} rotate={{x: Math.PI / 2}}/>
					<Cylinder diameter={1.5} length={HEIGHT} color={LIMESTONE_DARK}
						translate={{z: -1 - 5, x: 4 }} rotate={{x: Math.PI / 2}}/>
				</Anchor>

				<Anchor translate={{y: -HEIGHT -1}}>
					<Polygon radius={5} sides={3} fill translate={{z: -2 - 5, y: 0.3}} stroke={2} scale={{y: 0.23}} color={LIMESTONE_DARK} />

					<Anchor translate={{ z: -5 }}>
						<Rect width={5} height={2} fill color={ROOF}
							translate={{z: -1, x: 2.35 }} rotate={{x: Math.PI / 2, y: -Math.PI / 8}} />
						<Rect width={5} height={2} fill color={ROOF}
							translate={{z: -1, x: -2.35 }} rotate={{x: Math.PI / 2, y: Math.PI / 8}} />
						<Shape visible={false} translate={{z: -5, y: -5}}/>
					</Anchor>
				</Anchor>

				<Anchor translate={{y: -HEIGHT / 2, z: -5, x: 12}}>
					<Windows />
				</Anchor>
				<Anchor translate={{y: -HEIGHT / 2, z: -5, x: -12}}>
					<Windows />
				</Anchor>
			</Group>

			{/* Back windows */}
			<Group>
				<Anchor translate={{y: -HEIGHT / 2, z: 5, x: -11}}>
					<Windows />
				</Anchor>
				<Anchor translate={{y: -HEIGHT / 2, z: 5, x: 11}}>
					<Windows />
				</Anchor>
			</Group>

			<Group translate={{y: -HEIGHT / 2 + 1, z: 15, x: 5}} rotate={{y: Math.PI / 2}}>
				<Windows w={9}/>
			</Group>

			<Group translate={{y: -HEIGHT / 2 + 1, z: 15, x: -5}} rotate={{y: Math.PI / 2}}>
				<Windows w={9}/>
			</Group>

			{/* Market wing + roof */}
			<Group translate={{y: -HEIGHT+2}}>
				<Anchor translate={{y: HEIGHT / 2 - 1}}>
					<Box width={10} depth={20} translate={{z:15}} height={HEIGHT-2} color={LIMESTONE} />
				</Anchor>

				<Anchor translate={{ y: -1, z: 15 }}>
					<Rect width={5} height={20} fill color={ROOF_GREEN}
						translate={{x: 2.35}} rotate={{x: Math.PI / 2, y: -Math.PI / 8}} />
					<Rect width={5} height={20} fill color={ROOF_GREEN}
						translate={{x: -2.35}} rotate={{x: Math.PI / 2, y: Math.PI / 8}} />
					<Spire translate={{y: -1}} color={ROOF_GREEN}/>
				</Anchor>
			</Group>
		</Anchor>
	</Anchor>
);

export default CityHallZdog;
