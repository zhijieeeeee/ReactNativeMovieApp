/**
 *Promise学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  View,
  Text,
  ToastAndroid,
} from 'react-native';

export default class PromiseLearn extends Component{

  onTest(){
    var promise=new Promise((resolve,reject)=>{
      console.log('Promise');
      let i=1;
      if(i===1){
        //成功时调用
        resolve('相同');
      }else{
        //失败时调用
        reject(new Error('不相同'));
      }

    });

    //写法一：通过catch获取reject的方法返回
    promise.then((msg)=>{
      ToastAndroid.show(msg,ToastAndroid.SHORT);
    }).catch((error)=>{
      ToastAndroid.show('出错了',ToastAndroid.SHORT);
      console.error('出错了',error);
    });

    //写法二：通过第二个参数回调获取reject的方法返回
      // promise.then((msg)=>{
      //   console.log('Resolve');
      //   ToastAndroid.show(msg,ToastAndroid.SHORT);
      // },(error)=>{
      //   ToastAndroid.show('出错了',ToastAndroid.SHORT);
      //   console.log('Reject');
      // });

      //一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。

      // then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行,
      // 下面的输入，会在resolve或reject之前
      console.log('我是外面的0');
      console.log('我是外面的1');
      console.log('我是外面的2');
      console.log('我是外面的3');
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Text onPress={()=>this.onTest()} style={{fontSize:20,margin:20}}>调用Promise方法</Text>
      </View>
    );
  }
}
