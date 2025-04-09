import React, { Fragment, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, TextInput, TouchableOpacity, View, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import styles from '../style/Styles';
import Balloon from './Balloon';
import AiService from '../services/AiService'; 

interface Message {
    text: string;
    sender: string;
    timestamp: number;
}

interface ChatContent {
    messages: Message[];
}

interface ChatProps {
    navigation: any;
    userEmail: string;
}

const Chat = ({ navigation, userEmail }: ChatProps) => {
    const [text, setText] = useState('');
    const [chat, setChat] = useState<ChatContent>({ messages: [] });
    const [userData, setUserData] = useState({ name: 'Gerson' });

    useEffect(() => {
        setUserData(userData)
    }, [userData]);

    const sendMessage = async () => {
        if (text.trim() === '') return;
    
        const userMessage: Message = {
            text: text.trim(),
            sender: userData.name,
            timestamp: Date.now(),
        };
    
        setChat((prevChat) => ({
            messages: [...prevChat.messages, userMessage],
        }));
    
        setText('');
    
        try {
            const aiReplyText = await AiService.prompt(userMessage.text);
    
            const aiMessage: Message = {
                text: aiReplyText,
                sender: 'IA Gemini',
                timestamp: Date.now(),
            };
    
            setChat((prevChat) => ({
                messages: [...prevChat.messages, aiMessage],
            }));
        } catch (error) {
            console.error('Erro ao chamar IA:', error);
            const errorMessage: Message = {
                text: 'Desculpe, ocorreu um erro ao responder.',
                sender: 'IA Gemini',
                timestamp: Date.now(),
            };
    
            setChat((prevChat) => ({
                messages: [...prevChat.messages, errorMessage],
            }));
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
                    data={[...chat.messages].reverse()}
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
                            placeholderTextColor="#888"
                            value={text}
                            multiline
                            onChangeText={setText}
                            style={{
                                flex: 1,
                                paddingHorizontal: 12,
                                paddingVertical: 8,
                                backgroundColor: '#fff',
                                borderRadius: 20,
                                borderWidth: 1,
                                borderColor: '#ddd',
                                fontSize: 16,
                                maxHeight: 100,
                            }}
                        />
                        <TouchableOpacity
                            style={styles.sendButton}
                            disabled={!text.trim()}
                            onPress={sendMessage}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Chat;
