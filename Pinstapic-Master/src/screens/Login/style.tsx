import { StyleSheet, Text, View ,SafeAreaView,Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba( 0, 0, 0, 0.4 )',
    color:'#FFF'
  },
    absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    firstnameContainer: {
      flexDirection: 'row',
      marginBottom: '1%',
  },
  inputmarginBottom:{
    marginBottom:'2%',
  },
  signupContainer:{
    padding: '5%'
  } ,
  signuptext:{
    fontSize:hp(2.5),  
    lineHeight:19
  },
  signuptext1:{
    fontSize:hp(2.5),  
    lineHeight:20
  },
  textColor:{
    color:'#FFF'
  },
  continueText:{
    fontSize:hp(2.0),
  }
  
  })
  export default styles;