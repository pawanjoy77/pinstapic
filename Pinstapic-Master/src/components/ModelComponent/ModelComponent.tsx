import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

import Modal from 'react-native-modal';
import {TextField, CustomButton} from '../../components';
const screenWidth = Dimensions.get('window').width;

// interface AppProps {
//   onPress: () => any;
//   isvisible?: boolean;
//   modeltype?: string;
//   navigation: any;
//   key: any;
//   uid: any;
//   dispatch?: Dispatch;
// }

// interface State {

//   password: any;
//   Re_password: any;
//   isLoading: any;
//   secureTextEntry: any;
//   cPassSecureTextEntry: any;  // hide:any,
// }
interface ModelComponentScreenProps {
  navigation: any;
  route: any;
}

const ModelComponent = ({isVisible, modelType, onPress,onPressMore}) => {
  return (
    <View>
      {modelType == 'center' && (
        <Modal
          testID={'modal'}
          isVisible={isVisible}
          onBackdropPress ={onPressMore}
          //onSwipeComplete={this.props.onPress}
          swipeDirection={['up', 'left', 'right', 'down']}>
          <View style={styles.centerModelContainer}>
            <View>
              <Text style={[styles.welcomeText, styles.textcolor]}>
                Add a cover Photo
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:'4%'
              }}>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  borderRadius: 15,
                  alignItems: 'center',
                  width: '90%',
                  paddingVertical: '1%',
                  borderWidth: 1,
                  borderColor: '#336aca',
                }}>
                <Text style={[styles.welcomeText, styles.textcolor]}>
                  Upload a photo
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={()=>{}}
                style={{
                  borderRadius: 15,
                  alignItems: 'center',
                  paddingVertical: '1%',
                  width: '90%',
                  borderWidth: 1,
                  borderColor: '#336aca',
                }}>
                <Text style={[styles.welcomeText, styles.textcolor]}>
                Select from this Lookbook
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* {this.props.modeltype == 'loginagain' && <Modal
          testID={'modal'}
          isVisible={this.props.isvisible}
       
        >
          <View style={styles.centerModelContainercopy}>
            <View><Text style={styles.modelcontentcopy}>Your Profile is Sent for approval !!{'\n'}Please login again to continue.</Text></View>

            <View style={{
              flexDirection: 'row', justifyContent: 'center',
              alignItems: 'center', marginRight: '10%', marginLeft: '10%', marginTop: '10%'
            }}>

              <TouchableOpacity
                onPress={this.login}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#4B2A6A',
                  borderWidth: 1,
                  borderColor: '#4B2A6A',
                  height: 45,
                  width: '50%',
                  borderRadius: 15,
                  margin: 5,
                }}
                activeOpacity={0.5}>

                <Image source={Images.no_icon} style={{
                  padding: 1,
                  margin: 5,
                  height: 2,
                  width: 2,
                  marginLeft: '10%',
                  tintColor: '#4B2A6A',
                  resizeMode: 'stretch',
                }} />

                <Text style={{
                  color: '#FFFFFF',
                  marginBottom: 4,
                  marginLeft: 30,
                  fontSize: 18

                }}>
                  YES
          </Text>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={this.loginn}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#ED0034',
                  borderWidth: 1,
                  borderColor: '#ED0034',
                  height: 45,
                  width: '50%',
                  borderRadius: 15,
                  margin: 5,
                }}
                activeOpacity={0.5}>

                <Image source={Images.yes_icon} style={{
                  padding: 1,
                  margin: 5,
                  height: 2,
                  width: 2,
                  marginLeft: '10%',
                  tintColor: '#ED0034',
                  resizeMode: 'stretch',
                }} />

                <Text style={{
                  color: '#FFFFFF',
                  marginBottom: 4,
                  marginLeft: 30,
                  fontSize: 18
                }}>
                  NO
          </Text>
              </TouchableOpacity>
            </View>


          
          </View>
        </Modal>} */}

      {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '5%' }}>
              <View>
                <CustomButton title={'Yes'} onPress={this.login} backgroundColor={'green'} />

              </View>

              <View style={{ marginLeft: 10 }}>
                <CustomButton title={'No'} onPress={this.loginnot} backgroundColor={'green'} />

              </View>
            </View> */}

      {/* {this.props.modeltype == 'add_info' && <Modal
          testID={'modal'}
          isVisible={this.props.isvisible}
          onSwipeComplete={this.props.onPress}
          swipeDirection={['up', 'left', 'right', 'down']}
        >
          <View style={styles.centerModelContainer}>
            <View><Text style={styles.welcomeText}>Congratulation!</Text></View>
            <View><Text style={[styles.modelcontent, { marginBottom: '10%' }]}>Your educational institute is on-boarded with ZatchUp.</Text></View>
            <View><Text style={styles.modelcontent}>Congratulation for e-connecting with{'\n'}your educational institute.</Text></View>
            <View >
              <CustomButton title={'OK'} onPress={this.submitEmployeeIdNumber} />
            </View>
          </View>
        </Modal>} */}
      {/* {this.props.modeltype == 'midcenter' && <Modal
          testID={'modal'}
          isVisible={this.props.isvisible}
          onSwipeComplete={this.props.onPress}
          swipeDirection={['up', 'left', 'right', 'down']}
        >
          <View style={styles.centerModelContainer}>

            <View><Text style={[styles.modelcontent]}>“This email ID/Phone number/You is/are registered as Mr. Rohin Gupta, currently studying in ABC School</Text></View>
            <View><Text style={styles.modelcontent}>If this is you, Please login via using,{'\n'}ZatchUp Student/Alumni App.{'\n'} If this is not you press continue to sign up as new user”</Text></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '8%' }}>
              <CustomButton title={'It’s Me'} onPress={this.submitEmployeeIdNumber} backgroundColor={'green'} />
              <CustomButton title={'Not Me'} onPress={this.submitEmployeeIdNumber} backgroundColor={'none'} textColor={'red'} />
            </View>
          </View>
        </Modal>} */}
      {/* 
        {this.props.modeltype == 'RequestAuth_1' && <Modal
          testID={'modal'}
          isVisible={this.props.isvisible}
          onSwipeComplete={this.props.onPress}
          swipeDirection={['up', 'left', 'right', 'down']}
        >
          <View style={styles.centerModelContainer}>
            <View style={[styles.logoContainer, styles.inputmarginBottom]}>
              <Image source={Images.logo} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputmarginBottom}>
                <Text style={[styles.modelcontentAuth]}>Your access request to message and chat with students in B.com 1A is sent for approval.</Text>
              </View>
              <View >
                <CustomButton title={'OK'} onPress={this.submitEmployeeIdNumber} />
              </View>
            </View>
          </View>
        </Modal>} */}

      {/* {this.props.modeltype == 'RequestAuth_2' && <Modal
          testID={'modal'}
          isVisible={this.props.isvisible}
          onSwipeComplete={this.props.onPress}
          swipeDirection={['up', 'left', 'right', 'down']}
        >
          <View style={styles.centerModelContainer}>
            <View style={[styles.logoContainer, styles.inputmarginBottom]}>
              <Image source={Images.logo} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputmarginBottom}>
                <Text style={[styles.modelcontentAuth]}>Your request has been sent.</Text>
              </View>
              <View >
                <CustomButton title={'OK'} onPress={this.submitEmployeeIdNumber} />
              </View>
            </View>
          </View>
        </Modal>} */}
    </View>
  );
};

export default ModelComponent;
