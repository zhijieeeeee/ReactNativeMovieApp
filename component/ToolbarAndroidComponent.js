/**
 *ToolbarAndroid学习
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ToolbarAndroid,
  Text,
  View,
  ToastAndroid,
} from 'react-native';

//功能菜单数组
var toolbarActions=[
          {title:'Setting',icon:require('../img/ic_post_white.png'),show:'always'},
          {title:'About',icon:require('../img/ic_share_white.png'),show:'always'},
          {title:'Post',icon:require('../img/ic_post_white.png'),show:'never'}
        ];

export default class ToolbarAndroidComponent extends Component{

  onActionSelected(position){
    ToastAndroid.show(position+'',ToastAndroid.SHORT);
  }

  onIconClicked(){
    ToastAndroid.show('IconClicked',ToastAndroid.SHORT);
  }

  render(){
    return(
      <ToolbarAndroid
        style={styles.toolbar}
        //logo={require('../img/ic_menu_white.png')}  //工具条的徽标。
        navIcon={require('../img/ic_menu_white.png')} //导航器的icon。
        overflowIcon={require('../img/ic_more_vert.png')}  //设置功能列表的弹出菜单的图标。
        title={'Learn'} //标题
        titleColor={'white'}  //标题颜色
        //subtitle={'subTitle'} //子标题
        actions={toolbarActions}  //功能菜单中的可用功能
        //actions={[{title:'Setting',icon:require('../img/ic_post_white.png'),show:'always'},
        //          {title:'About',icon:require('../img/ic_share_white.png'),show:'always'},
        //          {title:'Post',icon:require('../img/ic_post_white.png'),show:'never'}]}
        onActionSelected={(position)=>this.onActionSelected(position)}//当一个功能被选中的时候调用此回调
        onIconClicked={()=>this.onIconClicked()}  //当图标被选中的时候调用此回调。
      />
    );
  }
}

const styles=StyleSheet.create({
  toolbar:{
    height:56,
    backgroundColor:'blue',
  },
});
