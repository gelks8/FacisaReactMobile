import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

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
        padding: 12,
        borderRadius: 16,
        maxWidth: '75%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    balloonSent: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
    },
    balloonReceived: {
        backgroundColor: '#F0F0F0',
        alignSelf: 'flex-start',
    },
    balloonText: {
        fontSize: 16,
        color: '#333',
    },
    senderLabel: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
    },
    timestampText: {
        fontSize: 10,
        color: '#999',
        marginTop: 6,
        alignSelf: 'flex-end',
    },
});

const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

const Balloon = ({ message, currentUser }: any) => {
    const isSentByUser = currentUser === message.sender;

    const bubbleAlignment = isSentByUser ? styles.bubbleWrapperSent : styles.bubbleWrapperReceived;
    const bubbleColor = isSentByUser ? styles.balloonSent : styles.balloonReceived;

    if (!message || !message.sender) return null;

    return (
        <View style={[styles.bubbleWrapper, bubbleAlignment]}>
            <View style={[styles.balloon, bubbleColor]}>
                {!isSentByUser && (
                    <Text style={styles.senderLabel}>
                        {message.sender === 'Gemini' ? 'IA Gemini' : message.sender}
                    </Text>
                )}
                <Text style={styles.balloonText}>
                    {message.text}
                </Text>
                <Text style={styles.timestampText}>
                    {formatTimestamp(message.timestamp)}
                </Text>
            </View>
        </View>
    );
};

export default Balloon;
