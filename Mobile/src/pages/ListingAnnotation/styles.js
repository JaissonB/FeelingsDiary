import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	safe: {
		height: "100%",
		paddingHorizontal: 10,
	},


	itemList: {
		flexDirection: "row",
		borderBottomWidth: 1,
	},
	RigthItem: {
		width: "20%",
		marginVertical: 10,
		alignItems: 'center',
	},

	labelDate: {
		color: '#1E1E1E',
		fontFamily: 'Inter-Bold',
		fontSize: 14,
	},
	leftItem: {
		marginHorizontal: 8,
		justifyContent: 'center',
	},
	labelTitle: {
		color: '#1E1E1E',
		fontFamily: 'Inter-Bold',
		fontSize: 14,
	},
	labelAnotation: {
		color: '#1E1E1E',
		fontSize: 14,
	},

});

export default styles;
