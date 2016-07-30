/**
 * ListView学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  ActivityIndicator,
  BackAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';

//本地json测试
var MOVIE_DATA_ARRAY=[{title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},];
//获取电影列表url
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class MovieComponent extends Component {
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
    this.onBack=this.onBack.bind(this);
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

  /**
   * 返回上一页
   */
  onBack(){
    const {navigator}=this.props;
    this.props.getSthBack('MovieComponent返回的');
    //获取当前路由的数量
    const routers=navigator.getCurrentRoutes();
    ToastAndroid.show(routers.length+'',ToastAndroid.SHORT);
    //
    if(navigator){
      navigator.pop();
      return true;
    }
    return false;
  }

  componentWillMount(){
    //BackAndroid在iOS平台下是一个空实现，所以理论上不做这个Platform.OS === 'android'判断也是安全的。
    if (Platform.OS === 'android') {
      //监听手机物理返回键
      BackAndroid.addEventListener('hardwareBackPress',this.onBack);
    }
  }

  componentWillUnmount(){
    if (Platform.OS === 'android') {
      //移除监听
      BackAndroid.removeEventListener('hardwareBackPress',this.onBack);
    }
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
        <TouchableOpacity onPress={this.onBack}>
          <Text style={{fontSize:20}}>返回</Text>
        </TouchableOpacity>

        <Text style={{fontSize:15,textAlign:'center',backgroundColor:'black',color:'white'}}>
          {/*上个界面传递过来的*/}
          {this.props.title}
        </Text>

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
        <ActivityIndicator
            animating={this.state.isShow}
            color={'red'}
            size={'large'}
        />
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
});

export default MovieComponent;
