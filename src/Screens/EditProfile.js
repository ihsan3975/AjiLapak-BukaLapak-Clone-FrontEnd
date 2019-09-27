import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    Modal
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import DateTimePicker from "react-native-modal-datetime-picker";
// import { connect } from "react-redux";
// import { updateAccount } from '../Services/Axios/account';

const options = {
    title: 'Upload Photo',
    takePhotoButtonTitle: 'Camera',
    chooseFromLibraryButtonTitle: 'Galery',
}

class EditProfile extends Component {
    // setModalVisibility = (bool) => {
    //     this.setState({_ModalVisible: bool});
    // }
    render() {
        return (
            <View>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image style={{width: 25, height: 25}} source={require('../Assests/images/icon/ic_back.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '500'}}>Edit Profile</Text>
            <View style={{width: 25, height: 25}}></View>
            </View>
            <ScrollView backgroundColor={'#fff'}>
            <View style={styles.bar}>
                <Image style={{width: 55, height: 56, borderRadius: 100}}
                />
                <TouchableOpacity>
                    <Text style={{color: 'red'}}>Edit Foto</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bar}>
                <Text style={styles.textLeft}>Username</Text>
                <Text style={styles.textRight}>username</Text>
            </View>
            <View style={styles.bar}>
                <Text style={styles.textLeft}>Nama</Text>
                <TextInput placeholder='Masukkan' style={[styles.textRight, { padding: 0 }]}/>
            </View>
            <View style={styles.bar}>
                <Text style={styles.textLeft}>Tanggal Lahir</Text>
                <TouchableOpacity>
                    <Text style={styles.textRight}>Tanggal Lahir</Text>
                    {/* <DateTimePicker
                        // isVisible={this.state.isDateTimePickerVisible}
                        // onConfirm={this.handleDatePicked}
                        // onCancel={this.hideDateTimePicker}
                    /> */}
                </TouchableOpacity>
            </View>
            <View style={styles.bar}>
                <Text style={styles.textLeft}>Jenis Kelamin</Text>
                <TouchableOpacity>
                    <Text style={styles.textRight}>gender</Text>
                </TouchableOpacity>
            </View>
            <Text style={{fontSize: 12, color: '#bbb', padding: 20}}>Data kamu selalu dirahasiakan dan tidak
                kami beritahukan kepada pihak ketiga.</Text>
            <TouchableOpacity style={{
                backgroundColor: '#D71149',
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                marginLeft: 20,
                marginRight: 20,
            }} onPress={this.updateAccountApi}>
                <Text style={{
                    color: '#fff',
                    fontSize: 17
                }}>Simpan</Text>
            </TouchableOpacity>

            {/* <Modal transparent={true} visible={this.state._ModalVisible}
                   onRequestClose={() => this.changeModalVisibility(false)}>
                <TouchableOpacity activeOpacity={1} style={styles.contentSide}
                                  onPress={() => this.setModalVisibility(false)}></TouchableOpacity>
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={styles.text}>Laki-laki</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Text style={styles.text}>Perempuan</Text>
                    </TouchableOpacity>
                </View>
            </Modal> */}
        </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    bar: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    textLeft: {
        fontSize: 16,
        color: '#afafaf',
    },
    textRight: {
        color: '#000',
        fontSize: 16,
    },
    modal: {
        backgroundColor: '#FFF',
        position: 'absolute',
        right: 20,
        width: 140,
        bottom: 200,
        padding: 15,
        alignContent: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        elevation: 3,
        borderRadius: 2
    },
    text: {
        left: 3,
        fontSize: 16,
        color: '#000',
        padding: 5,
    },
    contentSide: {
        flex: 1,
        opacity: 0
    },
});

export default EditProfile;