/**
 *RN调用Andorid原生代码
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  View,
  Text,
  NativeModules,
	ToastAndroid,
} from 'react-native';

export default class AndroidNativeApi extends Component{

	//async函数返回一个Promise对象
  async onUseAndroidNative(){
		//正常情况下，await命令后面是一个Promise对象。如果不是，会被转成一个立即resolve的Promise对象。
		try {
			await new Promise(resolve=>{
				setTimeout(()=>{
					resolve();
				},5000);
			});
		} catch (e) {

		}
		NativeModules.My.showMsg('我调用了Android的Toast')
  }

  onUseAndroidNativeWithCallBack(){
    NativeModules.My.methodWithCallback(9,9,
      (sum)=>{
        alert(sum+'');
      }
    );
  }

	//async函数返回一个Promise对象
	async onUseAndroidNativeWithPromise(){
		//当函数执行的时候，一旦遇到await就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。

		//捕获异常和获取返回值写法一
		try{
	    var {sum}=await NativeModules.My.methodWithPromise(5,5);
			alert(sum+'');
		}catch(e){
			console.error(e);
		}

		//捕获异常和获取返回值写法二
		await NativeModules.MyNativeModule.methodWithPromise(5,5).then(result=>{
			alert(result.sum+'');
		}).catch(error=>{
			console.error(e);
		});
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Text onPress={()=>this.onUseAndroidNative()}
          style={{fontSize:20,margin:20}}>点我调用Android原生代码</Text>

        <Text onPress={()=>this.onUseAndroidNativeWithCallBack()}
          style={{fontSize:20,margin:20}}>带回调的Android原生代码</Text>

					<Text onPress={()=>this.onUseAndroidNativeWithPromise()}
	          style={{fontSize:20,margin:20}}>带Promise的Android原生代码</Text>
      </View>
    );
  }
}
