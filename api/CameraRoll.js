/**
 *CameraRoll学习
 */

import React, { Component } from 'react';
import {
	StyleSheet,
  View,
  Image,
  CameraRoll,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class CameraRollApi extends Component{

  constructor(props){
    super(props);
    this.state={
      photos:[],
    };
  }

  getPhotos(){
    let param={
      //需要获取多少张
      first:100,
      //获取的类型：Photos,Video,All
      assetType:'Photos',
      //groupTypes只支持ios
      //after
    };

    CameraRoll.getPhotos(param).then(
      (data)=>{
        let edges=data.edges;
        //map遍历数组中每个元素,回调中，第一个参数是元素，第二个参数是下标
        //map的返回值是按照return组成新的数组
        let photos=edges.map((edge,index)=>{
          return edge.node.image;
        });
        this.setState({
          photos:photos,
        });
      }
    );
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'blue'}/>
        <ScrollView>
          <View style={styles.grid}>
            {
              this.state.photos.map((photo)=>
                <Image
                  style={{width:SCREEN_WIDTH/3,height:SCREEN_WIDTH/3}}
                  source={photo}
                  key={photo.uri}
                  resizeMode={'cover'}
                  />
              )
            }
          </View>
        </ScrollView>
      </View>
    );
  }

  componentDidMount(){
    this.getPhotos();
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  grid:{
    justifyContent:'flex-start',
    flexDirection:'row',
    flexWrap:'wrap',
  },
});
