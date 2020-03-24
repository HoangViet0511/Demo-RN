//rnc
import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, Alert } from 'react-native'

export default class HeaderC extends Component {

    //React class component có thể render thuộc tính về phường thức lên giao giện thông qua từ khó this.

    state ={
        isLogin: false
    }

    title = 'hello react-native';
    name = 'Việt';
    

    renderTitle = () => {
        //Nội dung trả về phải có duy nhất 1 thẻ bao phủ
        return (
            <Text>
                Hello 123
            </Text>
        )
    }
    //Xử lý sự kiện react-native
    handleShowMessage = (name) => {
        Alert.alert(name);
    }

    //Xây dựng phương thức login => sd setState để re-render gia diện
    login = () => {
        //this.state.isLogin = true ; //Thay đổi giá trị của state.isLogin nhưng không render giao diện
        let newState= {isLogin:true};
        //Gọi phương thức setState => giao diện render lại
        this.setState(newState);
    }

    renderContent = () => {
        if (this.isLogin) {
            return <Text style={{fontSize:30, color: 'blue'}}>Hello {this.name}</Text>;
        }
        return <TouchableOpacity onPress={this.login}>
            <View style={{
                backgroundColor: 'yellow',
                padding: 15,
                borderRadius: 5
            }}>
                <Text>Login</Text>
            </View>
        </TouchableOpacity>
    }

    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                {this.renderContent()}

                {/* {this.isLogin === true ? <Text>{this.name}</Text> : <TouchableOpacity>
                    <View style={{
                        backgroundColor: 'yellow',
                        padding: 15,
                        borderRadius: 5
                    }}>
                        <Text>Login</Text>
                    </View>
                </TouchableOpacity>} */}






                {/* <Text>{this.title}</Text>
                <Text>{this.renderTitle()}</Text>
                <TouchableOpacity onPress={()=>{this.handleShowMessage('Hello')}}>
                    <View style={{ padding: 15, backgroundColor: 'orange', borderRadius: 15 }}>
                        <Text>Show message</Text>
                    </View>
                </TouchableOpacity> */}
            </View>
        )
    }
}
