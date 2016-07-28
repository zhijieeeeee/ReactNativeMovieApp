/**
 *网络请求学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
  Text,
  View,
  ToastAndroid,
  TextInput,
  ActivityIndicator,
  Image,
	Dimensions,
	TouchableHighlight,
	Modal,
	StatusBar,
} from 'react-native';

import SCREEN_WIDTH from './Constant';
import SCREEN_HEIGHT from './Constant';

// const screenWidth=Dimensions.get('window').width;
// const screenHeight=Dimensions.get('window').height;
const LOGIN_URL='http://218.89.222.118:8100/soaservice/UserController/login';
const GET_AREA_URL='http://218.89.222.118:8100/soaservice/PublicController/getAllArea'

export default class LoginComponent extends Component{
  constructor(props){
    super(props);
		this.state={
			account:null,
			pwd:null,
			isProgressVisible:false,
		};
  }

	onHideModal(){
		this.setState({
			isProgressVisible:false,
		});
	}

	/** 登录点击 */
	onLoginClick(){
		if(!this.state.account){
			ToastAndroid.show('请输入用户名',ToastAndroid.SHORT);
			return;
		}
		if(!this.state.pwd){
			ToastAndroid.show('请输入密码',ToastAndroid.SHORT);
			return;
		}
		this.setState({
			isProgressVisible:true,
		});
		this.onLoginRequest(this.state.account,this.state.pwd);
		// this.onAreaRequest();
	}

	/** 登录接口请求 */
	onLoginRequest(account,pwd){
		fetch(LOGIN_URL,{
			method:'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body:'account='+account+'&password='+pwd
		})
		.then((response) => response.text())
		.then((responseData)=>{
			this.setState({
				isProgressVisible:false,
			});
			ToastAndroid.show(responseData,ToastAndroid.SHORT);
		}).done();
	}

	/** 获取区域接口请求 */
	onAreaRequest(){
		fetch(GET_AREA_URL,{method:'get'})
		.then((response) => response.text())
		.then((responseData)=>{
			this.setState({
				isProgressVisible:false,
			});
			ToastAndroid.show(responseData,ToastAndroid.SHORT);
		}).done();
	}

  render(){
    return(
      <View style={styles.container}>
				<StatusBar
					translucent={true}
					backgroundColor={'transparent'}/>
        <Image source={require('../img/login_bg.png')} style={{flex:1,width:SCREEN_WIDTH,height:SCREEN_HEIGHT}}>
					<View style={{width:SCREEN_WIDTH,height:140,margin:10}}>
						<Image source={require('../img/login_logo.png')}
							style={{flex:1,width:SCREEN_WIDTH}}
							resizeMode={'contain'}/>
					</View>

					<View style={styles.content_view}>
            <Text style={{fontSize:20,color:'white',textAlign:'center'}}>用户登录</Text>
						<TextInput
							style={styles.input}
							placeholder='请输入用户名'
							placeholderTextColor='white'
							underlineColorAndroid="white"
							onChangeText={(text)=>{this.setState({account:text})}}/>
						<TextInput
							style={styles.input}
							placeholder='请输入密码'
							placeholderTextColor='white'
							underlineColorAndroid="white"
							secureTextEntry={true}
							onChangeText={(text)=>{this.setState({pwd:text})}}/>
						<TouchableHighlight style={styles.btn_container} underlayColor={'lightskyblue'}
							onPress={()=>this.onLoginClick()}>
      				<Text style={{color:'white',fontSize:16}}>登录</Text>
      			</TouchableHighlight>
          </View>
        </Image>
				<Modal
					transparent={true}
					visible={this.state.isProgressVisible}
					onRequestClose={()=>this.onHideModal()}>
					<View style={styles.modal_container}>
						<View style={styles.modal_inner_container}>
							<ActivityIndicator
								animated={true}
								color={'deepskyblue'}
								size={'large'}/>
						</View>
					</View>
				</Modal>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
		justifyContent:'flex-start',
  },
  content_view:{
		flex:1,
    alignItems:'stretch',
		paddingTop:20,
    paddingLeft:40,
    paddingRight:40,
  },
	input_container:{
		borderColor:'white',
		borderWidth:1,
		marginTop:10,
		borderRadius:10,
	},
	input:{
		color:'white',
		fontSize:14,
	},
	btn_container:{
		borderRadius:10,
		backgroundColor:'deepskyblue',
		justifyContent:'center',
		alignItems:'center',
		marginTop:20,
		padding:10,
	},
	modal_container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor:'rgba(0, 0, 0, 0.5)'
	},
	modal_inner_container:{
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white',
		padding:20,
	},
});
