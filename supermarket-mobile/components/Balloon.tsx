import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    bubbleWrapper: {
        flexDirection: 'row',
        marginVertical: 6,
        paddingHorizontal: 10,
    },
    bubbleWrapperSent: {
        justifyContent: 'flex-end',
    },
    bubbleWrapperReceived: {
        justifyContent: 'flex-start',
    },
    balloon: {
        padding: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    balloonSent: {
        backgroundColor: '#DCF8C6',
    },
    balloonReceived: {
        backgroundColor: '#ECECEC',
    },
    balloonText: {
        fontSize: 16,
    },
    balloonTextSent: {
        color: '#000',
    },
    balloonTextReceived: {
        color: '#000',
    },
    senderLabel: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
        alignSelf: 'flex-start'
    }
});

const Balloon = ({ message, currentUser }: any) => {
    const isSentByUser = currentUser === message.sender;

    const bubbleAlignment = isSentByUser ? styles.bubbleWrapperSent : styles.bubbleWrapperReceived;
    const bubbleColor = isSentByUser ? styles.balloonSent : styles.balloonReceived;
    const textColor = isSentByUser ? styles.balloonTextSent : styles.balloonTextReceived;

    if (!message || !message.sender) return null;

    return (
        <View style={[styles.bubbleWrapper, bubbleAlignment]}>
            <View style={[styles.balloon, bubbleColor]}>
                {!isSentByUser && (
                    <Text style={styles.senderLabel}>
                        {message.sender}
                    </Text>
                )}
                <Text style={[styles.balloonText, textColor]}>
                    {message.text}
                </Text>
            </View>
        </View>
    );
};

export default Balloon;