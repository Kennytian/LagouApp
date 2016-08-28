/**
 * Created by kenny on 16/3/7.
 */
'use strict';

import React,{ Component} from 'react';
import React,{
  Navigator,
} from 'react-native';

import Me from './views/me';

export default class RouteMe extends Component {
    render() {
        let defaultName = 'Me';
        let defaultComponent = Me;
        return (
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>;
                }}
            />
        )
    }
}