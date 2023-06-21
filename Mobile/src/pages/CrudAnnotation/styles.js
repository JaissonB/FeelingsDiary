import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	safe: {
		height: "100%",
		paddingHorizontal: 20,
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
});

export default styles;
