import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import axios from 'axios'
// import { getCategories } from '../Services/Axios/categories';
// import SimpleHeader from '../Components/Navigation/SimpleHeader';

class CardProducts extends Component {

    state = {
        products: [],
      };
      async componentDidMount() {
        await axios
          .get(
            `http://192.168.43.134:8080/products`
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
            <View>            
                    <View style={{flexDirection: 'row'}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            style={{flexDirection: 'row'}}
                            data={this.state.products}
                            renderItem={({ item }) =>
                                <View backgroundColor='#fff' style={{flex: 1}}>
                                    <TouchableOpacity style={styles.parent}>
                                        <Image source={{uri: item.image}} style={{height: 75, width: 75, margin: 5}}/>
                                        <Text style={styles.text}>{item.name}</Text>
                                        <Text>Rp{item.price}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            keyExtractor={({id}) => id}
                        />
                    </View>
            </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'green',
        marginLeft: 16,
        marginBottom: 10,
        width: 156,
        height: 215,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        // height: 30
        // flexDirection: 'row'
    },
    text: {
        fontSize: 13,
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

export default CardProducts;