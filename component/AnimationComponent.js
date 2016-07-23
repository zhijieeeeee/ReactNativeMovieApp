/**
 * 动画学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
} from 'react-native';


//Animation学习
class AnimationComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            bounceValue:new Animated.Value(0),
            twirl:'0deg',
        };
    }

    render(){
        return(
            <View style={styles.container}>
                {/*可选的基本组件类型: Image, Text, View*/}
                <Animated.Image
                    source={{uri:'http://upload.yoyojie.com/2015/0826/1440558829455.jpg'}}
                    style={{
                        width:50,
                        height:50,
                        // transform是一个有序数组（动画按顺序执行）
                        transform:[
                            {scale:this.state.bounceValue},
                            {rotate:this.state.twirl},
                        ]
                    }}
                />
            </View>
        );
    }

    componentDidMount(){
        //当组件刚刚挂载的时候，缩放比例被设置到1.5
        this.state.bounceValue.setValue(2.0);
        this.setState({twirl:'180deg',});

        //可选的基本动画类型: spring, decay, timing
        // Animated.spring(this.state.bounceValue,
        //     {
        //         toValue:0.8,
        //         friction:4,
        //     }
        // ).start();

        Animated.parallel([
            Animated.spring(
                this.state.bounceValue,
                {
                    toValue:0.8,
                    friction:4,
                }
            ),
            //有问题
            Animated.timing(this.state.twirl,
                {
                    toValue:'180deg'
                }
            ),
        ]).start();
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
  },
});

export default AnimationComponent;
