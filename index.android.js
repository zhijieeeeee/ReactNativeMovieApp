/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

//本地json测试
var MOVIE_DATA_ARRAY=[{title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},];
//获取电影列表url
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class MovieProject extends Component {
  constructor(props){
    super(props);
    this.state={
      // movies:null,
      dataSource:new ListView.DataSource({rowHasChanged:(row1,row2)=>row1!==row2}),
      size:0,
      loaded:false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    this.fetchData.bind(this);
  }

  //在ES6语法中生命周期函数getDefaultProps()改为了下面的
  static defaultProps={
    value:'我是默认的',
  };
  //定义默认属性的类型
  static propTypes={
    value:React.PropTypes.string.isRequired,
  }

  /** 网络抓取数据 */
  fetchData(){
    fetch(REQUEST_URL)
          .then((response) => response.json())
          .then((responseData) => {
            // 在React的工作机制下，setState实际上会触发一次重新渲染的流程
            // console.log(responseData);
            this.setState({
              // movies: responseData.movies,
              dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
              size:responseData.total,
              loaded:true,
            });
          })
          .done();
  }

  render() {
    //本地测试数据
    // var movie=MOVIE_DATA_ARRAY[0];

    if(!this.state.loaded){
      return this.renderLoadingView();
    }

    // var netMovie=this.state.movies[0];
    return (
      <View style={{flex:1}}>
        <Text style={{fontSize:20,textAlign:'center',backgroundColor:'red'}}>
          一共{this.state.size}条电影
        </Text>

        <ListView
           dataSource={this.state.dataSource}
           renderRow={this.renderMovieView}
         />
      </View>
    )
    // return this.renderMovieView(netMovie);

    // return (
    //   <View style={styles.container}>
    //     <View>
    //       <Image
    //         source={{uri:movie.posters.thumbnail}}
    //         style={styles.thumbnail}/>
    //     </View>
    //     <View style={styles.textContainer}>
    //       <Text style={{fontSize:20}}>{movie.title}</Text>
    //       <Text style={{fontSize:15}}>{movie.year}</Text>
    //     </View>
    //   </View>
    // );
  }

  //componentDidMount是React组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用
  componentDidMount(){
    //组件加载完成后，调用获取数据
    this.fetchData();
  }

  //正在加载视图
  renderLoadingView(){
    return(
      <View style={styles.container}>
        <Text>正在加载.....{this.props.value}</Text>
      </View>
    );
  }

  //电影列表项视图
  renderMovieView(movie){
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{uri:movie.posters.thumbnail}}
            style={styles.thumbnail}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={{fontSize:15}}>{movie.title}</Text>
          <Text style={{fontSize:10}}>{movie.year}</Text>
        </View>
      </View>
    );
  }

}


class ImageStudyView extends Component{

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
      <View style={styles.imageContianer}>
        {/*调用本地图片*/}
        <Image source={require('./img/huge.jpg')}/>
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
        <TouchableOpacity onPress={()=>this.pressConsole('TouchableOpacity')} activeOpacity={0.2}>
            <Text>I'm TouchableOpacity</Text>
        </TouchableOpacity>

      </View>
    );
  }

  componentDidMount(){
      console.log('尝试一把');
      console.log('很好，很不错');
  }
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection:'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer:{
    flex:1,
    marginLeft:10
  },
  thumbnail:{
    width:100,
    height:100
  },
  imageContianer:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
  },
});

AppRegistry.registerComponent('MovieProject', () => ImageStudyView);

// getDefaultProps    ES6语法改为使用static defaultProps={};
// getInitialState
// componentWillMount
// render
// componentDidMount
// componentWillReceiveProps
// shouComponentUpdate
// componentWillUpdate
// componentDidUpdate
// componentWillUnmount
