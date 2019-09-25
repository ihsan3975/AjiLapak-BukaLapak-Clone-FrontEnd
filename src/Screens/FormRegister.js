import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image, StatusBar, TouchableOpacity, TextInput, ScrollView, CheckBox, Alert} from 'react-native';

class FormRegister extends Component {
    render() {
        return (
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Daftar</Text>
                        <View style={styles.lineBar}>
                            <View style={styles.line}/>
                            <View style={{width: '30%'}}>
                                <Text style={styles.textBott}>menggunakan</Text>
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
                        <Text style={styles.label}>NAMA LENGKAP</Text>
                        <TextInput
                            style={styles.input}
                        />
                        <Text style={styles.label}>NO. HANDPHONE / E-MAIL</Text>
                        <TextInput
                            style={styles.input}
                        />
                        <Text style={styles.label}>JENIS KELAMIN</Text>
                        <View style={styles.checkBar}>
                            <TouchableOpacity style={styles.checkBox}>
                                <Image style={styles.gender} source={require('../Assests/images/icon/ic_man.png')}/>
                                <Text style={{color: '#000', marginTop: 10}}>Laki-laki</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.checkBox}>
                                <Image style={styles.gender} source={require('../Assests/images/icon/ic_woman.png')}/>
                                <Text style={{color: '#000', marginTop: 10}}>Perempuan</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.label}>USERNAME</Text>
                        <TextInput
                            style={styles.input}
                        />
                        <Text style={styles.label}>PASSWORD BUKALAPAK</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <Text style={styles.label}>KETIK ULANG PASSWORD</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <CheckBox
                            />
                            <Text style={{marginTop: 5}}> Dengan mendaftar, Anda telah menyetujui aturan penggunaan dan
                                kebijakan privasi Bukalapak.com</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.btnRegis}>
                            <Text style={styles.btnTextRegis}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        height: 60,
    },
    headIcon: {
        width: 25,
        height: 25
    },
    headTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },
    title: {
        fontSize: 24,
        color: '#151515',
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
    btnRegis: {
        backgroundColor: '#D71149',
        borderRadius: 2,
        width: '100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 45
    },
    btnTextRegis: {
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
    optRegisBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    optRegisBtn: {
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
    },
    checkBar: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    checkBox: {
        borderWidth: 1,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: 115,
        height: 100,
        marginRight: 10,
    },
    gender: {
        width: 30,
        height: 50,
    },
    textBott: {
        alignSelf: 'center',
        color: '#aaa',
        fontSize: 13
    },
    buttonOpt : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
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

export default FormRegister
