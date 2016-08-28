import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';
import {Router, Scene, Modal} from 'react-native-router-flux';

import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

class TabIcon extends Component {
	render() {
		return (
			<Text style={{color: this.props.selected ? 'red' : 'black'}}>{this.props.title}</Text>
		)
	}
}

export default class Frame extends Component {
	render() {
		return (
			<Router key='modal'>
				<Scene key='root' hideNavBar={true}>
					<Scene key='tabbar' tabs={true}>
						<Scene key='tab1' component={Page1} title='首页' icon={TabIcon} initial={true}  onRight={()=>alert("Right button")} rightTitle="Right"/>
						<Scene key='tab2' component={Page2} title='消息' icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}/>
						<Scene key='tab3' component={Page3} title='发现' icon={TabIcon}  titleStyle={{color:'black'}}/>
						<Scene key='tab4' component={Page2} title='我的' icon={TabIcon} onLeft={()=>alert("Left button!")} leftTitle="Left"/>
					</Scene>
				</Scene>
			</Router>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
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
