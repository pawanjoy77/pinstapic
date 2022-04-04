import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import navigationStrings from '../../constants/navigationStrings';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../components';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
const DrawerContent = props => {
  const {navigation} = props;
  const {uid} = auth().currentUser;
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('users')
        .doc(uid)
        .get();

      const userData = documentSnapshot.data();
      // console.log('uid',userData);
      setUser(userData);
    } catch {
      //do whatever
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  async function signOut() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  return (
    <>
    <SafeAreaView style={{ flex: 0.2, backgroundColor: '#192b3f' ,borderTopRightRadius: 50,}} >
    <View
        style={{
          flexDirection: 'row',
          
        }}>
        <View
          style={{
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Images.profileIcon} style={styles.image} />
        </View>
        <View
          style={{
            width: '54%',
            alignItems: 'flex-start',
            paddingEnd: '2%',
          }}>
          <Text style={{fontSize: 17, fontFamily:'Montserrat-Bold',color:'#fff'}}>
            {user && user?.name}
          </Text>
          <Text style={{fontSize: 15, fontFamily:'Montserrat-Medium',color:'#99b4cf'}}>
            New York City,USA
          </Text>
          <Text style={{fontSize: 12, fontFamily:'Montserrat-Light',marginVertical: 5,color:'#99b4cf'}}>
            Lorem ipsum, or lipsum as it is sometimes known
          </Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{alignContent: 'center', marginRight: 15 ,color:'#99b4cf'}}>
              <Icon name="star" style={{color: 'orange'}} size={12} /> 485
            </Text>
            <Text style={{alignContent: 'center', marginRight: 15 ,color:'#99b4cf'}}>
            <FontAwesome
                name="user-friends"
                style={{color: 'white'}}
                size={12}
              />  264
            </Text>
          </View>
         </View>
      </View>
    </SafeAreaView>
<SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 0.8, backgroundColor: '#FFF' ,borderBottomRightRadius: 50,paddingTop: 0,}}>
<DrawerContentScrollView {...props}  contentContainerStyle={{marginTop: 0, paddingTop: 0}}>
        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            navigation.navigate('DrawerStacks', { screen: navigationStrings.MYLOOKBOOKS })
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
              {/* <FontAwesome name="user-circle" size={20} style={styles.text} /> */}
              <Image source={Images.mylookbook} />
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.text}>My Lookbooks</Text>
            </View>

            <View style={{width: '10%'}}>
              <Icon name="chevron-forward" size={20} style={styles.text} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            console.log('ddd');
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
            <Image source={Images.followers} />
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.text}> Followers</Text>
            </View>

            <View style={{width: '10%'}}>
              <Icon name="chevron-forward" size={20} style={styles.text} />
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            console.log('ddd');
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
            <Image source={Images.favourites} />
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.text}> Favourites</Text>
            </View>

            <View style={{width: '10%'}}>
              <Icon name="chevron-forward" size={20} style={styles.text} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            console.log('ddd');
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
            <Image source={Images.wishlist} />
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.text}> WishList</Text>
            </View>

            <View style={{width: '10%'}}>
              <Icon name="chevron-forward" size={20} style={styles.text} />
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            console.log('ddd');
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
            <Image source={Images.profile} />
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.text}> Profile</Text>
            </View>

            <View style={{width: '10%'}}>
              <Icon name="chevron-forward" size={20} style={styles.text} />
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            console.log('ddd');
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
            <Image source={Images.bag} />
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.text}> Bag </Text>
            </View>

            <View style={{width: '10%'}}>
              <Icon name="chevron-forward" size={20} style={styles.text} />
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.customItem}
          onPress={() => {
            console.log('ddd');
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
            <Image source={Images.settings} />
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.text}> Settings </Text>
            </View>

            <View style={{width: '10%'}}>
              <Icon name="chevron-forward" size={20} style={styles.text} />
            </View>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.customItem,{backgroundColor:'pink'}]}
          onPress={signOut}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '10%'}}>
            <Image source={Images.logout} />
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.pink}> Logout </Text>
            </View>

            <View style={{width: '10%'}}>
              <Icon name="chevron-forward" size={20} style={styles.pink} />
            </View>
          </View>
        </TouchableOpacity>

       {/*  <DrawerItem label={'Logout'} onPress={signOut} /> */}
      </DrawerContentScrollView>
     </SafeAreaView>
    </>);
};

export default DrawerContent;
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 75,
  },
  text: {
    color: '#545454',
    fontFamily:'Montserrat-Medium'
  },
  pink: {
    color: 'red',
    fontFamily:'Montserrat-Medium'
  },
  customItem: {
    flex: 1,
    padding: '3%',
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dedede',
    borderRadius: 10,
    marginTop:'3%'
  },
});
