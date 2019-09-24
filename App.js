import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import Header from './src/publics/components/Header'

const App = () => {
  return (
    // <Fragment>
    <View style={{backgroundColor: 'grey'}}>
      <Header />
      <Text>This is HomePage</Text>
    </View>
    // </Fragment>
  );
};

export default App;
