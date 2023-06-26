import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	safe: {
		height: "100%",
		paddingHorizontal: 10,
		paddingVertical: 20,
        alignItems: "center",
	},
    textDate: {
        fontSize: 24,
        color: theme.color_black,
        fontWeight: "bold",
        marginBottom: 10
    },
    textTitle: {
        fontSize: 20,
        color: theme.color_black,
        fontWeight: "bold",
        marginBottom: 10
    },
    emoji: {
        width: 200,
        height: 200
    },
    textDesc: {
        fontSize: 17,
        color: theme.color_black,
        marginVertical: 10,
        maxWidth: 250,
        textAlign: "center"
    }
});

export default styles;
