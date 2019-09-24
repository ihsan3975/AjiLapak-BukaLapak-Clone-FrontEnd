import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import Header from './src/Components/Navigations/Header'

const App = () => {
  return (
    // <Fragment>
    <View>
      <Header />
      <Text>This is HomePage</Text>
    </View>
    // </Fragment>
  );
};

export default App;
