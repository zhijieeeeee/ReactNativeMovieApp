/**
 *ProgressBarAndroid学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ProgressBarAndroid,
  ActivityIndicator,
  View,
} from 'react-native';

export default class ProgressBarAndroidComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      progress:0,
    };
  }

  render(){
    return(
      <View style={{flex:1}}>
        <ProgressBarAndroid
          color={'blue'}
          indeterminate={false}
          styleAttr={'Horizontal'}
          //当前的进度值（在0到1之间）。
          progress={this.state.progress}/>

        <ProgressBarAndroid
          color={'blue'}
          styleAttr={'Horizontal'}/>

        <ProgressBarAndroid
          color={'red'}
          styleAttr={'Inverse'}/>

        <ActivityIndicator
          animating={true}
          color={'black'}
          size={'small'}/>
      </View>
    );
  }

  componentDidMount(){
    setInterval(()=>{
        let progress=this.state.progress+0.01;
        this.setState({progress:progress});
      },100);
  }
}
