/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import EasyGridComponents from './src/components/EasyGridComponents';
import Header from './src/components/Header';
import HeaderC from './src/components/HeaderC';
import DemoLoop from './src/components/DemoLoop';
import ComFood from './src/components/ComFood';
import DemoProps from './src/components/DemoProps';
import DemoFlatlist from './src/components/DemoFlatlist';

const widthDevice = Dimensions.get('window').width; //Lấy chiều rộng thiết bị
const heightDevice = Dimensions.get('window').height;



const App = () => {
  //let hocVien ={ms:1, ten:'Nguyen Van A', tuoi: 20}
  return (
    <>
      {/* <EasyGridComponents />    */}
      {/* <Header /> */}
      {/* <HeaderC /> */}
      {/* <DemoLoop /> */}
      {/* <ComFood /> */}
      {/* <DemoProps name ='Viet'/>
      <DemoProps name ='Abc'/> */}
      <DemoFlatlist />
    </>
  );
};

export default App;



{/* <View style={{ flex: 1, marginTop: 35 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Nike</Text>
      </View>

      <View style={{ flex: 19 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>

          <View style={{ flex: 1, width: widthDevice / 2, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/heart.png')}></Image>
            </View>

            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/shoe1.jpg')}></Image>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Giay Nike 01</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>$100</Text>
            </View>
          </View>

          <View style={{ flex: 1, width: widthDevice / 2, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/heart.png')}></Image>
            </View>

            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/shoe2.jpg')}></Image>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Giay Nike 02</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>$100</Text>
            </View>
          </View>

        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, width: widthDevice / 2, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/heart0.png')}></Image>
            </View>

            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/shoe3.jpg')}></Image>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Giay Nike 03</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>$100</Text>
            </View>
          </View>

          <View style={{ flex: 1, width: widthDevice / 2, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/heart0.png')}></Image>
            </View>

            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/shoe4.jpg')}></Image>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Giay Nike 04</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>$100</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>

          <View style={{ flex: 1, width: widthDevice / 2, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/heart.png')}></Image>
            </View>

            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/shoe5.jpg')}></Image>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Giay Nike 05</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>$100</Text>
            </View>
          </View>

          <View style={{ flex: 1, width: widthDevice / 2, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-start', padding: 15 }}>
              <Image
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/heart0.png')}></Image>
            </View>

            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
                source={require('./src/assets/img/shoes_shop/shoe6.jpg')}></Image>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Giay Nike 06</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={{ fontSize: 20, marginLeft: 15 }}>$100</Text>
            </View>
          </View>
        </View>
      </View> */}



// const styles = StyleSheet.create ({
//   setWidth: (num) => {return{
//     width: widthDevice * num /100
//   }},

//   setHeigth: (num) => {return{
//     height: heightDevice * num /100
//   }},
//   container: {
//     flex: 1, //chiếm 1 phần màn hình so vs thẻ cha (màn hình)
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });

// const {container} = StyleSheet.create({
//   container: {
//     flex: 1, //chiếm 1 phần màn hình so vs thẻ cha (màn hình)
//     flexDirection: 'row',
//     backgroundColor: '#rgb(245,245,245)',
//     flexWrap: 'wrap',
//     paddingTop: 10,
//   }
// });

// const {Item} = StyleSheet.create({
//   Item:{
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },

// });

{/* <View style={[container,bgDark]}>
        <Text style={{ fontSize: 50, color: 'red' }}>Hello React Native</Text>

        {/*Chèn hình từ thư mục của ứng dụng*/}
{/* <Image 
          opacity = {0.5}
          style={{ width: 300, height: 300 }} 
          source={require('./src/assets/img/hinh_01.jpg')} /> */}

{/* Chèn hình từ nguồn khác ứng dụng */ }
{/* <Image
          resizeMode="contain"
          style={{ width: 300, height: 300 }} 
          source={{ uri: 'https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png' }} /> */}

{/*<Button title='OK'></Button>*/ }

{/*Sử dụng Button trong React native*/ }

      //   <TouchableOpacity>
      //     <View style={{
      //       backgroundColor: 'red',
      //       borderRadius: 10,
      //       padding: 15,
      //     }}>
      //       <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>OK</Text>
      //     </View>
      //     <TextInput style={{
      //       borderWidth:1,
      //       borderColor: 'blue',
      //       width: 300,
      //       height: 50,
      //       fontSize: 20,
      //     }}></TextInput>
      //   </TouchableOpacity>

      // </View> */}