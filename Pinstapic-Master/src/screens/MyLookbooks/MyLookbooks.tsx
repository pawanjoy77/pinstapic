import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import { CustomButton, Images } from '../../components'
import navigationStrings from '../../constants/navigationStrings'
import Icon from 'react-native-vector-icons/Ionicons'
const MyLookbooks = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      title: "RUSTY DRIVE",
      image:
      Images.img1
    },
    {
      id: "2",
      title: "SABOR MORENO",
      image:
      Images.img2

    },
    {
      id: "3",
      title: "0 MESTRE PUB",
      image:
      Images.img3

    },
    {
      id: "4",
      title: "GRILL 54 CHEF",
      image:
      Images.img4

    },
    {
      id: "5",
      title: "RUSTY DRIVE",
      image:
      Images.img5

    },
    {
      id: "6",
      title: "SABOR MORENO",
      image:
      Images.img6

    },
    
  ];
  const _renderItem = ({ item }) => (
    <View style={styles.lookbookContainer}>
      <Image
        style={styles.cameraIcon}
        source={item.image}
      />
      <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              bottom: 8


            }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10, color: '#FFF', fontFamily: 'Montserrat-Bold', }}>{item.title}{'\n'}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
              <Icon name="heart" size={15} color={'#FFF'} />
              <Text style={{ fontSize: 10, color: '#FFF', fontFamily: 'Montserrat-Bold', lineHeight: 15 }}>{item.id}  </Text>

              <Icon name="heart" size={15} color={'#FFF'} />
              <Text style={{ fontSize: 10, color: '#FFF', fontFamily: 'Montserrat-Bold', lineHeight: 15 }}>{item.id}</Text>
            </View>
          </View>
        
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: 'center' }}>

          <TouchableOpacity onPress={() => { navigation.navigate('DrawerStacks', { screen: navigationStrings.CREATELOOKBOOK }) }} style={{
            backgroundColor: '#96b4e6',
            borderRadius: 15,
            justifyContent: 'center', alignItems: 'center', padding: "3.5%", width: '85%'
          }} >
            <Text style={{ color: '#FFF', fontFamily: 'Montserrat-Medium' }}>Create a Lookbook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Recently Created</Text>

        </View>
        <View style={styles.recentlookbookContainer}>
          <Image
            style={styles.cameraIcon}
            source={Images.img1}
          />
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              bottom: 8


            }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10, color: '#FFF', fontFamily: 'Montserrat-Bold', }}>{'Winter'}{'\n'}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
              <Icon name="heart" size={15} color={'#FFF'} />
              <Text style={{ fontSize: 10, color: '#FFF', fontFamily: 'Montserrat-Bold', lineHeight: 15 }}>{'5'}  </Text>

              <Icon name="heart" size={15} color={'#FFF'} />
              <Text style={{ fontSize: 10, color: '#FFF', fontFamily: 'Montserrat-Bold', lineHeight: 15 }}>{'5'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Old LookBooks</Text>

        </View>
        { <FlatList
          data={DATA}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 20 }}
        /> }
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyLookbooks

