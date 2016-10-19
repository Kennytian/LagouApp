import {ActionConst, Reducer} from 'react-native-router-flux';

export const reducerCreate = params => {
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