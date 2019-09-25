import React, {Fragment} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Header from './src/Components/Navigations/Header'
import SearchBar from './src/Components/Items/SearchBar'
import CardBukaMart from './src/Components/Items/CardBukaMart'
import CardSpesialUntukmu from './src/Components/Items/CardSpesialUntukmu'
import CardMenuFavorit from './src/Components/Items/CardMenuFavorit'
import CardMaudiGaransi from './src/Components/Items/CardMaudiGaransi'
import CardCategoryHome from './src/Components/Items/CardCategoryHome'
import Categories from './src/Screens/Categories'

import Home from './src/Screens/Home'
import Discover from './src/Screens/Discover'
import BukaMall from './src/Screens/BukaMall'
import Transaction from './src/Screens/Transaction'
import Account from './src/Screens/Account'

const Routes = createStackNavigator(
  {
    Home
  },
  {
    headerMode: 'none',
  }
)

const MainNavigator = createBottomTabNavigator(
  {
    Main: Routes,
    Discover,
    BukaMall,
    Transaction,
    Account
  }
)

const AuthNavigator = createSwitchNavigator(
  {
    App: MainNavigator
  }
)

const Navigation = createAppContainer(AuthNavigator)

const App = () => {
  return (
  <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
    <Navigation/>
  </View>
  );
};

export default App;
