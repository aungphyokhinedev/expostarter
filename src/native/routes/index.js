import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Loading from '../components/Loading';
import MyBanner from '../components/MyBanner';

const Index = () => {
  return (
    <Router>
      <Scene hideNavBar key="root">
        <Scene key="scarlet"
          component={MyBanner}
          title="Scarlet"
          initial
        />
        <Scene
          key="gray"
          component={Loading}
          title="Gray"
        />
      </Scene>
    </Router>
  );
}

export default Index;