import MovieComponent from './component/MovieComponent';
import ImageAndTouchComponent from './component/ImageAndTouchComponent';
import AnimationComponent from './component/AnimationComponent';
import ActivityIndicatorComponent from './component/ActivityIndicatorComponent';
import DrawerLayoutComponent from './component/DrawerLayoutComponent';
import NavigatorComponent from './component/NavigatorComponent';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

AppRegistry.registerComponent('MovieProject', () => NavigatorComponent);

// getDefaultProps    ES6语法改为使用static defaultProps={};static propTypes={};
// getInitialState
// componentWillMount
// render
// componentDidMount
// componentWillReceiveProps
// shouldComponentUpdate
// componentWillUpdate
// componentDidUpdate
// componentWillUnmount
