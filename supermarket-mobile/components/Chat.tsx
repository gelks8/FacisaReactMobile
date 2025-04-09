import React, { Fragment, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, TextInput, Touchable, TouchableOpacity, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import styles from '../style/Styles';
import Balloon from './Balloon';

const Chat = ({route}: any) => {
    const content: any = {messages: []}
    const [text, setText] = useState('')
    const [chat, setChat] = useState(content)
    const [userData, setUserData] = useState({name: 'Gerson'})

    useEffect (() => {
        setUserData(userData)
    }, [userData])

    const sendMessage = () => {
        if (text.trim() !== '') {
            const newMessage = {
                text: text,
                sender: userData.name,
                timestamp: new Date().getTime(),
            };
            console.log('newMessage', newMessage);

            setChat((prevChat) => ({ messages: [...prevChat.messages, newMessage] }));
            setText('');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <View style={{ flex: 1 }}>
                <FlatList
                    data={chat.messages}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Balloon message={item} currentUser={userData.name} />
                    )}
                    ListEmptyComponent={
                        <Text style={{ alignSelf: 'center', color: '#848484', marginTop: 20 }}>
                            Sem mensagens
                        </Text>
                    }
                    contentContainerStyle={{ padding: 10 }}
                    inverted
                />
    
                <SafeAreaView>
                    <View style={[styles.messageTextInputContainer, { backgroundColor: '#f0f0f0', borderTopWidth: 1, borderColor: '#ccc' }]}>
                        <TextInput
                            placeholder='Digite sua mensagem...'
                            placeholderTextColor="#666"
                            value={text}
                            multiline
                            onChangeText={(message) => setText(message)}
                            style={{ flex: 1, paddingHorizontal: 10 }}
                        />
                        <TouchableOpacity
                            style={styles.sendButton}
                            disabled={!text.trim()}
                            onPress={sendMessage}
                        >
                            <Text>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>
    );
};
  
export default Chat;