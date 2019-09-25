import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import {connect} from 'react-redux';

class Account extends Component {
    render() {
        return (
        <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
            <Text>Halaman Account</Text>
        </View>
        );
    }
}

export default Account;