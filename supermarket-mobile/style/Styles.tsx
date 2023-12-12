import { StyleSheet } from 'react-native';

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
    }
});

export default styles