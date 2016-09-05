import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';
import {Answers} from 'react-native-fabric';

export default class My extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to Page4 {this.props.title} 我的页面
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
					Double tap R on your keyboard to reload,{'\n'}
					Shake or press menu button for dev menu
				</Text>
			</View>
		);
	}

	componentDidMount() {
		Answers.logCustom('My page viewed', { updated: new Date() });
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
};
