/**
 *TextInput学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ToastAndroid,
} from 'react-native';

class TextInputComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      show:false,
      content:null,
    };
  }

  onSearch(text){
    this.setState({
      show:text?true:false,
      content:text
    });
  }

  onItemClick(searchContent){
    this.setState({
      show:false,
      content:searchContent
    });
  }

  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.input_view}>
            <TextInput
              ref='ti'
              editable={true}
              autoCapitalize='words'
              autoFocus={true}
              maxLength={100}
              placeholder='请输入搜索关键字'
              multiline={true}
              //文本框的下划线颜色(如果要去掉文本框的边框，请将此属性设为透明transparent)。
              underlineColorAndroid="transparent"
              value={this.state.content}
              onChangeText={(text)=>this.onSearch(text)}
              //onChangeText={this.onSearch.bind(this)}
            />
          </View>
          <View style={styles.btn_view}>
            <Text
              style={styles.btn}
              onPress={()=>{ToastAndroid.show(this.state.content,ToastAndroid.SHORT)}}>
              搜索
            </Text>
          </View>
        </View>
        {this.state.show ?
          <View>
            <Text onPress={()=>this.onItemClick(this.state.content+'AAAA')}>{this.state.content}AAAA</Text>
            <Text onPress={()=>this.onItemClick(this.state.content+'BBBB')}>{this.state.content}BBBB</Text>
            <Text onPress={()=>this.onItemClick(this.state.content+'CCCC')}>{this.state.content}CCCC</Text>
            <Text onPress={()=>this.onItemClick(this.state.content+'DDDD')}>{this.state.content}DDDD</Text>
          </View>
          :null
        }

      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems :'center',
  },
  input_view:{
    height:40,
    flex:1,
    borderColor:'red',
    borderRadius:4,
    borderWidth:1,
    justifyContent:'center'
  },
  btn_view:{
    backgroundColor:'red',
    padding:4,
    marginRight:10,
    borderRadius:4,
  },
  btn:{
    color:'white',
  },
});

export default TextInputComponent;
