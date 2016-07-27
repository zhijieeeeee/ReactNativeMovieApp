/**
 *Navigator页面切换学习
 */

import React, { Component } from 'react';
import {
  Navigator,
  View,
  StatusBar,
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

class NavigatorComponent extends Component{

  render(){
    let defaultName='FirstPageComponent';
    let defaultComponent=FirstPageComponent;
    return(
      <View style={{flex:1}}>
        <StatusBar
          hidden={false} //是否隐藏状态栏。
          translucent={false}  //指定状态栏是否沉浸式
          backgroundColor={'blue'} //状态栏的背景色。
          barStyle="default"  //设置状态栏文本的颜色。enum('default', 'light-content')
        />
        <Navigator
          //设置第一页
          initialRoute={{name:defaultName,component:defaultComponent}}
          //跳转方式  node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
          configureScene={(route)=>{
            return Navigator.SceneConfigs.HorizontalSwipeJump ;
          }}
          //传递
          renderScene={(route,navigator)=>{
            let Component=route.component;
            return <Component {...route.params} navigator={navigator}/>
          }}/>
      </View>

    );
  }
}

export default NavigatorComponent;
