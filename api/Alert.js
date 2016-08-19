/**
 *Alert学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ToastAndroid
} from 'react-native';

export default class AlertTest extends Component{

  showAlert(){
    Alert.alert('我是标题','我是message',[
      {text: '确定', onPress: () => ToastAndroid.show("确定",ToastAndroid.SHORT)},
      {text: '取消', onPress: () => ToastAndroid.show("取消",ToastAndroid.SHORT)},
    ])
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.showAlert()}>
          <Text>
            点我显示Alert
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});
