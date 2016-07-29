/**
 *ListView学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  RefreshControl,
  ActivityIndicator,
  View,
  Text,
  StatusBar,
  ToastAndroid,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

//接口地址
const URL='http://218.89.222.118:8100/soaservice/NoticeController/getNoticeList';
//当前页
var page=1;
//用户id
var createUserId='6fea1a361eae4c1991b86fc905f8d10d';
//搜索关键字
var title='';

export default class NetListView extends Component{

  constructor(props){
    super(props);
    this.state={
      isLoaded:false,//是否加载完成
      isRefreshing:false,//是否正在刷新
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1,row2)=>row1!==row2,
      }),
    };
    // this.fetchData.bind(this);
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'blue'}/>
        {
          this.state.isLoaded ? this.renderMainView() : this.renderLoadingView()
        }
      </View>
    );
  }

  componentDidMount(){
    this.fetchData(page,createUserId,title);
  }

  //正在加载视图
  renderLoadingView(){
    return(
      <View style={styles.loading_container}>
        <ActivityIndicator
          animating={true}
          color={'blue'}
          size={'large'}/>
        <Text style={{fontSize:16,color:'blue'}}>正在加载...</Text>
      </View>
    );
  }

  //主视图
  renderMainView(){
    return(
      <View style={styles.container}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData,sectionId,rowId)=>this.renderRowView(rowData,sectionId,rowId)}
            renderFooter={()=>this.renderFooterView()}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}  //是否显示刷新指示器。
                onRefresh={()=>this.onRefresh()} //在刷新时调用。
                colors={['blue']}  //数组，，，指定至少一种颜色用来绘制刷新指示器。
              />
            }/>
      </View>
    );
  }

  //列表项
  renderRowView(notice,sectionId,rowId){
    return(
      <TouchableHighlight onPress={()=>{ToastAndroid.show(notice.title,ToastAndroid.SHORT)}}
        underlayColor={'darkgrey'}>
        <View style={styles.row}>
          <Text style={styles.row_font}>sectionId:{sectionId},rowId:{rowId}</Text>
          <Text style={styles.row_font}>通知id:{notice.id}</Text>
          <Text style={styles.row_font}>通知标题:{notice.title}</Text>
          <Text style={styles.row_font}>通知内容:{notice.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  //列表footer
  renderFooterView(){
    return(
      <ActivityIndicator
        animating={true}
        color={'blue'}
        size={'large'}/>
    );
  }

  onRefresh(){
    // title='123';
    this.fetchData(page,createUserId,title);
  }

  fetchData(page,userId,title){
    this.setState({
      isRefreshing:true,
    });
    fetch(URL,{
      method:'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:'currentPage='+page+'&createUserId='+userId+'&title='+title
    })
    .then((response) => response.json())
		.then((responseData)=>{
      this.setState({
        isLoaded:true,
        isRefreshing:false,
        dataSource:this.state.dataSource.cloneWithRows(responseData.data),
      });
		}).done();
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  loading_container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  row:{
    borderBottomWidth :1,
    borderBottomColor:'black',
    padding:10,
  },
  row_font:{
    fontSize:16,
    marginTop:6,
  }
});
