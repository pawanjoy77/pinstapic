import { Dimensions, StatusBar, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c8dd6',
    paddingTop: StatusBar.currentHeight + 50,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,

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
    backgroundColor: '#97b4e6',

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
  recentlookbookContainer:
  {
    flex: 1,
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
    borderTopWidth: 1,
    borderColor: '#FFF',
    width: '100%',
    marginVertical: '10%',
    alignItems: 'center'

  },
  legend: {
    position: 'absolute',
    top: -11,
    fontFamily: 'Montserrat-Light',
    backgroundColor: '#0c8dd6',
    color: '#FFF',
    fontSize:15,
    fontWeight:'500'


  },
});
export default styles;