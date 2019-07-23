import React from 'react';
import { Illustration } from 'react-zdog';
import RotatingAnchor from '../components/RotatingAnchor';
import PumpHouseZdog from '../components/PumpHouseZdog';

const Index = () => (
  <div style={{width: '800px', height: '800px'}}>
    <Illustration>
    	<RotatingAnchor>
      		<PumpHouseZdog />
      	</RotatingAnchor>
    </Illustration>
  </div>
);

export default Index;