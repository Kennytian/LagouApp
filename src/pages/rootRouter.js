import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';
import {ActionConst, Router, Scene, Modal, Reducer} from 'react-native-router-flux';

// components
import navBarIcon from '../components/navTabIcon';

// pages
import HomeIndex from './home/index';
import MessageIndex from './message/index';
import MessageDetail from './message/detail';
import Page3 from './page3';
import MyIndex from './my/index';
import {rightButton} from './rightButton'

const reducerCreate = params => {
	//https://github.com/aksonov/react-native-router-flux/blob/master/Example/Example.js#L43
	const defaultReducer = Reducer(params);
	let logData = {
		key: null,
		timeStamp: null
	};
	return (state, action) => {
		if (__DEV__) {
			console.debug('ACTION:', action);
		}
		switch (action.type) {
			case ActionConst.FOCUS:
				logData = {
					key: action.scene.name,
					timeStamp: +new Date()
				};
				break;
			case ActionConst.BACK_ACTION:
			case ActionConst.PUSH:
				//viewStayLogger(logData, action.key);
				logData = {
					key: action.key,
					timeStamp: +new Date()
				};
				if (__DEV__) {
					console.debug('logData', logData);
				}
				break;
			default:
				break;
		}
		return defaultReducer(state, action);
	};
};


export default class RootRouter extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let rightButtonInner = () => {
			return (
				<View style={{flexDirection: 'row'}}>
					<Text style={{marginRight: 10}}>收藏</Text>
					<Text>分享</Text>
				</View>
			);
		}

		//code getSceneStyle https://github.com/aksonov/react-native-router-flux/blob/master/Example/Example.js#L52
		//api getSceneStyle https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md#router
		//api getSceneStyle https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md#scene-styles
		return (
			<Router createReducer={reducerCreate} key='modal'>
				<Scene key='root' hideNavBar={false}>
					<Scene key='tabbar' tabs={true}>
						<Scene key='tab1' component={HomeIndex} title='首页' icon={navBarIcon} idx={0} initial={true}/>
						<Scene key='tab2' component={MessageIndex} title='消息' icon={navBarIcon} idx={1}
						       navigationBarStyle={{}} titleStyle={{color: 'white'}}/>
						<Scene key='tab3' component={Page3} title='发现' icon={navBarIcon} idx={2}
						       titleStyle={{color: 'blue'}} renderRightButton={ rightButtonInner }/>
						<Scene key='tab4' component={MyIndex} title='我的' icon={navBarIcon} idx={3}
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
