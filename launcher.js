import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';

import Splash from './src/splash';
//import Frame from './src/frame';

class Launcher extends Component {
	render() {
		let defaultName = "splash";
		let defaultComponent = Splash;
		return (
			<Navigator initialRoute={{name: defaultName, component: defaultComponent}}
			           renderScene={(route, navigator) => {
				           let Component = route.component;
				           return <Component {...route.params} navigator={navigator} />
			           }}
			/>
		)
	}
}

AppRegistry.registerComponent('LagouApp',()=>Launcher);

