import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Alert, Dimensions
, CheckBox, Picker } from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'

const {width, height} = Dimensions.get('window');
const options = {
    title: 'Upload Photo',
    takePhotoButtonTitle: 'Camera',
    chooseFromLibraryButtonTitle: 'Galery',
};

class AddProduct extends Component {
    state = {
        name: '',
        categoriesId: '',
        price: '',
        stock: '',
        weight: '',
        image: '',
        description: '',
        category: []
    }

    componentDidMount = async() => {
        await axios.get(`http://192.168.43.134:8080/categories`)
        .then(res => this.setState({ category: res.data.data}))
    }

    handlerSubmit = async () => {
        await axios
        .post(`http://192.168.43.134:8080/products`
        ).then(res =>
            this.setState(this.state))
            alert('Data Berhasil Ditambahkan')
    }

    getImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);

            } else {
                const source = {uri: response.uri};

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    };
    render() {
        const PickerItem = Picker.Item
        return (
            <View>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack(null)}
                    style={{width: 50}}>
                    <Image style={styles.headIcon} source={require('../Assests/images/icon/ic_back.png')}/>
                </TouchableOpacity>
                <Text style={styles.headTitle}>
                    Jual Barang
                </Text>
                <View style={{width: 50}}></View>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{flex: 1}}>
                        <Text>Nama Barang</Text>
                        <TextInput
                            onChangeText={(name) => this.setState({name})}
                            style={styles.input} placeholder={'Masukkan nama barang'}/>
                    </View>
                    <View style={styles.contain}>
                        <Text>Kategori</Text>
                        <TextInput editable={true}
                                onChangeText={(categoriesId) => this.setState({ categoriesId })}
                                style={styles.input} placeholder={'Pilih kategori'} />
                        {/* <TouchableOpacity >
                            <TextInput
                                editable={false}
                                onChangeText={(categoriesId) => this.setState({ categoriesId })}
                                style={styles.input} placeholder={'Pilih kategori'} />
                        </TouchableOpacity> */}
                        {/* <View>
                            <Picker 
                            selectedValue={this.state.categoriesId}
                            onValueChange={(itemValue, itemIndex)=>this.setState({categoriesId: itemValue})}
                            >
                               <Picker.Item label='Select category' />
                                {
                                this.state.category.map((data) => {
                                    return <Picker.Item label={data.category} value={data._id} key={data._id} />
                                })
                                } 

                            </Picker> */}
                        {/* </View> */}
                    </View>
                    <View style={[styles.contain, {flexDirection: 'row'}]}>
                        <View style={{flex: 2, height: 40}}>
                            <Text>Harga</Text>
                            <View style={[styles.form, {width: width * 0.53}]}>
                                <Text style={styles.text}>Rp</Text>
                                <TextInput
                                    onChangeText={(price) => this.setState({price})}
                                    style={{width: 130, marginHorizontal: 5}} placeholder={"0"}/>
                            </View>
                        </View>
                        <View style={{flex: 1, height: 40}}>
                            <Text>Stok</Text>
                            <TextInput
                                onChangeText={(price) => this.setState({price})}
                                style={styles.input} placeholder={'0'}/>
                        </View>
                    </View>
                    <View style={styles.contain}>
                        <Text>Berat</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={[styles.form, {flex: 1, height: 40}]}>
                                <TextInput
                                    onChangeText={(weight) => this.setState({weight})}
                                    style={{flex: 1, alignItems: 'center', marginHorizontal: 5}} placeholder={'0'}/>
                                <Text style={styles.text}>gram</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <CheckBox/>
                                <Text>Baru</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contain}>
                        <Text>Deskripsi Barang</Text>
                        <TextInput
                            onChangeText={(description) => this.setState({description})}
                            style={styles.input} placeholder={'Isi deskripsi barangmu'}/>
                    </View>
                    <View style={styles.contain}>
                        <Text>Foto</Text>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Image style={{width: 40, height: 40}}/>
                        </View>
                        <TouchableOpacity onPress={this.getImage}
                                          style={[styles.btn, {backgroundColor: '#ddd', padding: 15}]}>
                            <Text style={{fontWeight: 'bold'}}>Tambah Foto Barang</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.contain, {marginTop: 10}]}>
                        <TouchableOpacity
                            style={[styles.btn, {backgroundColor: '#D71149', padding: 15}]}
                        > 
                            <Text style={{color: '#fff', fontWeight: 'bold'}}>Jual Barang</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.contain, {alignItems: 'center', marginTop: -30}]}>
                        <TouchableOpacity>
                            <Text style={{color: 'red', fontSize: 17}}>Lengkapi Detail Barang</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    fromData: {
        height: 200
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
    container: {
        flex: 1,
        paddingHorizontal: 15,
        width,
        height,
        marginTop: 15
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: '#ddd',
        borderRadius: 7,
        marginTop: 5,
    },
    contain: {
        flex: 1,
        marginTop: -20
    },
    btn: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 6
    },
    text: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#ddd',
        fontWeight: 'bold'
    },
    form: {
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#ddd',
        borderRadius: 7,
        marginTop: 5,
    }
});

export default AddProduct;

// onPress={() => this.sellProductApi()}