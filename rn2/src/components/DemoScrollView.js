import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

const {
  wanda,
  captain,
  flash,
  tony,
  petter,
  strange,
  kara,
  diana,
  yasuo,
  natasha,
} = {
  wanda: require('../assets/hero/wanda.jpg'),
  captain: require('../assets/hero/captain.jpg'),
  flash: require('../assets/hero/flash.jpg'),
  tony: require('../assets/hero/ironman.jpeg'),
  petter: require('../assets/hero/spiderman.jpeg'),
  strange: require('../assets/hero/strange.jpg'),
  kara: require('../assets/hero/suppergirl.jpg'),
  diana: require('../assets/hero/wonderwoman.jpg'),
  yasuo: require('../assets/hero/yasuo.jpg'),
  natasha: require('../assets/hero/blackwidow.jpeg'),
};

const userList = [
  {name: 'wanda', avatar: wanda},
  {name: 'yasuo', avatar: yasuo},
  {name: 'captain', avatar: captain},
  {name: 'flash', avatar: flash},
  {name: 'tony', avatar: tony},
  {name: 'petter', avatar: petter},
];
const userSuggestions = [
  {name: 'strange', avatar: strange},
  {name: 'kara', avatar: kara},
  {name: 'diana', avatar: diana},
  {name: 'natasha', avatar: natasha},
  {name: 'strange', avatar: strange},
  {name: 'kara', avatar: kara},
  {name: 'diana', avatar: diana},
  {name: 'natasha', avatar: natasha},
  {name: 'strange', avatar: strange},
  {name: 'kara', avatar: kara},
  {name: 'diana', avatar: diana},
  {name: 'natasha', avatar: natasha},
];



export default class DemoScrollView extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
