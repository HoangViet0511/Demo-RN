//Tạo rnf => react function components
import React from 'react'
import { View, Text } from 'react-native'

//Nội dung render nằm trong 1 thẻ bao phủ
const Header = () => {
    
    //Binding giá trị sử dụng biến
    let title = 'hello'
    
    //Biding giá trị sử dụng hàm
    let rendertitle = () =>{

        //Hàm này phải trả về 1 component react-native hoặc chuỗi
        return <Text>
            Hell world
        </Text>
    }

    return (
        <View>
            <Text>{title}</Text>
            {rendertitle()}
        </View>
    )
}

export default Header
