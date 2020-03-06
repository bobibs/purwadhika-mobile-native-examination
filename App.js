import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
// import MainNavigation from './src/navigations/MainNavigation';
import Reducer from './src/redux/reducers';
import MainStacks from './src/components/MainStacks';

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={createStore(Reducer, {}, applyMiddleware(reduxThunk))}>
        <MainStacks />
      </Provider>
    );
  }
}

export default App;
