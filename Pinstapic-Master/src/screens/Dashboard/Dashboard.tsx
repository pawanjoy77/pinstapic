import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <ImageBackground source={{ uri: 'https://picsum.photos/id/821/1000/2000' }}  blurRadius={11} style={styles.ImageBackground}>
                <View style={styles.container}>
                    <Text style={styles.text}> Dashboard </Text>

                    <Text style={styles.text}>Ysdsds</Text>
                </View>
            </ImageBackground>
  )
}

export default Dashboard

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