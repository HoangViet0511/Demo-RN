import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
//Lấy độ rộng và chiều cao thiết bị
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const { style_card_item } = StyleSheet.create({
    style_card_item: {
        backgroundColor: 'white',
        height: '80%',
        width: widthDevice / 4,
        margin: '10%',
    }
})

const EasyGridComponents = () => {
    return (
        <Grid>
            <Row style={{ backgroundColor: 'pink' }}>
                <Col>
                    <View style={{ backgroundColor: 'white', width: '85%', height:'56%', margin: '8%'}}></View>
                </Col>
            </Row>
            <Row size={2} style={{ backgroundColor: '#b12456' }}>
            </Row>
            <Row style={{ backgroundColor: '#C3EC52' }}>
                <Col>
                    <View style={style_card_item}></View>
                </Col>
                <Col>
                    <View style={style_card_item}></View>
                </Col>
                <Col>
                    <View style={style_card_item}></View>
                </Col>
            </Row>
            <Row style={{ backgroundColor: 'green' }}>
                <Col style={{ backgroundColor: 'yellow' }}></Col>
                <Col style={{ backgroundColor: 'blue' }}></Col>
            </Row>
            <Row style={{ backgroundColor: 'pink' }}>
                <Col style={{ backgroundColor: '#6094EA' }}></Col>
                <Col style={{ backgroundColor: 'white' }}></Col>
            </Row>
            <Row style={{ backgroundColor: 'green' }}>
                <Col style={{ backgroundColor: 'orange' }}></Col>
                <Col style={{ backgroundColor: 'blue' }}></Col>
            </Row>

            {/* <Col style={{backgroundColor: 'red'}}>
            
            </Col>
            <Col style={{backgroundColor: 'green'}}>
            
            </Col> */}

        </Grid>
    )
}

export default EasyGridComponents
