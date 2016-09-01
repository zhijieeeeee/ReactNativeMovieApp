/**
 *Geolocaton学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import Geolocation from 'Geolocation';

export default class GeolocatonApi extends Component{

  constructor(props){
    super(props);
  }

  getLocation(){
    Geolocation.getCurrentPosition(
      (data)=>{
          alert(JSON.stringify(data));
      },
      (error)=>{
          ToastAndroid.show('获取失败',ToastAndroid.SHORT);
      }
    );
  }

  render(){
    return(
      <View style={styles.contianer}>
        <TouchableOpacity onPress={()=>this.getLocation()}>
          <Text style={{fontSize:20,margin:10}}>获取当前位置</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  contianer:{
    flex:1,
  },
});
