/**
 *Navigator页面切换学习
 */

import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

class NavigatorComponent extends Component{

  render(){
    let defaultName='FirstPageComponent';
    let defaultComponent=FirstPageComponent;
    return(
      <Navigator
        //设置第一页
        initialRoute={{name:defaultName,component:defaultComponent}}
        //跳转方式  node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
        configureScene={(route)=>{
          return Navigator.SceneConfigs.PushFromRight ;//默认
        }}
        //传递
        renderScene={(route,navigator)=>{
          let Component=route.component;
          return <Component {...route.params} navigator={navigator}/>
        }}/>
    );
  }
}

export default NavigatorComponent;
