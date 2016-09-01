/**
 *PanResponder学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  PanResponder,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class PanResponderApi extends Component{

  constructor(props){
    super(props);
    this.state={
      x:0,
      y:0,
    }
  }

  onKeyDown(evt, gestureState){
    let pointX=gestureState.x0;
    let pointY=gestureState.y0;
    this.setState({
      x:pointX,
      y:pointY,
    });
  }

  onMove(evt, gestureState){
    let pointX=gestureState.moveX;
    let pointY=gestureState.moveY;
    this.setState({
      x:pointX,
      y:pointY,
    });
  }

  componentWillMount(){
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder:(evt, gestureState) => true,
      //处理按下事件
      onPanResponderGrant:(evt, gestureState)=>this.onKeyDown(evt, gestureState),
      //处理移动事件
      onPanResponderMove:(evt, gestureState)=>this.onMove(evt, gestureState),
    });
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'red'}}
        {...this._panResponder.panHandlers}>
        <StatusBar
          backgroundColor={'red'}/>
        <Text>X坐标：{this.state.x}</Text>
        <Text>Y坐标：{this.state.y}</Text>
      </View>
    );
  }
}
