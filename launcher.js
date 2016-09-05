import React, {Component} from 'react';
import {
	AppRegistry,
	Navigator
} from 'react-native';
import {Crashlytics} from 'react-native-fabric';
import ErrorUtils from 'ErrorUtils'

import Splash from './src/splash';

class Launcher extends Component {
	render() {
		let defaultName = "splash";
		let defaultComponent = Splash;
		return (
			<Navigator initialRoute={{name: defaultName, component: defaultComponent}}
			           renderScene={(route, navigator) => {
				           let Component = route.component;
				           return <Component {...route.params} navigator={navigator}/>
			           }}
			/>
		)
	}
	
	componentDidMount() {
		this._fabricInit();
	}
	
	_fabricInit() {
		ErrorUtils.setGlobalHandler(err => {
				if (__DEV__) {
					console.warn(err);
				}
				Crashlytics.recordError(err)
			}
		)
	}
}

AppRegistry.registerComponent('LagouApp', () => Launcher);
