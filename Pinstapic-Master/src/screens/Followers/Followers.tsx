import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Followers = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Text>Followers</Text>
    </View>
  )
}

export default Followers  


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    }
})

