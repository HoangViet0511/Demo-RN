import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const { cardItem, price, name } = StyleSheet.create({
    cardItem: {
        width: widthDevice / 2.2,
        height: 200,
        marginLeft: widthDevice * 4 / 100,
        marginTop: widthDevice * 20 / 100,
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 20,
    },
});

export default class ComItems extends Component {
    render() {
        let { item } = this.props;
        return (
            <View style={cardItem}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Image style={{ width: 50, height: 50, marginBottom: 0 }} source={item.hot ? heart : heart0} />
                </View>
                <Image style={{ width: 150, height: 150 }} source={item.url} />
                <Text style={name}>{item.name} $</Text>
                <Text style={price}>{item.price} $</Text>
            </View>
        )
    }
}
