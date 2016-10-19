import React, { Component } from 'react'
import { Text, View, Platform, Dimensions } from 'react-native'

export function rightButton() {
	return (
		<View style={{flexDirection: 'row'}}>
			<Text style={{marginRight: 10}}>收藏</Text>
			<Text>分享</Text>
		</View>
	);
}
