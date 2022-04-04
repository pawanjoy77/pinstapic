import { Platform, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { Images, Colors, TextField, Font, CustomButton } from '../../components';

export default ScaledSheet.create({
	conatiner: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '2%',
		width:'100%'

	},
	buttonContainer: {
		backgroundColor: '#e2783c',
		borderRadius: 25,
		justifyContent: 'center',
		width: '100%',
		padding: '3%'

	},
	bg: {
		backgroundColor: 'rgb(63,168,63)',
		padding: '3%',


	},
	border: {
		backgroundColor: 'transparent',
		padding: '2.5%',
		borderWidth: 1,
		borderColor: '#FFF',


	},
	textcolor: {
		color: 'rgb(221,54,54)'
	},
	buttonTitle: {
		fontFamily: 'Montserrat-Bold',
		color: '#FFF',
		textAlign: 'center',
		fontSize: hp(2.3),


	}
});