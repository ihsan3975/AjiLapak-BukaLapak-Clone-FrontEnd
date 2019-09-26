import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios'
// import { getCategories } from '../Services/Axios/categories';
// import SimpleHeader from '../Components/Navigation/SimpleHeader';

class Wishlist extends Component {

    state = {
        products: [],
      };
      async componentDidMount() {
          const token = await AsyncStorage.getItem('token');
        await axios
          .get(
            `http://192.168.0.130:8080/wishlist`, {
                headers: {
                    authorization : token
                }
            }
          )
          .then(res =>
            this.setState({
              products: res.data.data
            })
          );
        console.log(this.state);
      }

    render() {
        return (
            <ScrollView>
                <Text>ini halaman Wishlist</Text>
                {/* <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'green', }}>

                    </View>
                </View> */}
            {/* <View>*/}
                {/* <Text>Rekomendasi</Text> */}
                    <View style={{flexDirection: 'row'}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            style={{flexDirection: 'row'}}
                            data={this.state.products}
                            renderItem={({ item }) =>
                                <View backgroundColor='#fff' style={{flex: 1}}>
                                    <TouchableOpacity style={styles.parent}>
                                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                            <Image source={{uri: `http://192.168.0.130:8080/products/images/${item.product.image}`}} style={{height: 156, width: 156, margin: 5}}/>
                                        </View>
                                        <Text style={styles.text}>{item.product.name}</Text>
                                        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5}}>Rp{item.product.price}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            keyExtractor={({id}) => id}
                        />
                    </View>
            {/* </View> */}
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'green',
        marginLeft: 8,
        marginBottom: 10,
        width: 168,
        height: 354,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 4,
        // height: 30
        // flexDirection: 'row'
    },
    text: {
        fontSize: 12,
        color: '#000',
        // margin: 7
    },
    searchBar: {
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 25,
        padding: 15,
        // zIndex: 2,
    },
    searchInput: {
        backgroundColor: '#f1f1f1',
        borderRadius: 3,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
});

// const mapsStageToProps = (state) => {
//     return {
//         categories: state.categories
//     }
// };

export default Wishlist;