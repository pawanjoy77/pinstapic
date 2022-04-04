import React, { useRef, useState, useEffect, useCallback } from "react"
import { Text, View, ImageBackground, Image, Platform, AppState, KeyboardAvoidingView, ScrollView, Pressable, TouchableWithoutFeedback,DeviceEventEmitter,
  Dimensions, 
  Alert,
  Keyboard} from 'react-native'
import navigationStrings from '../../constants/navigationStrings';
import { SafeAreaView } from "react-native-safe-area-context";

import styles from './style'
import { Images, CustomButton, TextField,Validate,ProgressLoader,DropDown} from "../../components";
import debounce from "lodash/fp/debounce"
import { CheckBox, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import Services from "../../Services/Services";
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
let userTypes = [
  {
    label: 'Pinstore',
    value: 'Pinstore',
  },
  {
    label: 'Pinstylist',
    value: 'Pinstylist',
  },
  {
    label: 'Pinstapic',
    value: 'Pinstapic',
  },
 
];
const SignUp = ({ navigation }) => {
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)
  const [activeBlur, setActiveBlur] = useState(false);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [selectuserType, setUserType] = useState('')
  const [termCheck, setTermCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -50
  const onPressSignup = async () => {
    
    const nameError = Validate('name', name);
    const phoneError = Validate('phone', phone);
    const emailError = Validate('email', email);
    // const emailError = Validate('email', Email);
    const passwordError = Validate('password', pass);
    const userType = Validate('userType', selectuserType);
    const termError = Validate('termCheck', termCheck);
    
    
   

    if (
      nameError ||
      phoneError ||
      emailError ||
      passwordError ||
      userType||
      termError 
     
    ) {
      Services.showToast(nameError || phoneError ||   emailError ||  passwordError ||  termError || userType);

      return false;
    }else if(phone){
      setLoading(true);
      let isExist = await Services.isUniquePhone(phone);
      //Services.showLog(isExist);
      
      if(isExist){
        Services.showToast('Mobile number already exists.');
        return false;
      }else{
        setLoading(false);
        var d = {name:name,phone:phone,email:email,pass:pass,userType:userType};
        Services.showLog(d )
        setLoading(true);
        auth()
              .createUserWithEmailAndPassword(email, pass)
              .then(() => {
                Services.showLog('User account created & signed in!');
                  let curUser = auth().currentUser;
                  setLoading(false);
                  firestore().collection('users').doc(curUser.uid).set({
                      email: curUser.email,
                      name: name,
                      phone: phone,
                      userType:selectuserType
                  }).then(() => {
                    Services.showLog('User updated!');
                      
                  });
              })
              .catch(error => {
                setLoading(false);
                  if (error.code === 'auth/email-already-in-use') {
                    Services.showToast('Email address is already exist.');
                     
                      //console.log('That email address is already in use!');
                  }
                  if (error.code === 'auth/invalid-email') {
                    Services.showToast('Please enter a valid email address.');
                     
                      //console.log('That email address is invalid!');
                  }
  
              });
      }
    }
    
  }

  return (
    <ImageBackground source={Images.backgroundImg}  blurRadius={11} style={styles.ImageBackground}>
    <View style={styles.container}>
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
      
    <ScrollView>
    <ProgressLoader isLoading={isLoading} />
            <View style={styles.signupContainer}>

              <Text style={[styles.signuptext, styles.textColor,{ marginVertical: '10%' }]}><Text style={[{ textDecorationLine: 'underline',fontFamily:'Montserrat-SemiBold' }]}>Sig</Text><Text>n up</Text></Text>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginVertical: '8%' }}>
                <Image
                  source={Images.logo}
                  style={{ width: 100, height: 100 }}
                />
              </View>
              <View style={{ marginHorizontal: '8%' }}>
              <View style={{ flex: 1,flexDirection: 'row',alignItems:'center', marginVertical:'4%', }}>
                <View style={{  marginRight: "3%" }}>
                  <Image source={Images.smile}  style={{ width: 45, height: 45 }}/>
                  </View>
                  <View><Text style={[styles.signuptext1,styles.textColor,{fontFamily:'Montserrat-Medium'}]}>Welcome User !</Text>
                  <Text style={[styles.continueText,styles.textColor,{fontFamily:'Montserrat-Regular'}]}>Please Sign up to Continue</Text>
                  </View>
                </View>
                <View style={[styles.inputmarginBottom]}>
                  <TextField placeholder={'Name'} onChangeText={(val: any) => setName(val)} value={name} />
                </View>
                <View style={[styles.inputmarginBottom]}>
                  <TextField placeholder={'Mobile Number'} onChangeText={(val: any) => setPhone(val)} value={phone} />
                </View>
                <View style={[styles.inputmarginBottom]}>
                  <TextField placeholder={'Email ID'} onChangeText={(val: any) => setEmail(val)} value={email} />
                </View>
                <View style={[styles.inputmarginBottom]}>
                  <TextField placeholder={'Create Password'} secureTextEntry={true} onChangeText={(val: any) => setPass(val)} value={pass} />
                </View>
                <View style={[styles.inputmarginBottom]}>
                <View style={{  borderBottomWidth:.5,  borderBottomColor: '#FFF',  padding:0}}>
	    <RNPickerSelect
            onValueChange={(val,i)=>{setUserType(val)}}
            useNativeAndroidPickerStyle={false}
            value={selectuserType}
            placeholder={{
                label: 'User Type',
                value: null,
                color: '#FFF',
              }}
            items={userTypes}
            itemKey={Math.random().toString(12).substring(0)}
           
            Icon={() => {
              return <Ionicons name="chevron-down" size={24} color="white" />;
            }}
            style={{
              inputIOS: {
                fontSize: 16,
                paddingVertical: 10,
                paddingHorizontal: 10,
                color: '#FFF',
                paddingRight: 5, // to ensure the text is never behind the icon
                fontFamily:'Montserrat-Light',
              },
              inputAndroid: {
                paddingLeft: 5,
                paddingVertical:10,
                color: '#FFF',
                fontFamily:'Montserrat-Light',
                
              },
                iconContainer: {
                  top: 10,
                  right: 12,
                },
                placeholder:{
                  fontFamily: 'Montserrat-Light',
                  color: '#FFF',
                }
              }}
        />
       </View>
                </View>
                <View style={{ marginVertical: '5%' }}>
                  <CheckBox
                    Component={TouchableWithoutFeedback}
                    title={<Text><Text style={[styles.textColor,{fontFamily:'Montserrat-Light'}]} > I Agree </Text><Text style={{color:'#10aaff',fontFamily:'Montserrat-Medium'}}>Accept T & C,Privacy Policy</Text></Text>}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={termCheck}
                    onPress={() => setTermCheck(!termCheck)}
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                  />

                </View>
                <View style={[styles.inputmarginBottom]}>
                  <CustomButton title="SIGNUP" onPress={onPressSignup} />

                </View>
                <View style={{ marginVertical: '5%', alignItems: 'center' }}>
                  <Pressable onPress={() => {navigation.navigate(navigationStrings.LOGIN)}}>
                    <Text style={[styles.textColor,{fontFamily:'Montserrat-Light'}]}>Already have an Account? <Text style={{fontFamily:'Montserrat-Bold'}}> Login</Text></Text>
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

export default SignUp

