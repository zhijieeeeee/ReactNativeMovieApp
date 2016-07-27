/**
 *StatusBar,Switch学习
 */

import React, { Component } from 'react';
import {
  StatusBar,
  Switch,
  Text,
  View,
} from 'react-native';

export default class StatusBarComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      value:false,
    }
  }

  onSwitchChange(value){
    this.setState({
      value:value,
    });
  }

  render(){
    return(
      <View style={{flex:1,alignItems:'center'}}>
        <StatusBar
          hidden={false} //是否隐藏状态栏。
          translucent={false}  //指定状态栏是否沉浸式
          backgroundColor={'blue'} //状态栏的背景色。
          barStyle="default"  //设置状态栏文本的颜色。enum('default', 'light-content')
        />
        <Text>StatusBar,Switch学习</Text>

        <Switch
          style={{width:50}}
          value={this.state.value}
          onValueChange={(value)=>this.onSwitchChange(value)}
        />
      </View>
    );
  }
}
