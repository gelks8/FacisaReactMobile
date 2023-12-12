import React, { Fragment, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
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
        <Fragment>
            <ScrollView>
                {
                chat.messages.length > 0 ? 
                    chat.messages.map((m: any, index: any) => (
                        <Balloon key={index} message={m} currentUser={userData.name}/>
                    )) :
                    <Text style={{ alignSelf: 'center', color: '#848484' }}>
                        Sem mensagens
                    </Text>
                }
            </ScrollView>
            <SafeAreaView>
                    <View style={styles.messageTextInputContainer}>
                        <TextInput
                            placeholder='Digite sua mensagem...'
                            placeholderTextColor={Colors.light}
                            value={text}
                            multiline
                            onChangeText={(message) => setText(message)}
                        >

                        </TextInput>
                        <TouchableOpacity
                            style={styles.sendButton}
                            disabled={!text}
                            onPress={() => sendMessage()}
                        >
                            <Text>Enviar</Text>
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        </Fragment>
    );
};
  
export default Chat;