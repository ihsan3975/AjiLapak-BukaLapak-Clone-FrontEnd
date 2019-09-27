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
import DateTimePicker from "react-native-modal-datetime-picker";
// import { connect } from "react-redux";
// import { updateAccount } from '../Services/Axios/account';

const options = {
    title: 'Upload Photo',
    takePhotoButtonTitle: 'Camera',
    chooseFromLibraryButtonTitle: 'Galery',
}

class EditProfile extends Component {
    render() {
        return (
        <View style={{backgroundColor: '#f5f5f5', flex: 1}}>
            <Text>Edit</Text>
        </View>
        );
    }
}

export default EditProfile;