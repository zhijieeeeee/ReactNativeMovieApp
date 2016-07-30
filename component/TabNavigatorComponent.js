/**
 *开源组件TabNavigator学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import LoginComponent from './Net';
import NetListView from './NetListView';
import GridViewComponent from './GridViewComponent';

export default class TabNavigatorComponent extends Component{

	constructor(props){
		super(props);
		this.state={
			selectedTab:'home',
		};
	}

	render(){
		return(
			<TabNavigator >
			  <TabNavigator.Item
			    selected={this.state.selectedTab === 'home'}
			    title="首页"
					titleStyle={styles.title}
					selectedTitleStyle={styles.selected_title}
			    renderIcon={() => <Image source={require('../img/rb_home_grey.png')} style={{width:25,height:25}} resizeMode={'contain'}/>}
			    renderSelectedIcon={() => <Image source={require('../img/rb_home_red.png')} style={{width:25,height:25}}  resizeMode={'contain'}/>}
			    //badgeText="1"
			    onPress={() => this.setState({ selectedTab: 'home' })}>
			    <LoginComponent/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			    selected={this.state.selectedTab === 'friend'}
			    title="好友"
					titleStyle={styles.title}
					selectedTitleStyle={styles.selected_title}
			    renderIcon={() => <Image source={require('../img/rb_friend_grey.png')} style={{width:25,height:25}}  resizeMode={'contain'}/>}
			    renderSelectedIcon={() => <Image source={require('../img/rb_friend_red.png')} style={{width:25,height:25}}  resizeMode={'contain'}/>}
			    //renderBadge={() => <CustomBadgeView />}
			    onPress={() => this.setState({ selectedTab: 'friend' })}>
			    <NetListView/>
			  </TabNavigator.Item>
				<TabNavigator.Item
			    selected={this.state.selectedTab === 'me'}
			    title="我的"
					titleStyle={styles.title}
					selectedTitleStyle={styles.selected_title}
			    renderIcon={() => <Image source={require('../img/rb_myself_grey.png')} style={{width:25,height:25}}  resizeMode={'contain'}/>}
			    renderSelectedIcon={() => <Image source={require('../img/rb_myself_red.png')} style={{width:25,height:25}}  resizeMode={'contain'}/>}
			    //renderBadge={() => <CustomBadgeView />}
			    onPress={() => this.setState({ selectedTab: 'me' })}>
			    <GridViewComponent/>
			  </TabNavigator.Item>
			</TabNavigator>
		);
	}
}

const styles=StyleSheet.create({
	title:{
		color:'grey',
		fontSize:12,
	},
	selected_title:{
		color:'red',
		fontSize:12,
	},
});
