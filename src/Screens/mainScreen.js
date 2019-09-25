import React, {Fragment} from 'react';
import {Text, View, ScrollView} from 'react-native';

import Header from '../Components//Navigations/Header'
import SearchBar from '../Components/Items/SearchBar'
import CardBukaMart from '../Components/Items/CardBukaMart'
import CardSpesialUntukmu from '../Components/Items/CardSpesialUntukmu'
import CardMenuFavorit from '../Components/Items/CardMenuFavorit'
import CardMaudiGaransi from '../Components/Items/CardMaudiGaransi'
import CardCategoryHome from '../Components/Items/CardCategoryHome'


const mainScreen = () => {
  return (
    <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <Header />
        <ScrollView>
        <SearchBar />
        <CardBukaMart/>
        <CardSpesialUntukmu />
        <CardMenuFavorit />
        <CardMaudiGaransi />
        <CardCategoryHome />
      </ScrollView>
    </View>
  );
};

export default mainScreen;
