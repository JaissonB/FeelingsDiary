import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	safe: {
		height: "100%",
		paddingHorizontal: 20,
		justifyContent: 'space-between',
	},
	ViewText: {
		// Componentes de texto
	},
	componenteNavegacao: {
		marginTop: 15,
		marginBottom: 30,
		paddingHorizontal: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	arrow: {
		width: 30,
		height: 30,
	},
	textData: {
		color: '#1E1E1E',
		fontFamily: 'Inter-Bold',
		fontSize: 20,
	},
	textlabelField: {
		color: '#1E1E1E',
		fontFamily: 'Inter-Bold',
		fontSize: 15,
		paddingBottom: 3,
		borderBottomWidth: 1,
	},
	inputTitle: {
		marginBottom: "10%",
	},

	viewButtons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 80,
	},
	button: {
		width: '40%',
		borderRadius: 10,
		borderColor: '#1E1E1E',
		borderWidth: 1,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#1E1E1E',
		fontSize: 18,
		fontFamily: 'Inter-Bold',
	},
});

export default styles;
