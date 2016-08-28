/**
 * Created by kenny on 16/3/5.
 */
'use strict';

import React,{ Component } from 'react';
import  {
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native';

import Home from './views/home';

export default class RouteHome extends Component {
    render() {
        let defaultName = 'Home';
        let defaultComponent = Home;

        return (<Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route) => {
                return Navigator.SceneConfigs.HorizontalSwipeJump;
            }}
            renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
            }}
        />);
    }
}
