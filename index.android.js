import MovieComponent from './component/MovieComponent';
import ImageAndTouchComponent from './component/ImageAndTouchComponent';
import AnimationComponent from './component/AnimationComponent';
import ActivityIndicatorComponent from './component/ActivityIndicatorComponent';
import DrawerLayoutComponent from './component/DrawerLayoutComponent'

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

AppRegistry.registerComponent('MovieProject', () => DrawerLayoutComponent);

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
