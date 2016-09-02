/**
 *Clipboard学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  View,
  Text,
	ToastAndroid,
  Clipboard,
} from 'react-native';

export default class ClipboardApi extends Component{

  async getClipboard(){
    Clipboard.setString('Hello World');

    //写法一
    try {
      //获取剪贴板的文本内容，返回一个Promise
      var content =await Clipboard.getString();
      ToastAndroid.show(content,ToastAndroid.SHORT);
    } catch (e) {
      console.error(e);
    }

    //写法二
    await Clipboard.getString().then(content=>{
      ToastAndroid.show(content,ToastAndroid.SHORT);
    }).catch(e=>{
      console.error(e);
    });
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Text onPress={this.getClipboard.bind(this)} style={{fontSize:20,margin:20}}>点我获取剪贴板内容</Text>
      </View>
    );
  }
}
