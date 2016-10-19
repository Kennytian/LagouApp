import {Platform, StyleSheet} from 'react-native';

// 全局页面默认样式
export const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#FFF',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

// 全局导航标题样式
export const NavigationStyle = {
  title: {
    color: '#333',
    fontSize: 17,
    fontWeight: 'normal',
  },
  view: {
    borderBottomWidth: 0.1,
    backgroundColor: "#FFF",
    ...Platform.select({
      ios: {},
      android: {}
    }),
    opacity:0.95,
  },
};

// 全局页面底部导航
export const tabBarStyle = {
  borderTopWidth: StyleSheet.hairlineWidth,
  borderColor: '#E1E1E1',
}

export const backButtonImage = require("./../../images/icon_back.png");