import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import {ActionConst, Router, Scene, Modal, Reducer} from 'react-native-router-flux';

// components
import navBarIcon from '../components/navTabIcon';
import {getSceneStyle, getNavigationStyle, backButtonImage} from '../components/styles/routerBase';
import {reducerCreate} from '../components/common/routerBase';
import {rightButton} from '../components/common/rightButton'

// pages
import HomeIndex from './home/index';
import MessageIndex from './message/index';
import MessageDetail from './message/detail';
import Page3 from './page3';
import MyIndex from './my/index';

export default class RootRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //code getSceneStyle https://github.com/aksonov/react-native-router-flux/blob/master/Example/Example.js#L52
    //api getSceneStyle https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md#router
    //api getSceneStyle https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md#scene-styles
    return (
      //<Router createReducer={reducerCreate} getSceneStyle={getSceneStyle} titleStyle={getNavigationStyle.title} titleOpacity={0.95} backButtonImage={backButtonImage} key='modal'>
        <Router key='modal'>
        <Scene key='root' hideNavBar={false}>
          <Scene key='tabbar' tabs={true}>
            <Scene key='tab1' component={HomeIndex} title='首页' icon={navBarIcon} idx={0} initial={true}/>
            <Scene key='tab2' component={MessageIndex} title='消息' icon={navBarIcon} idx={1} navigationBarStyle={{}}/>
            <Scene key='tab3' component={Page3} title='发现' icon={navBarIcon} idx={2} renderRightButton={ rightButton }/>
            <Scene key='tab4' component={MyIndex} title='我的' icon={navBarIcon} idx={3} onLeft={() => alert("Left button!")} leftTitle="Left" onRight={() => alert("Right button")} rightTitle="Right"/>
          </Scene>
        </Scene>
        <Scene key='messageDetail' component={MessageDetail} title='消息详情' hideNavBar={false}/>
      </Router>
    );
  }
}
