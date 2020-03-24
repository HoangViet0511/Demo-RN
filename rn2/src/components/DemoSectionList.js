import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, SectionList} from 'react-native';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const array = [
  {
    'title': 'Thông tin tài khoản',
    'data': [
      {'id': '1', 'name': 'Hồ sơ cá nhân'},
      {'id': '2', 'name': 'Đổi mật khẩu'},
    ],
  },
  {
    'title': 'Thông tin liên hệ',
    'data': [
      {'id': '3', 'name': 'Bạn bè'},
      {'id': '4', 'name': 'Nhóm'},
      {'id': '5', 'name': 'Kỷ niệm'},
      {'id': '6', 'name': 'Tìm kiếm quanh đây'},
      {'id': '7', 'name': 'Hẹn hò'},
    ],
  },
  {
    'title': 'Cài đặt',
    'data': [
      {'id': '8', 'name': 'Trợ giúp'},
      {'id': '9', 'name': 'Cài đặt và quyền riêng tư'},
      {'id': '10', 'name': 'Điều khoản chính sách'},
    ],
  },
];

const {title, sectionList, sectionItem, sectionHeader} = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 15,
  },
  sectionList: {
    borderWidth: 10,
    borderTopColor: '#EEEEEE',
  },
  sectionItem: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 5,
    fontWeight: '300',
    fontSize: 17,
  },
  sectionHeader: {
    padding: 15,
    backgroundColor: '#e9eaed',
    fontSize: 17,
  },
});

export default class DemoSectionList extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#FFFFFF', paddingTop: 80}}>
        <Text style={[title]}> CÀI ĐẶT ỨNG DỤNG </Text>
        <SectionList
          style={[sectionList]}
          sections={array}
          renderSectionHeader={({section}) => {
            return (
              <Text style={[sectionHeader]}>{section.title.toUpperCase()}</Text>
            );
          }}
          renderItem={({item}) => {
            return <Text style={[sectionItem]}>{item.name}</Text>;
          }}></SectionList>
      </View>
    );
  }
}
