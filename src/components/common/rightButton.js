import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {imageSource} from './../../utils/imageSource';

export function rightButton() {
  let style = {
    marginRight: 15,
    width: 20,
    height: 20
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Image style={style} resizeMode={Image.resizeMode.contain} source={imageSource.icon_fav_empty}/>
      <Image style={[style, {marginRight: 5}]} resizeMode={Image.resizeMode.contain} source={imageSource.icon_share}/>
    </View>
  );
}
