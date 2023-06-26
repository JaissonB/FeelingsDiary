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
        width: 100,
        height: 100
    },
    textDesc: {
        fontSize: 17,
        color: theme.color_black,
        marginVertical: 10,
        maxWidth: 250,
        textAlign: "center"
    },
    viewChart: { 
        height:300,
        width: 300,
        marginVertical: 25,
        flexDirection: "row"
    },
    textExplain: {
        fontSize: 14,
        textAlign: "center",
    }
});

export default styles;
