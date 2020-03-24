import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DemoProps extends Component {
    render() {
        //this.props
        let {hocVienProp} =this.props;
        return (
            <View>
                <Text style={{fontSize: 20}}> {this.props.name} </Text>
            </View>
        )
    }
}
