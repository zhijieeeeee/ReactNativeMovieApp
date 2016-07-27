/**
 *ViewPagerAndroid学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  ViewPagerAndroid,
	TouchableOpacity,
  Text,
  View,
  ToastAndroid,
} from 'react-native';

export default class ViewPagerAndroidComponent extends Component{

	onPageSelected(event){
		ToastAndroid.show('当前是第'+event.nativeEvent.position+'页',ToastAndroid.SHORT);
	}

	render(){
		return(
			<View style={{flex:1}}>
				<ViewPagerAndroid
					ref='vp'
					initialPage={0}	//初始选中的页的下标。可以用setPage 函数来翻页，并且用onPageSelected来监听页的变化。
					onPageSelected={(event)=>this.onPageSelected(event)}//页面切换完成后（当用户在页面间滑动）调用。
					style={{flex:1}}>
					<View style={[styles.item,{backgroundColor:'red'}]}>
	    			<Text style={styles.font}>第一页</Text>
	    		</View>
					<View style={[styles.item,{backgroundColor:'blue'}]}>
	    			<Text style={styles.font}>第二页</Text>
	    		</View>
					<View style={[styles.item,{backgroundColor:'green'}]}>
	    			<Text style={styles.font}>第三页</Text>
	    		</View>
	   		</ViewPagerAndroid>

				<TouchableOpacity onPress={()=>{this.refs.vp.setPage(2)}}>
    			<Text>下一页</Text>
    		</TouchableOpacity>
			</View>
		);
	}
}

const styles=StyleSheet.create({
	item:{
		justifyContent:'center',
		alignItems:'center',
		padding:20,
	},
	font:{
		color:'white',
		fontSize:20,
	}
});
