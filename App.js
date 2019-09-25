import React, {Fragment} from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
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
import CategoriesList from './src/Screens/CategoriesList'

const styles = StyleSheet.create({
  icon: {
      width: 25,
      height: 25,
  }
});

const Routes = createStackNavigator(
  {
    Home,
    // CategoriesList,
  },
  {
    headerMode: 'none',
  }
)

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
          title: 'Home',
          tabBarIcon: ({focused}) => (
              focused ?
                  <Image style={styles.icon}
                         source={require('./src/Assests/images/icon/Nav/ic_homenav_red.png')}/> :
                  <Image style={styles.icon} source={require('./src/Assests/images/icon/Nav/ic_homenav.png')}/>
          ),
          tabBarOptions: {
              activeTintColor: '#D71149',
              keyboardHidesTabBar: true,
          }
      }),
  },
    Discover: {
      screen: Discover,
      navigationOptions: {
          title: 'Discover',
          tabBarIcon: ({focused}) => (
              focused ?
                  <Image style={styles.icon}
                      source={require('./src/Assests/images/icon/Nav/ic_discover_nav_red.png')}/> :
                  <Image style={styles.icon}
                        source={require('./src/Assests/images/icon/Nav/ic_discover_nav.png')}/>
          ),
          tabBarOptions: {
              activeTintColor: '#D71149',
              // style: {
              //     paddingVertical: 3,
              // },
              keyboardHidesTabBar: true,
          }
      },
  },
    BukaMall: {
      screen: BukaMall,
      navigationOptions: {
          title: 'BukaMall',
          tabBarIcon: ({focused}) => (
              focused ?
                  <Image style={styles.icon}
                        source={require('./src/Assests/images/icon/Nav/ic_bukamall_nav_red.png')}/> :
                  <Image style={styles.icon}
                        source={require('./src/Assests/images/icon/Nav/ic_bukamall_nav.png')}/>
          ),
          tabBarOptions: {
              activeTintColor: '#D71149',
              // style: {
              //     paddingVertical: 6,
              // },
              keyboardHidesTabBar: true,
          }
      },
  },
    Transaction: {
      screen: Transaction,
      navigationOptions: {
          title: 'Transaction',
          tabBarIcon: ({focused}) => (
              focused ?
                  <Image style={styles.icon}
                        source={require('./src/Assests/images/icon/Nav/ic_trans_nav_red.png')}/> :
                  <Image style={styles.icon} source={require('./src/Assests/images/icon/Nav/ic_trans_nav.png')}/>
          ),
          tabBarOptions: {
              activeTintColor: '#D71149',
              // style: {
              //     paddingVertical: 6,
              // },
              keyboardHidesTabBar: true,
          }
      },
  },
    Account: {
            screen: Account,
            navigationOptions: {
                title: 'Account',
                tabBarIcon: ({focused}) => (
                    focused ?
                        <Image style={styles.icon}
                               source={require('./src/Assests/images/icon/Nav/ic_account_nav_red.png')}/> :
                        <Image style={styles.icon}
                               source={require('./src/Assests/images/icon/Nav/ic_account_nav.png')}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#D71149',
                    // style: {
                    //     paddingVertical: 6,
                    // },
                    keyboardHidesTabBar: true,
                }
            },
        },
  }
)

const AuthNavigator = createSwitchNavigator(
  {
    App: MainNavigator,
    Routes,
    CategoriesList
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
