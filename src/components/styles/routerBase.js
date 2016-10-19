// 全局场景标题样式
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
export const getNavigationStyle = {
  title: {
    color: '#333333',
    fontSize: 17,
    fontWeight: 'normal',
  },
};

export const backButtonImage = require("./../../images/icon_back.png");