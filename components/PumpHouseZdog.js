import React, { Fragment } from 'react';
import { Anchor, Ellipse, Cylinder, Box, Hemisphere, Rect, RoundedRect, Group, Shape, Polygon } from 'react-zdog';

const BRICK = "#B53D3B";
const BRICK_DARK = "#a85858";
const GROUND = "#eee";
const ROOF = "#DD6A68";
const WINDOW = "#484848";
const WINDOW_FRAME = "#777";
const SMOKE = "#ccc";

const WIDTH = 30;
const HEIGHT = 10;
const DEPTH = 20;

const Window = (props) => (
	<Group {...props}>
		<Ellipse diameter={4} color={WINDOW} fill/>

		<Ellipse diameter={4} color={WINDOW_FRAME} stroke={2}/>
		<Rect width={4} height={4} translate={{y: 2.5}} color={WINDOW_FRAME} stroke={2}/>

		<Rect width={4} height={4} scale={0.95} fill translate={{y: 2.5}} color={WINDOW}/>
	</Group>
);

const PumpHouseZdog = () => (
	<Anchor scale={10} rotate={{y: Math.PI * 0.8, x: -Math.PI / 8 }}>
		{/* Ground */}
		<Group>
			<Ellipse diameter={50} fill rotate={{x:Math.PI/2}} color={GROUND}/>
			<Shape translate={{y: 100000}} visible={false}/>
		</Group>

		<Anchor translate={{ y: -HEIGHT/2 }}>
			<Group translate={{ z: -DEPTH/2 }}>
				<Polygon radius={5} sides={3} fill translate={{y: -HEIGHT/2-1}} stroke={2} scale={{y: 0.4}} color={BRICK} />
				<Rect width={WIDTH} height={HEIGHT} color={BRICK} fill />
				<Window scale={{x: 1.3}} />
				<Window scale={{x: 1.3}} translate={{x: WIDTH/3}}/>
				<Window scale={{x: 1.3}} translate={{x: -WIDTH/3}}/>

				<Window scale={0.3} translate={{y: -5.3}} />
				<Window scale={0.25} translate={{y: -5, x: 1.7}} />
				<Window scale={0.25} translate={{y: -5, x: -1.7}} />
			</Group>

			<Group translate={{ z: DEPTH/2 }}>
				<Polygon radius={5} sides={3} fill translate={{y: -HEIGHT/2-1}} stroke={2} scale={{y: 0.4}} color={BRICK} />
				<Rect width={WIDTH} height={HEIGHT} color={BRICK} fill />
				<Window scale={{x: 1.3}} />
				<Window scale={{x: 1.3}} translate={{x: WIDTH/3}}/>
				<Window scale={{x: 1.3}} translate={{x: -WIDTH/3}}/>
			</Group>

			<Group translate={{ x: -WIDTH/2 }} rotate={{y: Math.PI / 2}}>
				<Polygon radius={DEPTH/2} sides={3} fill translate={{y: -HEIGHT/2-1}} stroke={2} scale={{y: 0.2}} color={BRICK} />
				<Rect width={DEPTH} height={HEIGHT} color={BRICK} fill />
				<Window />
				<Window translate={{x: DEPTH/3}}/>
				<Window translate={{x: -DEPTH/3}}/>
			</Group>

			<Group translate={{ x: WIDTH/2 }} rotate={{y: Math.PI / 2}}>
				<Polygon radius={DEPTH/2} sides={3} fill translate={{y: -HEIGHT/2-1}} stroke={2} scale={{y: 0.2}} color={BRICK} />
				<Rect width={DEPTH} height={HEIGHT} color={BRICK} fill />
				{/*<Window />
				<Window translate={{x: DEPTH/3}}/>
				<Window translate={{x: -DEPTH/3}}/>*/}
			</Group>

			<Anchor translate={{y: -HEIGHT / 2}}>
				<Group>
					<Rect width={5} height={DEPTH} fill color={ROOF}
						rotate={{x: Math.PI/2, y: Math.PI / 5}} translate={{y:-1.5, x: -2}}/>
					<Rect width={5} height={DEPTH} fill color={ROOF}
						rotate={{x: Math.PI/2, y: -Math.PI / 5}} translate={{y:-1.5, x: 2}}/>
					<Rect height={DEPTH/2} width={WIDTH} fill color={ROOF}
						rotate={{x: Math.PI/2 - Math.PI / 9}} translate={{y:-1.5, z: DEPTH / 4 - 0.2}} stroke={4}/>
					<Rect height={DEPTH/2} width={WIDTH} fill color={ROOF}
						rotate={{x: Math.PI/2 + Math.PI / 9}} translate={{y:-1.5, z: -DEPTH / 4 + 0.2}} stroke={4}/>
				</Group>
			</Anchor>

			<Box width={DEPTH/2} height={HEIGHT} depth={DEPTH/2} color={BRICK} translate={{x: WIDTH/2+DEPTH/4, z: -DEPTH/4 + 3}}>
				<Cylinder diameter={3} length={10} rotate={{x: Math.PI/2}} translate={{y: -5-HEIGHT/2}} color={BRICK_DARK}/>
				<Shape stroke={25} color={SMOKE} translate={{y: -18}} />
				<Shape stroke={22} color={SMOKE} translate={{y: -19, x: 1}} />
				<Shape stroke={20} color={SMOKE} translate={{y: -20, z: 2, x: -1}} />
				<Shape stroke={25} color={SMOKE} translate={{y: -22}} />
			</Box>
		</Anchor>
	</Anchor>
);

export default PumpHouseZdog;
