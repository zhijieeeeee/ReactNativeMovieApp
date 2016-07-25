/**
 *Navigator页面切换学习(首页)
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import MovieComponent from './MovieComponent';
import ImageAndTouchComponent from './ImageAndTouchComponent';
import DrawerLayoutComponent from './DrawerLayoutComponent';

class FirstPageComponent extends Component{

  constructor(props){
    super(props);
    this.state={};
  }

  /**
   * 点击跳转
   */
  onItemClick(index){
    //const navigator=this.props.navigator;或者下面这种
    const {navigator}=this.props;
    if(navigator){
      if(index==0){
        //push是跳转到指定页面
        navigator.push({
          name:'MovieComponent',
          component:MovieComponent,
          params:{//传递数据,这个语法是把 routes.params里的每个key作为props的一个属性
            title:'电影列表',
            getSthBack:function(msg){//用于供下个页面调用，从而实现返回数据
              ToastAndroid.show(msg,ToastAndroid.SHORT);
            },
          }
        });
      }
      if(index==1){
        navigator.push({
          name:'DrawerLayoutComponent',
          component:DrawerLayoutComponent,
        });
      }
      if(index==2){
        navigator.push({
          name:'ImageAndTouchComponent',
          component:ImageAndTouchComponent,
        });
      }
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.onItemClick(0)}>
          <Text style={styles.item}>MovieComponent</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.onItemClick(1)}>
          <Text style={styles.item}>DrawerLayoutComponent</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.onItemClick(2)}>
          <Text style={styles.item}>ImageAndTouchComponent</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  item:{
    fontSize:20,
    margin:4,
  }
});

export default FirstPageComponent;
