import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	safe: {
		height: "100%",
		paddingHorizontal: 20,
		justifyContent: 'space-between',
	},
	ViewText: {
		// Componentes de texto
	},
	componentNavigation: {
		marginTop: 15,
		marginBottom: 30,
		paddingHorizontal: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	arrow: {
		width: 30,
		height: 30,
	},
	textData: {
		color: theme.color_dark5,
		fontFamily: 'Inter-Bold',
		fontSize: 20,
	},
	textlabelField: {
		color: theme.color_dark5,
		fontFamily: 'Inter-Bold',
		fontSize: 20,
		paddingBottom: 3,
		borderBottomWidth: 1,
	},
	inputText: {
		marginBottom: "10%",
		fontSize: 20
	},
	containerMicButton: {
		width: "100%",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		position: "absolute",
		bottom: 150,
		right: 0,
		left: 20
	},
	micButton: {
		backgroundColor: theme.color_primary10,
		width: 85,
		height: 85,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center"
	},
	micImage: {
		width: 60,
		height: 60
	},
	textRecording: {
		color: "red"
	},
	viewButtons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 80,
	},
	button: {
		width: '40%',
		borderRadius: 10,
		borderColor: theme.color_dark5,
		borderWidth: 1,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: theme.color_dark5,
		fontSize: 18,
		fontFamily: 'Inter-Bold',
	},
	buttonSave: {
		width: '40%',
		borderRadius: 10,
		backgroundColor: theme.color_primary1,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonTextSave: {
		color: theme.color_white,
		fontSize: 18,
		fontFamily: 'Inter-Bold',
	},
});

export default styles;
