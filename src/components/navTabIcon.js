import React, {Component} from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

export default class navTabIcon extends Component {
    render() {
        const imageSource = [
            {normal: require('./../images/icon_home_nor.png'), selected: require('./../images/icon_home_pre.png')},
            {
                normal: require('./../images/icon_message_nor.png'),
                selected: require('./../images/icon_message_pre.png')
            },
            {normal: require('./../images/icon_find_nor.png'), selected: require('./../images/icon_find_pre.png')},
            {normal: require('./../images/icon_user_nor.png'), selected: require('./../images/icon_user_pre.png')},
        ];

        let imageType = this.props.selected ? 'selected' : 'normal';
        let source = imageSource[this.props.idx][imageType];

        let textStyle = {
            fontSize: 12,
            color: this.props.selected ? '#11A984' : '#333333'
        }

        return (
            <View style={styles.container}>
                <Image source={source} style={styles.image}/>
                <Text style={[textStyle]}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 27,
        height: 27
    }
}