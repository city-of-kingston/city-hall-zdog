import { Illustration, Anchor } from 'react-zdog';
import CityHallZdog from '../components/CityHallZdog';

const Index = () => (
  <div style={{width: '800px', height: '800px'}}>
    <Illustration>
      <Anchor rotate={{ x: -Math.PI / 8 }}>
        <CityHallZdog />
      </Anchor>
    </Illustration>
  </div>
);

export default Index;