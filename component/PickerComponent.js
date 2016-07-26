/**
 *Picker学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
  View,
  Text,
} from 'react-native';

class PickerComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      checkedValue:0,
      checkedPosition:0,
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Picker
          style={{width:100}}
          mode={'dialog'} //mode enum('dialog', 'dropdown')
          prompt={'选择吧'} //设置选择器的提示字符串。在Android的对话框模式中用作对话框的标题。
          selectedValue={this.state.checkedValue} //默认选中的值。可以是字符串或整数。
          onValueChange={(value,position)=>{this.setState({checkedValue:value,checkedPosition:position})}}>
            <Picker.Item label='Java' value='java'/>
            <Picker.Item label='Object-C' value='oc'/>
            <Picker.Item label='C++' value='c++'/>
            <Picker.Item label='Android' value='android'/>
        </Picker>
        <Text>value={this.state.checkedValue},position={this.state.checkedPosition}</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
});

export default PickerComponent;
