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
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderColor: 'transparent',
        borderTopColor: 'blue',
        alignItems: 'center',
        flexDirection: 'row'

    },
    sendButton: {
        backgroundColor: Colors.primary,
        color: Colors.white,
        height: 40,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 5,
    }
});

export default styles