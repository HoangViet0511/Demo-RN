import React, { Component } from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class ComFood extends Component {

    data = [
        { ma: 1, tenMon: 'Gà Nướng', gia: 10, hinhAnh: require('../assets/img/food/product1.jpg') },
        { ma: 2, tenMon: 'Bò Nướng', gia: 20, hinhAnh: require('../assets/img/food/product2.jpg') },
        { ma: 3, tenMon: 'Mỳ Ý', gia: 30, hinhAnh: require('../assets/img/food/product3.jpg') },
        { ma: 4, tenMon: 'Heo Hung Khói', gia: 40, hinhAnh: require('../assets/img/food/product4.jpg') },
        { ma: 5, tenMon: 'Gà Ri', gia: 50, hinhAnh: require('../assets/img/food/product5.jpg') },
        { ma: 6, tenMon: 'Sườn Nướng', gia: 60, hinhAnh: require('../assets/img/food/product6.jpg') },

    ]

    renderFoodItem = () => {
        return this.data.map((foodItem, index) => {
            return (
                <Col key={index} style={{ width: widthDevice / 2, padidngLeft: 30, paddingTop: 30 }}>
                    <Text style={{ fontSize: 20, paddingBottom: 15 }}>{foodItem.tenMon}</Text>
                    <Image style={{ width: 150, height: 75 }} source={foodItem.hinhAnh} resizeMode='contain' />
                    <Text style={{ fontSize: 20, paddingTop: 15, fontWeight: 'bold', color: 'yallow' }}>{foodItem.gia.toLocaleString()} $</Text>
                    <TouchableOpacity>
                        <View style={{ borderRadius: 2, padding: 5, marginTop: 5, backgroundColor: 'blue', width: 150, alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Đặt món</Text>
                        </View>
                    </TouchableOpacity>
                </Col>
            )
        })
    }

    render() {
        return (
            <Grid>
                <Row style={{ height: 250, justifyContent: 'center' }}>
                    <Image style={{height:250}} source={require('../assets/img/food/imageMenu.jpg')} resizeMode="contain"></Image>
                </Row>

                <Row style={{ flex: 1, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                    {this.renderFoodItem()}
                </Row>
            </Grid>
        )
    }
}
