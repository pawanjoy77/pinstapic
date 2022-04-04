import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
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
    
  },

  absolute: {
    flex: 1,
    resizeMode: 'cover',
    height:'100%'
  },
  firstnameContainer: {
    flexDirection: 'row',
    marginBottom: '1%',
  },
  inputmarginBottom: {
    marginBottom: '2%',
  },
  signupContainer: {
    padding: '5%',
    
  },
  signuptext:{
    fontSize:hp(2.4),  
    lineHeight:19
  },
  signuptext1:{
    fontSize:hp(2.4),  
    lineHeight:19
  },
  textColor:{
    color:'#FFF'
  },
  continueText:{
    fontSize:17,
  }

})
export default styles;