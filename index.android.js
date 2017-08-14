/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import MapScreen from './src/components/MapScreen';

export default class FireMap5 extends Component {
	render() {
		return (
			<MapScreen />
		);
	}
}

AppRegistry.registerComponent('FireMap5', () => FireMap5);
