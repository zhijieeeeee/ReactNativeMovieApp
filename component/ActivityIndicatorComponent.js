/**
 * ActivityIndicator学习
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

class ActivityIndicatorComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            label:'隐藏',
            isShow:true,
        };
    }

    onShowPress(){
        if(this.state.isShow){
            this.setState({
                label:'显示',
                isShow:false,
            });
        }else{
            this.setState({
                label:'隐藏',
                isShow:true,
            });
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator
                    animating={this.state.isShow}
                    color={'red'}
                    size={'large'}
                />
                <TouchableOpacity onPress={()=>this.onShowPress()}>
                    <Text>{this.state.label}</Text>
                </TouchableOpacity>
            </View>
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

export default ActivityIndicatorComponent;
