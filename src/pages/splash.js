import React, {Component} from 'react';

import {
	Image
} from 'react-native';

import Router from './router';

export default class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.timer = setTimeout(() => {
			this._navigateToFrame()
		}, 2000);
	}

	_navigateToFrame() {
		let {navigator} = this.props;
		if (navigator) {
			navigator.replace({
				name: 'router',
				component: Router
			})
		}
	}

	render() {
		return (
			<Image source={require('./../images/hello_page_bg.png')} style={styles.backgroundImage}/>
		)
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
}

const styles = {
	backgroundImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null,
		resizeMode: 'cover'
	}
}