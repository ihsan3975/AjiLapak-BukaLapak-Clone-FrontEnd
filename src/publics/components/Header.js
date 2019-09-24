import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';

class Header extends PureComponent {
  render() {
    return (
      <View style={{backgroundColor: 'yellow', height: 45, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', margin: 5}}>
                <Image source={require('../images/icon/dana-logo.png')} style={{height: 30, width: 30}}/>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center', margin: 5}}>
                <Text style={{color: '#d71149', fontWeight: '600'}}>Hubungkan</Text>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>DANA</Text>
                    <Image source={require('../images/icon/right.png')} style={{resizeMode: 'stretch', height: 17, width: 17, marginLeft: 5}}/>
                </View>
            </View>
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', margin: 3}}>
                <Image source={require('../images/icon/ico_scan_barcode.png')} style={{height: 26, width: 26}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', margin: 3}}>
                <Image source={require('../images/icon/ico_scan_barcode.png')} style={{height: 26, width: 26}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', margin: 3}}>
                <Image source={require('../images/icon/ico_scan_barcode.png')} style={{height: 26, width: 26}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'center', margin: 3}}>
                <Image source={require('../images/icon/ico_scan_barcode.png')} style={{height: 26, width: 26}}/>
            </TouchableOpacity>
          </View>          
      </View>
    );
  }
}

export default Header;
