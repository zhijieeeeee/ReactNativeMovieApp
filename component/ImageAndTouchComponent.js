/**
 * Image和Touch系列学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ToastAndroid,
  Platform,
} from 'react-native';

//图片和Touch控件学习
class ImageAndTouchComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      name:'',
      count:0,
    };
  }

  pressConsole(msg){
    console.log(msg);
    ToastAndroid.show(msg, ToastAndroid.SHORT)
    this.setState({
      count:this.state.count+1,
      name:msg,
    });
  }

  render(){
    return(
      <View style={styles.container}>
        {/*调用本地图片  ./ 当前目录   ../ 父级目录*/}
        <Image source={require('../img/huge.jpg')}/>
        {/*调用网络图片*/}
        <Image source={{uri:'http://upload.yoyojie.com/2015/0826/1440558829455.jpg'}}
              style={{width:100,height:100}}/>
        <Text>
          {this.state.name} 点击数：{this.state.count}
        </Text>

        {/*TouchableHighlight只支持一个子节点*/}
        <TouchableHighlight onPress={()=>this.pressConsole('TouchableHighlight')} underlayColor={'#ffff00'}
            style={{backgroundColor:'red'}}>
            <Text>I'm TouchableHighlight</Text>
        </TouchableHighlight>

        {/*TouchableNativeFeedback只支持一个单独的View实例作为子节点*/}
        <TouchableNativeFeedback onPress={this.pressConsole.bind(this,'TouchableNativeFeedback')}
            background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 100,backgroundColor:'blue'}}>
            <Text>I'm TouchableNativeFeedback</Text>
          </View>

        </TouchableNativeFeedback>

        {/*activeOpacity指定封装的视图在被触摸操作激活时以多少不透明度显示（通常在0到1之间）。*/}
        {/*TouchableOpacity这个组件就在内部使用了setNativeProps方法来更新其子组件的透明度：*/}
        <TouchableOpacity onPress={()=>this.pressConsole('TouchableOpacity1')} activeOpacity={0.2}>
            <Text>I'm TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.pressConsole('MyButton')} activeOpacity={0.5}>
            <MyButton label='哈哈哈' style={{width:100,backgroundColor:'red'}}/>
        </TouchableOpacity>

      </View>
    );
  }

  componentDidMount(){
      console.log('尝试一把');
      console.log('很好，很不错');
      if(Platform.Version == 21){
          console.log('Running on Lollipop!');
          ToastAndroid.show('Running on Lollipop!',ToastAndroid.SHORT);
      }else if(Platform.Version==19){
          console.log('Running on 19!');
          ToastAndroid.show('Running on 19!',ToastAndroid.SHORT);
      }
  }
}

//将setNativeProps传递给子组件
//如果你通过React.createClass方法自定义了一个组件，直接给它设置样式prop是不会生效的，你得把样式props层层向下传递给子组件，
//直到子组件是一个能够直接定义样式的原生组件。
class MyButton extends Component{

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render(){
        return(
            //{...this.props}是把为MyButton设置的属性传递过来
            <View ref={component=>this._root=component} {...this.props}>
                <Text>{this.props.label}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
  },
});

export default ImageAndTouchComponent;
