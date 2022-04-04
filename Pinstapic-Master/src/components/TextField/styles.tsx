import {Platform, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ScaledSheet} from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Math.round(Dimensions.get('window').height);
//import {Font} from '../index';
import {Images, Colors, TextField, Font, CustomButton} from '../../components';

export default ScaledSheet.create({
  inputContainer: {
    borderBottomWidth:.5,
    borderBottomColor: '#FFF',  
  },
  flexdirection: {
    flexDirection: 'row',
  },
  textboxwidth: {
    width: '100%',
  },
  textboxfieldd: {
    fontFamily: 'Montserrat-Light',
    height: 50,
    width: '100%',
    paddingLeft: '2%',
    color: '#FFF',
    
  },
  textAreaCss: {
    fontFamily: 'Montserrat-Medium',
    height: 100,
    width: '100%',
    fontWeight: 'normal',
    fontSize: hp(2.3),
    paddingLeft: '2%',
    textAlignVertical: 'top',
  },
  imageiconConatiner: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'center',
    width: '17%',
    marginRight: '3%',
  },
  imageicon: {
    width: Dimensions.get('window').width * 0.06,
    height: Dimensions.get('window').width * 0.06,
    resizeMode: 'contain',
    //tintColor:'#ACAEAB'
  },
});
