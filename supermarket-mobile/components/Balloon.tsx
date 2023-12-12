import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
    bubbleWrapper: {
        flexDirection: 'column',
    },
    bubbleWrapperSent: {
        alignSelf: 'flex-start',
        marginLeft: 40,
    },
    bubbleWrapperReceived: {
        alignSelf: 'flex-end',
        marginRight: 40,
    },
    balloon: {
        padding: 8,
        borderRadius: 5,
    },
    balloonSent: {
        backgroundColor: Colors.black,
    },
    balloonReceived: {
        backgroundColor: Colors.primary,
    },
    balloonText: {
        fontSize: 18,
    },
    balloonTextSent: {
        color: Colors.white,
    },
    balloonTextReceived: {
        color: Colors.black,
    },
})

const Balloon = ({message, currentUser}: any) => {
    const sent = currentUser === message.sender;
    const ballonColor = sent ? styles.balloonSent : styles.balloonReceived;
    const ballonTextColor = sent ? styles.balloonTextSent : styles.balloonTextReceived;
    const bubbleWrapper = sent ? styles.bubbleWrapperSent : styles.bubbleWrapperReceived;

    if (message && message.sender) {
        return (
            <View style={{marginBottom: '2%'}}>
                <View style={{...styles.bubbleWrapper, ...bubbleWrapper}}>
                    <View style={{...styles.balloon, ...ballonColor}}>
                        <Text style={{alignSelf: 'center', color: '#848484'}}>
                            {message.sender}
                        </Text>
                        <Text style={{...styles.balloonText, ...ballonTextColor}}>
                            {message.text}
                        </Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return <></>
    }
    
}

export default Balloon