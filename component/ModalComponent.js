/**
 *Modal学习，类似于FrameLayout的重叠层级
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default class ModalComponent extends Component{

  constructor(props){
    super(props);
    this.state={
      visible:false,
    };
  }

  showModal(){
    this.setState({
      visible:true,
    });
  }

  hideModal(){
    this.setState({
      visible:false,
    });
    ToastAndroid.show('消失了',ToastAndroid.SHORT);
  }

  onShow(){
    ToastAndroid.show('显示了',ToastAndroid.SHORT);
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Modal
          animationType={'none'}  //enum('none', 'slide', 'fade')
          visible={this.state.visible}
          transparent={true}
          onRequestClose={()=>this.hideModal()}
          onShow={()=>this.onShow()}>

          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={[styles.font]}>我在Modal里面</Text>
              <TouchableOpacity onPress={()=>this.hideModal()}>
                <Text style={[styles.font,{margin:10}]}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Modal>

        <View style={{flex:1,alignItems:'center'}}>
          <Text style={[styles.font]} onPress={()=>this.showModal()}>点我出现Modal</Text>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'rgba(0, 0, 0, 0.5)'
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 40,
    backgroundColor:'white',
  },
  font:{
    fontSize:20,
  }
});
