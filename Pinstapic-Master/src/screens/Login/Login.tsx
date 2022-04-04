import React, { useRef, useState, useEffect, useCallback } from "react"
import { Text, View, ImageBackground, Image, Platform, AppState, KeyboardAvoidingView, ScrollView, Pressable, TouchableWithoutFeedback, Alert } from 'react-native'
import navigationStrings from '../../constants/navigationStrings';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './style'
import { Images, CustomButton, TextField,Validate,ProgressLoader } from "../../components";
import debounce from "lodash/fp/debounce"
import { CheckBox, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Services from "../../Services/Services";

const Login = ({navigation}) => {
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)
  const [activeBlur, setActiveBlur] = useState(false);
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [remember, setRememberCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -60

useEffect(() => {
  checkRemember();
}, []);


  const onPressSignup = () => {
    ;
     const emailError = Validate('email', email);
     const passwordError = Validate('login_password', pass);
     
     if (
       emailError ||
       passwordError 
       
     ) {
       Services.showToast( emailError ||passwordError );
 
       return false;
     }else{
       var d = {email:email,pass:pass};
       Services.showLog(d );
       setLoading(true);
       auth()
    .signInWithEmailAndPassword(email, pass)
    .then((credential) => {
      setLoading(false);
      Services.showLog('User signed in!');
        AsyncStorage.setItem('islogged', 'true');
        AsyncStorage.setItem('email', '');
        AsyncStorage.setItem('pass', '');
        AsyncStorage.setItem('remember', 'false');
        if(remember){
          AsyncStorage.setItem('email', email);
          AsyncStorage.setItem('pass', pass);
          AsyncStorage.setItem('remember', 'true');
        }
       
    })
    .catch(error => {

      setLoading(false);
        //console.error(JSON.stringify(error));
        Services.showToast("Incorrect Username or Password!" );
    });
     }
   }

   const checkRemember= async ()=>{
     let email = await AsyncStorage.getItem('email');
     let pass = await AsyncStorage.getItem('pass');
     let remember = JSON.parse(await AsyncStorage.getItem('remember'));
     setEmail(email);
     setPass(pass);
     setRememberCheck(remember);
   }
  return (
    <ImageBackground source={Images.backgroundImg}  blurRadius={11} style={styles.ImageBackground}>
    <View style={styles.container}>
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
    <ScrollView>
    <ProgressLoader isLoading={isLoading} />
            <View style={styles.signupContainer}>

              <Text style={[styles.signuptext,styles.textColor, { marginVertical: '12%' }]}><Text style={[{ textDecorationLine: 'underline',fontFamily:'Montserrat-SemiBold' }]}>Log</Text><Text>in</Text></Text>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginVertical: '8%' }}>
                <Image
                  source={Images.logo}
                  style={{ width: 100, height: 100 }}
                />
              </View>
              <View style={{ marginHorizontal: '8%' }}>
              <View style={{ flex: 1,flexDirection: 'row',alignItems:'center', marginVertical:'5%', }}>
                <View style={{  marginRight: "3%" }}>
                <Image
                  source={Images.smile}
                  style={{ width: 45, height: 45 }}
                />
                </View>
               <View>
               <Text style={[styles.signuptext1,styles.textColor,{fontFamily:'Montserrat-Medium'}]}>Hi Good Day ! </Text>
                <Text style={[styles.continueText,styles.textColor,{fontFamily:'Montserrat-Regular'}]}>Please Login to Continue</Text>
               </View>
              </View>
             
              
              <View style={[styles.inputmarginBottom,]}>
                <TextField placeholder={'Email ID'} onChangeText={(val: any) => setEmail(val)} value={email} />
              </View>
              <View style={[styles.inputmarginBottom]}>
                <TextField placeholder={'Password'} secureTextEntry={true} onChangeText={(val: any) => setPass(val)} value={pass} />
              </View>
              <View style={{ marginVertical: '5%',flexDirection:'row',justifyContent:'space-between' }}>
                <CheckBox
                  Component={TouchableWithoutFeedback}
                  title={<Text style={[styles.textColor,{fontFamily:'Montserrat-Light'}]}>Remember Me </Text>}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={remember}
                  onPress={() => setRememberCheck(!remember)}
                  containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                />
                 <Pressable onPress={() => {}}>
                  <Text style={[styles.textColor,{fontFamily:'Montserrat-Light'}]}>Forgot Password?</Text>
                </Pressable>
              </View>
              <View style={[styles.inputmarginBottom]}>
                <CustomButton title="LOGIN" onPress={onPressSignup} />

              </View>
              <View style={{ marginVertical: '5%', alignItems: 'center' }}>
                <Pressable onPress={() => {navigation.navigate(navigationStrings.SIGNUP)}}>
                  <Text style={[styles.textColor,{fontFamily:'Montserrat-Light'}]}>Don't have an Account? <Text style={{fontFamily:'Montserrat-Bold'}}> Signup</Text></Text>
                </Pressable>
              </View>
            </View>
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
    </View>
</ImageBackground>
  )
}

export default Login

