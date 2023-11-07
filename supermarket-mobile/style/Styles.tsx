import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B141A',
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
        color: "#FFF",
        textAlign: "center",
        marginBottom: "21%"
    },
    textFormTitle: {
        fontSize: 28,
        color: "#FFF",
        textAlign: "center",
        marginBottom: "21%"
    },
    loginInput: {
        color: "#FFF",
        backgroundColor: "#232428",
        width: "70%",
        marginBottom: "8%",
        borderWidth: 1,
        borderColor: "#E9EFF3",
        borderRadius: 3
    }
});

export default styles