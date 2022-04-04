import React, { useState } from "react"
import { StyleSheet, Text, View ,useWindowDimensions,Button,Image} from 'react-native'
import navigationStrings from '../../constants/navigationStrings';
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel, { Pagination } from "react-native-snap-carousel"
import styles from './style'
import { Images,CustomButton} from "../../components";


const Welcome = ({navigation}) => {
  const { width } = useWindowDimensions()
  const [activeDotIndex, setActiveDotIndex] = useState(0)
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.mainview}
      >
        <Carousel
          itemWidth={width}
          sliderWidth={width}
          inactiveSlideScale={1}
          onSnapToItem={(index:any)=>{setActiveDotIndex(index)}}
          vertical={false}
          renderItem={({ item: { title, subtitle }, dataIndex }) => (
            <View
              key={dataIndex}
              style={styles.carouselItem}
            >
              <Image
                source={Images.tranparentlogo}
                style={{ width: 250, height: 250}}
              />
              <Text  style={styles.carouselText}>
                {title}
              </Text>
              <Text style={{ color: "white" }}>{subtitle}</Text>
            </View>
          )}
          data={[
            {
              title: "Pinstapic",
              subtitle: "The world best fashion platform",
            },
            {
              title: "Pinstapic",
              subtitle: "The world best fashion platform",
            },
            {
              title: "Pinstapic",
              subtitle: "The world best fashion platform",
            },
            {
              title: "Pinstapic",
              subtitle: "The world best fashion platform",
            },
          ]}
        />
      </View>
      <View style={{ flex: 0.2 }}>
        <Pagination
          dotsLength={4}
          activeDotIndex={activeDotIndex}
          dotStyle={{ backgroundColor: "white" }}
        />
       
      </View>
      <View style={{width:'75%',marginBottom:'7%'}}>
        <CustomButton  title="LOGIN" backgroundColor="none"  onPress={() => {
              navigation.navigate(navigationStrings.LOGIN)
            }}/>
         
        </View>
        <View style={{width:'75%'}}>
        <CustomButton  title="JOIN NOW"   onPress={() => {
              navigation.navigate(navigationStrings.SIGNUP)
            }}/>
         
        </View>
    </SafeAreaView>
  )
}

export default Welcome

