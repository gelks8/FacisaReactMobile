import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerButton: {
        backgroundColor: "#FCD007",
        borderRadius: 8,
        marginTop: "8%"
    },
    text: {
        fontSize: 28,
        color: "#202C33",
        textAlign: "center",
        marginBottom: "21%"
    },
    textTitle: {
        fontSize: 28,
        color: "#202C33",
        textAlign: "center",
        marginBottom: "13%"
    },
    //Login Page
    viewRegisterForgot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: "5%"
    },
    registerForgotLink: {
        flex: 1,
        textAlign: 'center',
        color: '#06B6D4',
    },
    labelInput: {
        marginBottom: "5%",
        textAlign: "left"
    },
    loginInput: {
        backgroundColor: "#FFFFFF",
        width: "70%",
        marginBottom: "8%",
        marginTop: "3%",
        borderWidth: 1,
        borderRadius: 3,
        padding: 4
    },
    loginButton: {
        backgroundColor: "#09D261",
        borderRadius: 8,
    },

    //Shopping Cart
    containerShoppingCart: {
        padding: 16,
    },
    cardContainer: {
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 18,
    },
    footer: {
        marginTop: 16,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        marginBottom: 8,
    },
    checkoutButton: {
        backgroundColor: 'green',
    },

    //Chat
    fab: {
        position: "absolute",
        bottom: 30,
        right: 30,
    },
    messageTextInputContainer: {
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        flexDirection: 'row',
    },
    sendButton: {
        backgroundColor: '#0a66c2',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        marginLeft: 8,
    }
});

export default styles