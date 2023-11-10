import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: "#09D261",
        borderRadius: 8,
    },
    registerButton: {
        backgroundColor: "#FCD007",
        borderRadius: 8,
        marginTop: "8%"
    },
    backButton: {
        backgroundColor: "#9BCAE6",
        borderRadius: 8,
    },
    carrinhoButton: {
        backgroundColor: "#09D261",
        borderRadius: 8,
        marginLeft: "3%"
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
    loginInput: {
        color: "#202C33",
        backgroundColor: "#757575",
        width: "70%",
        marginBottom: "8%",
        borderWidth: 1,
        borderRadius: 3
    }
});

export default styles