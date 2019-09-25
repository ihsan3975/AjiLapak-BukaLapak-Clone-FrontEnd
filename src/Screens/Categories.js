import React, {PureComponent} from 'react';
import axios from 'axios'
import {StyleSheet, TouchableOpacity, Image, Text, View, TextInput, FlatList} from 'react-native';

class Categories extends PureComponent {
    state = {
        categories: []
    }

    componentDidMount = () => {
        axios.get(`http://192.168.43.134:3000/categories`)
        .then(response => {
            // console.log(response)           
            this.setState({
            categories: response.data.value.data.name
        })
    }
        )
        console.log(this.state)
    }

    // async getCategories() {
    //     console.log('hi')
    //     await axios.get(`http://192.168.43.134:3000/categories`).then(response => 
    //     this.setState({
    //         categories: response.data
    //     }))
    //     console.log(this.state)
    // }


  render() {
    return (
      <View>
        <FlatList
            // style={styles.container}
            data={this.state.categories}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Text style={{fontSize: 20}}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={({id}, index) => id.toString()}
          />          
          <Text>cob</Text>
      </View>
    );
  }
}

export default Categories;
