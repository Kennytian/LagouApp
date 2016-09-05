import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class MessageIndex extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to Page2 {this.props.title}
				</Text>
				<Text style={styles.instructions} onPress={Actions.messageDetail}>
					点我进入消息详情
				</Text>
				<Text style={styles.instructions}>
					Double tap R on your keyboard to reload,{'\n'}
					Shake or press menu button for dev menu
				</Text>
			</View>
		);
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
