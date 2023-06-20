import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	safe: {
		height: "100%",
		paddingHorizontal: 10,
	},


	itemList: {
		flexDirection: "row",
		//justifyContent: "space-between",
		//borderColor: "#EE41AA",
		//padding: 25,
		//margin: 2,
		//borderRadius: 10,
		borderBottomWidth: 1,
	},
	RigthItem: {
		//backgroundColor: 'red',
		width: "20%", 
		marginVertical: 10,
		alignItems: 'center',
	},
	
	labelDate: {
		color: '#1E1E1E',
		fontFamily: 'Inter-Bold',
		fontSize: 14,
    
	},
	
	leftItem:{
		justifyContent: 'center',
		backgroundColor: "red",
		alignItems: 'flex-end',
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
