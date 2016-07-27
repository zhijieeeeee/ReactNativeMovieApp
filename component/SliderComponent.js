/**
 *Slider学习，滑动条
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Slider,
  Text,
  View,
  ToastAndroid,
} from 'react-native';

export default class SliderComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      currentValue:0,
    };
  }

  onDrag(value){
    this.setState({
      currentValue:value,
    });
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Slider
          value={0.6} //滑块的初始值。这个值应该在最小值和最大值之间。默认值是0。
          onValueChange={(value)=>this.onDrag(value)}
        />
        <Text>当前值：{this.state.currentValue}</Text>
      </View>
    );
  }

}
