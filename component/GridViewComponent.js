/**
 *将ListView改为横向（GridView）
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
  Image,
  StatusBar,
  ToastAndroid,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

var titles=['通知管理','主体信息','执法检查记录','检测数据','投入品管理','基础数据库'];

export default class GridViewComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1,row2)=>row1!==row2,
      }).cloneWithRows(titles),
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'blue'}/>
        <ListView
          enableEmptySections={true}
          contentContainerStyle={styles.grid}//实现了横向摆放
          dataSource={this.state.dataSource}
          renderRow={(rowData,sectionId,rowId)=>this.renderRowView(rowData,sectionId,rowId)}
          />
      </View>
    );
  }

  //根据rowId判断显示哪张图片
  judgeImg(rowId){
    switch (rowId) {
      case '0':
        return <Image source={require('../img/index_environment.png')} style={styles.img}
                  resizeMode={'contain'}/>
        break;
      case '1':
        return <Image source={require('../img/index_msg.png')} style={styles.img}
                  resizeMode={'contain'}/>
        break;
      case '2':
        return <Image source={require('../img/index_produce.png')} style={styles.img}
                  resizeMode={'contain'}/>
        break;
      case '3':
        return <Image source={require('../img/index_purchase.png')} style={styles.img}
                  resizeMode={'contain'}/>
        break;
      case '4':
        return <Image source={require('../img/index_sale.png')} style={styles.img}
                  resizeMode={'contain'}/>
      default:
        return <Image source={require('../img/index_copy.png')} style={styles.img}
                  resizeMode={'contain'}/>
    }
  }

  //列表项
  renderRowView(title,sectionId,rowId){
    return(
      <TouchableHighlight onPress={()=>{ToastAndroid.show(title,ToastAndroid.SHORT)}}
        underlayColor={'darkgrey'} style={styles.row}>
        <View style={styles.row_view}>
          {this.judgeImg(rowId)}
          <Text style={styles.row_font}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
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
  row:{
    width:(SCREEN_WIDTH-60)/3,
    height:120,
    margin:10,
  },
  img:{
    width:(SCREEN_WIDTH-60)/3-20,
    height:80,
  },
  row_view:{
    justifyContent:'center',
    alignItems:'center',
  },
  row_font:{
    fontSize:14,
    marginTop:6,
    color:'black',
  }
});
