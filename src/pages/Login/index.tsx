import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>TESTE TOTAL WHITE CLEAN</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        color: theme.color_white,
        backgroundColor: theme.color_dark,
    }
});

export default Login;