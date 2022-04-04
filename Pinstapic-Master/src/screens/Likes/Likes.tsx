import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React ,{useEffect}from 'react'

const Likes = ({navigation}) => {
   
    return (
   
      <ImageBackground source={{ uri: 'https://picsum.photos/id/821/1000/2000' }}  blurRadius={11} style={styles.ImageBackground}>
                <View style={styles.container}>
                    <Text style={styles.text}> CSS Tricks </Text>

                    <Text style={styles.text}>You can style your Text and View as you deem fit</Text>
                </View>
            </ImageBackground>
   
  )
}

export default Likes

const styles = StyleSheet.create({
    ImageBackground: {
        flex:1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 0, 0, 0, 0.9 )',
    },
    text: {
        color: 'white',
        fontSize: 24
    }
})