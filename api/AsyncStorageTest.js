/**
 *AsyncStorage学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

export default class AsComponent extends Component{

  constructor(props){
    super(props);
  }

  save(){
    AsyncStorage.setItem('name','tangzhijie',function(error){
      if(error){
        ToastAndroid.show(error,ToastAndroid.SHORT);
      }else{
        ToastAndroid.show('保存成功',ToastAndroid.SHORT);
      }
    });
  }

  remove(){
    AsyncStorage.removeItem('name',function(error){
      if(error){
        ToastAndroid.show(error,ToastAndroid.SHORT);
      }else{
        ToastAndroid.show('移除成功',ToastAndroid.SHORT);
      }
    });
  }

  show(){
    AsyncStorage.getItem('name',function(error,result){
      if(error){
        ToastAndroid.show(error,ToastAndroid.SHORT);
      }else{
        alert(result);
      }
    });
  }

  render(){
    return(
      <View style={{flex:1}}>
        <TouchableOpacity  style={styles.touch_view} onPress={()=>this.save()}>
          <Text >setItem</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.touch_view} onPress={()=>this.remove()}>
          <Text >removeItem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch_view} onPress={()=>this.show()}>
          <Text >getItem</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles=StyleSheet.create({
  touch_view:{
    padding:10,
  }
});
