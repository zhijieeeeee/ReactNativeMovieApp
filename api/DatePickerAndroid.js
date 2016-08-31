/**
 *DatePickerAndroid,TimePickerAndroid
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  DatePickerAndroid,
  TimePickerAndroid,
} from 'react-native';

export default class DatePickerAndroidApi extends Component{

  constructor(props){
    super(props);
    this.state={
      date:null,
      time:null,
    };
  }

  showDatePickerDialog(){
    // 可选的options对象的key值如下：
    // date (Date对象或毫秒时间戳) - 默认显示的日期
    // minDate (Date对象或毫秒时间戳) - 可选的最小日期
    // maxDate (Date对象或毫秒时间戳) - 可选的最大日期

      //设置显示日期和最大最小日期，但是不兼容5.0以下，所以最好不要设置
      let today=new Date();
      let minDate=new Date(2015,1,1);
      let maxDate=new Date(2025,1,1);
      let options={
        date:today,
        minDate:minDate,
        maxDate:maxDate,
      };
      //DatePickerAndroid.open(options).then();
      DatePickerAndroid.open().then(
        result=>{
          if(result.action===DatePickerAndroid.dateSetAction){
            this.setState({
              date:result.year+'-'+(result.month+1)+'-'+result.day
            });
            ToastAndroid.show(this.state.date,ToastAndroid.SHORT);
          }
        }
      );
  }

  showTimerPickerDialog(){
    // 可选的options对象的key值如下：
    // hour (0-23) - 要显示的小时，默认为当前时间。
    // minute (0-59) - 要显示的分钟，默认为当前时间。
    // is24Hour (boolean) - 如果设为true，则选择器会使用24小时制
    TimePickerAndroid.open().then(
      result=>{
        if(result.action===TimePickerAndroid.timeSetAction){
          this.setState({
            time:result.hour+':'+(result.minute)
          });
          ToastAndroid.show(this.state.time,ToastAndroid.SHORT);
        }
      }
    );
  }

  render(){
    return(
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>this.showDatePickerDialog()}>
            <Text style={{fontSize:20}}>显示日期选择</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.showTimerPickerDialog()}>
            <Text style={{fontSize:20}}>显示时间选择</Text>
          </TouchableOpacity>
        </View>
    );
  }

}

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});
