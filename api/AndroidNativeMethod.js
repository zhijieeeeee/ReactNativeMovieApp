/**
 *RN调用Andorid原生代码
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  View,
  Text,
  NativeModules,
} from 'react-native';

export default class AndroidNativeApi extends Component{

  onUseAndroidNative(){
    //调用原生Android中的MyNativeModule类中的showMsg方法
    NativeModules.MyNativeModule.showMsg('我调用了Android的Toast');
  }

  onUseAndroidNativeWithCallBack(){
    //带回调的Android原生方法
    NativeModules.MyNativeModule.methodWithCallback(9,9,
      (sum)=>{
        alert(sum+'');
      }
    );
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Text onPress={()=>this.onUseAndroidNative()}
          style={{fontSize:20,margin:20}}>点我调用Android原生代码</Text>

        <Text onPress={()=>this.onUseAndroidNativeWithCallBack()}
          style={{fontSize:20,margin:20}}>带回调的Android原生代码</Text>
      </View>
    );
  }
}
