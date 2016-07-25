/**
 * DrawerLayoutAndroid学习
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    DrawerLayoutAndroid,
    TouchableOpacity,
    Text,
    View,
    ToastAndroid,
    Dimensions,
} from 'react-native';

class DrawerLayoutComponent extends Component{

    constructor(props){
        super(props);
        this.renderNavigationView=this.renderNavigationView.bind(this);
    }

    onPress(){
        this.refs.drawer.getDOMNode().openDrawer();
    }

    renderNavigationView(){
        return(
            <View style={styles.container}>
                <Text>我是抽屜</Text>
            </View>
        );
    }
    //或者
    // var navigationView=(
    //     <View style={styles.container}>
    //         <Text>我是抽屜</Text>
    //     </View>
    // );
    // renderNavigationView={()=>navigationView}

    render(){
        return(
            <DrawerLayoutAndroid
                //var {height, width} = Dimensions.get('window');
                //Dimensions.get('window').width获取屏幕宽度
                ref="drawer"
                drawerWidth={Dimensions.get('window').width / 5 * 3}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this.renderNavigationView}
                onDrawerOpen={()=>{ToastAndroid.show('打开了',ToastAndroid.SHORT)}}
                onDrawerClose ={()=>{ToastAndroid.show('关闭了',ToastAndroid.SHORT)}}>
                <View style={styles.container}>
                    <Text>我是主页</Text>
                    <TouchableOpacity onPress={()=>this.onPress()}>
                        <Text>点我</Text>
                    </TouchableOpacity>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },

});

export default DrawerLayoutComponent;
