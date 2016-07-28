/**
 *WebView学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  WebView,
	TouchableOpacity,
  Text,
  View,
  ToastAndroid,
} from 'react-native';

const URL='https://m.baidu.com/';

export default class WebViewComponent extends Component{

  constructor(props){
    super(props);
    this.renderError=this.renderError.bind(this);
  }

  goBack(){
    this.refs.webview.goBack();
  }

  goForward(){
    this.refs.webview.goForward();
  }

  reload(){
    this.refs.webview.reload();
  }

  renderError(){
    return(
      <Text>加载失败</Text>
    );
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.btn_container}>
          <TouchableOpacity onPress={()=>this.goBack()}>
            <Text style={styles.font}>后退</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.goForward()}>
            <Text style={styles.font}>前进</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.reload()}>
            <Text style={styles.font}>重新加载</Text>
          </TouchableOpacity>
        </View>
        <WebView
          style={styles.webview}
          ref='webview'
          source={{uri:URL}}
          javaScriptEnabled={true}//仅限Android平台。是否允许javaScript
          domStorageEnabled={true}//仅限Android平台。指定是否开启DOM本地存储。
          startInLoadingState={true}//使用一个加载指示器
          scalesPageToFit={true}//设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例。
          onLoadStart ={()=>{ToastAndroid.show('加载开始',ToastAndroid.SHORT)}}//加载开始时调用。
          onLoad={()=>{ToastAndroid.show('加载完成',ToastAndroid.SHORT)}}//加载成功时调用。
          onError={()=>{ToastAndroid.show('加载失败',ToastAndroid.SHORT)}}//加载失败时调用。
          onLoadEnd={()=>{ToastAndroid.show('加载结束',ToastAndroid.SHORT)}}//加载结束时（无论成功或失败）调用。
          renderError={this.renderError}//返回一个视图用于显示错误。
          />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  btn_container:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  font:{
    fontSize:20,
    color:'red',
  },
  webview:{
    flex:1,
  },
});
