import { Dimensions, Platform, StatusBar, StyleSheet, useWindowDimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c8dd6',
    paddingTop: StatusBar.currentHeight + 55,
  },
  scrollView: {
    marginHorizontal: 20,

  },
  cameraContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    backgroundColor: '#96b4e6',

  },
  lookbookContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    marginHorizontal: 20, marginBottom: 20


  },
  cameraIcon: {
    resizeMode: 'cover',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    backgroundColor: 'rgba(255,0,0,0.5)'
  },
  fieldSet: {
    margin: 30,
    paddingHorizontal: 10,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'normal',
    backgroundColor: '#0c8dd6',
    fontFamily: 'Montserrat-Medium',
    color: '#fbfffd',
    fontSize: 16,
  },
  textboxfieldd: {
    fontFamily: 'Montserrat-Light',
    height: 50,
    width: '100%',
    paddingLeft: '2%',
    color: '#FFF',

  },
  bottombtn: {
    borderTopWidth: 2,
     flexDirection: 'row', 
     borderTopColor: '#5e98e3',
      justifyContent: 'center', 
      paddingTop:'2%',
     
  }
});
export default styles;