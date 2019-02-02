import React from 'react';
// https://callstack.github.io/react-native-paper/
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Router, Stack } from 'react-native-router-flux';
import { Font } from 'expo';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import PropTypes from 'prop-types';

import Loading from './components/Loading';
import Routes from './routes/index';
import MyAppbar from './components/MyAppBar';
import PushNotification from './components/PushNotification';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#5c6bc0',
      accent: 'yellow',
    },
  };

class Root extends React.Component {
  state = {
    fontLoaded: false,
  };

  static propTypes = {
    store: PropTypes.shape({}).isRequired,
    persistor: PropTypes.shape({}).isRequired,
  }

  async componentDidMount() {
    await Font.loadAsync({
      unicode: require('../assets/fonts/Tharlon-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }



  render() {
    const {
      store, persistor,
    } = this.props;
    const {
      fontLoaded,
    } = this.state;
    if (!fontLoaded) {
      return <Loading />;
    }
    return (
        <Provider store={store}>
          <PersistGate
            loading={<Loading />}
            persistor={persistor}
          >
           <PaperProvider theme={theme}>
           <MyAppbar/>
           <PushNotification/>
            <Routes>
              </Routes>
           </PaperProvider>
          </PersistGate>
        </Provider>
    );
  }
}

  
export default Root;

