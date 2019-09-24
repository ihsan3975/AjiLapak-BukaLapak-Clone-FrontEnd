import React, {Fragment} from 'react';
import {Text} from 'react-native';
import Header from './src/publics/components/Header'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Text>This is HomePage</Text>
    </Fragment>
  );
};

export default App;
