import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DemoLoop extends Component {

    data = [
        { maHV: 1, hoTen: 'Nguyễn Văn A', soDT: '0912345678' },
        { maHV: 2, hoTen: 'Nguyễn Văn B', soDT: '0909876543' },
        { maHV: 3, hoTen: 'Nguyễn Văn C', soDT: '0959934903' },
        { maHV: 4, hoTen: 'Nguyễn Văn D', soDT: '0910198327' },
    ]

    renderHocVien = () => {
        // var arrayContent = [];
        // for (var i = 0; i < this.data.length; i++) {
        //     var comHocVien = <View key={i}>
        //         <Text>Mã Học Viên: {this.data[i].maHV}</Text>
        //         <Text>Tên Học Viên: {this.data[i].hoTen}</Text>
        //         <Text>Số ĐT: {this.data[i].soDT}</Text>
        //     </View>;
        //     arrayContent.push(comHocVien)
        // }
        // return arrayContent; //trả về mảng jsx comHocVien để render ra giao diện

        //Cách 2 dùng es6: Tạo mảng componentHocVien từ mảng hocVien
        var mangComponentHocVien = this.data.map((hocVien, index) => {

            //Call back rtong map chạy n lần ứng với số phần tử của this.dât
            //Mỗi lần hcyj bắt buộc return về 1 giá trj cho mảng mới

            //let {maHV,hoTen,soDT} =hocVien; bóc tách thuộc tính trong object ES6

            return <View key={index}>
                <Text>Mã Học Viên: {hocVien.maHV}</Text>
                <Text>Tên Học Viên: {hocVien.hoTen}</Text>
                <Text>Số ĐT: {hocVien.soDT}</Text>
            </View>;
        });
        return mangComponentHocVien;
    }

    render() {
        return (
            <View>
                {this.renderHocVien()}
            </View>
        )
    }
}
