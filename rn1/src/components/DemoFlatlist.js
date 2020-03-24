import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import ComItems from './ComItems'

const {heart, heart0, shoe1, shoe2, shoe3, shoe4,shoe5,shoe6,shoe7}={
    heart: require('../assets/img/shoes_shop/heart.png'),
    heart0: require('../assets/img/shoes_shop/heart0.png'),
    shoe1: require('../assets/img/shoes_shop/shoe1.jpg'),
    shoe2: require('../assets/img/shoes_shop/shoe2.jpg'),
    shoe3: require('../assets/img/shoes_shop/shoe3.jpg'),
    shoe4: require('../assets/img/shoes_shop/shoe4.jpg'),
    shoe5: require('../assets/img/shoes_shop/shoe5.jpg'),
    shoe6: require('../assets/img/shoes_shop/shoe6.jpg'),
    shoe6: require('../assets/img/shoes_shop/shoe6.jpg'),
}

export default class DemoFlatlist extends Component {
    arrShoes =[
        {id:1, name:'AIR-MAX-270-KID',price: 100.20, desc: 'desc', url: shoe1, hot: false},
        {id:2, name:'AIR-MAX-270-KID',price: 100.20, desc: 'desc', url: shoe2, hot: false},
        {id:3, name:'AIR-MAX-270-KID',price: 100.20, desc: 'desc', url: shoe3, hot: true},
        {id:4, name:'AIR-MAX-270-KID',price: 100.20, desc: 'desc', url: shoe4, hot: false},
        {id:5, name:'AIR-MAX-270-KID',price: 100.20, desc: 'desc', url: shoe5, hot: true},
        {id:6, name:'AIR-MAX-270-KID',price: 100.20, desc: 'desc', url: shoe6, hot: false},
    ]
    render() {
        return (
            <View style={{flex: 1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <FlatList data={this.arrShoes}
                    renderItem={({item})=>{return <ComItems item={item} />}}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()} />
            </View>
        )
    }
}
