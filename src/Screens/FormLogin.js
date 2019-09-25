import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import {connect} from 'react-redux';
// import RegisterModal from "./RegisterModal";

class FormLogin extends Component {
    render() {
        return (
            <View style={styles.container}>
               
                <ScrollView>
                    <View style={styles.contain}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={styles.label}>E-MAIL / USERNAME / NOMOR HANDPHONE</Text>
                        <TextInput
                            style={styles.input}
                        />
                        <Text style={styles.label}>PASSWORD</Text>
                        <TextInput
                            onChangeText={(password) => this.setState({password})}
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={styles.btnLogin}>
                            <Text style={styles.btnTextLogin}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.lineBar}>
                            <View style={styles.line}/>
                            <View style={{width: '30%'}}>
                                <Text style={styles.textBott}>atau login dengan</Text>
                            </View>
                            <View style={styles.line}/>
                        </View>
                            <View style={styles.buttonOpt}>
                                <TouchableOpacity style={styles.optLgButton}>
                                <Image style={{height: 24, width: 24, marginRight: 50}} source={require('../Assests/images/icon/ic_facebook.png')}/>
                                    <Text style={{marginRight: 30, color: '#000', fontSize: 15, fontWeight: '700'}}>
                                        Facebook
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.optLgButton}>
                                    <Image style={{height: 24, width: 24, marginRight: 50}} source={require('../Assests/images/icon/ic_googleplus.png')}/>
                                    <Text style={{marginRight: 30, color: '#000', fontSize: 15, fontWeight: '700'}}>
                                        Google
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
                                <Text style={styles.textBott}>
                                    Belum Punya Akun?
                                </Text>
                                <TouchableOpacity>
                                <Text style={[styles.textBott, {color: '#D71149', fontWeight: '500', marginLeft: 5}]}>
                                    Daftar Sekarang
                                </Text>
                                    </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity>
                                <Text style={[styles.textBott, {color: '#D71149', marginTop: 8}]}>
                                    Lupa Password?
                                </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    headIcon: {
        width: 25,
        height: 25
    },
    contain: {
        height: 500,
        paddingTop: 50,
        paddingBottom: 50,
    },
    title: {
        fontSize: 24,
        color: '#151515',
        marginBottom: 35,
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: '#151515'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 35,
    },
    btnLogin: {
        backgroundColor: '#D71149',
        borderRadius: 2,
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextLogin: {
        color: '#fff',
        fontSize: 17
    },
    line: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        width: '30%'
    },
    lineBar: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBott: {
        alignSelf: 'center',
        color: '#aaa',
        fontSize: 13
    },
    buttonOpt : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optLgButton : {
        backgroundColor: '#f5f5f5',
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        height: 45,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
});

export default FormLogin;