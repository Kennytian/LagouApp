import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

// components
import navBarIcon from './components/navTabIcon';

// pages
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

export default class Frame extends Component {
	render() {
		let rightButton = () => {
			return (
				<View style={{flexDirection: 'row'}}>
					<Text style={{marginRight:10}}>收藏</Text>
					<Text>分享</Text>
				</View>
			);
		};

		return (
			<Router key='modal'>
				<Scene key='root' hideNavBar={true}>
					<Scene key='tabbar' tabs={true}>
						<Scene key='tab1' component={Page1} title='首页' icon={navBarIcon} idx={0} initial={true}/>
						<Scene key='tab2' component={Page2} title='消息' icon={navBarIcon} idx={1} navigationBarStyle={{backgroundColor: 'red'}} titleStyle={{color: 'white'}}/>
						<Scene key='tab3' component={Page3} title='发现' icon={navBarIcon} idx={2} titleStyle={{color: 'blue'}} renderRightButton={rightButton}/>
						<Scene key='tab4' component={Page2} title='我的' icon={navBarIcon} idx={3} onLeft={() => alert("Left button!")} leftTitle="Left" onRight={() => alert("Right button")}
						       rightTitle="Right"/>
					</Scene>
				</Scene>
			</Router>
		);
	}
}
