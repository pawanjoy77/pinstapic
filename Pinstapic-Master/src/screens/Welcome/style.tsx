import { StyleSheet, Text, View ,SafeAreaView,Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: "center", backgroundColor: '#0c8dd6'
    },
    mainview:{
        flex: 0.7,
      },
      carouselItem:{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      },
      carouselText:{ textTransform: "uppercase", color: "white",fontSize: hp(5.0),fontWeight:'bold' },
      absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
  
  })
  export default styles;