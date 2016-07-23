import MovieComponent from './component/MovieComponent';
import ImageAndTouchComponent from './component/ImageAndTouchComponent';
import AnimationComponent from './component/AnimationComponent';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

AppRegistry.registerComponent('MovieProject', () => ImageAndTouchComponent);

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
