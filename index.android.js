import MovieComponent from './component/MovieComponent';
import ImageAndTouchComponent from './component/ImageAndTouchComponent';
import AnimationComponent from './component/AnimationComponent';
import ActivityIndicatorComponent from './component/ActivityIndicatorComponent';
import DrawerLayoutComponent from './component/DrawerLayoutComponent';
import NavigatorComponent from './component/NavigatorComponent';
import TextInputComponent from './component/TextInputComponent';
import PickerComponent from './component/PickerComponent';
import ProgressBarAndroidComponent from './component/ProgressBarAndroidComponent'

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

AppRegistry.registerComponent('MovieProject', () => ProgressBarAndroidComponent);

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
