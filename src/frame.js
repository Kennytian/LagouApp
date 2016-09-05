import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';
import {Router, Scene, Modal} from 'react-native-router-flux';

// components
import navBarIcon from './components/navTabIcon';

// pages
import Page1 from './page1';
import MessageIndex from './message/index';
import MessageDetail from './message/detail';
import Page3 from './page3';
import My from './my';

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
						<Scene key='tab2' component={MessageIndex} title='消息' icon={navBarIcon} idx={1}
						       navigationBarStyle={{backgroundColor: 'red'}} titleStyle={{color: 'white'}}/>
						<Scene key='tab3' component={Page3} title='发现' icon={navBarIcon} idx={2}
						       titleStyle={{color: 'blue'}} renderRightButton={rightButton}/>
						<Scene key='tab4' component={My} title='我的' icon={navBarIcon} idx={3}
						       onLeft={() => alert("Left button!")} leftTitle="Left"
						       onRight={() => alert("Right button")}
						       rightTitle="Right"/>
					</Scene>
				</Scene>
				<Scene key='messageDetail' component={MessageDetail} title='消息详情' hideNavBar={false}/>
			</Router>
		);
	}
}
