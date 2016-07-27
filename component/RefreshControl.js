/**
 *RefreshControl学习，下拉刷新
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  Text,
  ToastAndroid,
} from 'react-native';

export default class RefreshControlComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      isRefreshing:false,
    };
  }

  /**
   * 刷新
   */
  onRefresh(){
    this.setState({
      isRefreshing:true,
    });
    //setTimeout  在指定时间后执行
    this.timer = setTimeout(()=>{
      ToastAndroid.show("refreshing complete",ToastAndroid.SHORT);
      this.setState({
        isRefreshing:false,
      });
    },3000);
  }

  /**
   * ScrollView回到顶部
   */
  onBackToTop(){
    this.refs.sv.scrollTo({y:0,animated:true});
  }

  render(){
    return(
      <ScrollView
        ref='sv'
        style={{flex:1}}
        horizontal={false} //横向
        showsVerticalScrollIndicator={true}  //是否显示垂直方向的滚动条
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}  //是否显示刷新指示器。
            onRefresh={()=>this.onRefresh()} //在刷新时调用。
            colors={['blue']}  //数组，，，指定至少一种颜色用来绘制刷新指示器。
            //tintColor="red" //指定刷新指示器的颜色。
            //title="Loading..."  //指定刷新指示器下显示的文字。
          />}
      >
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font}>往下拉</Text>
      <Text style={styles.font} onPress={()=>this.onBackToTop()}>回到顶部吧</Text>

      </ScrollView>
    );
  }

  componentWillUnmount(){
    // 如果存在this.timer，则使用clearTimeout/clearInterval清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer&&clearTimeout(this.timer);
  }
}

const styles=StyleSheet.create({
  font:{
    fontSize:20,
    margin:20,
  }
});
