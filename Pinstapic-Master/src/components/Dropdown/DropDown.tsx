import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import styles from './style';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DropDown = ({onValueChange,
    value,
    placeholder,
    data }) => {
  return (
    <View style={[pickerSelectStyles.inputContainer,{padding:0}]}>
	    <RNPickerSelect
            onValueChange={(val,i)=>{onValueChange(val)}}
            useNativeAndroidPickerStyle={false}
            value={value}
            placeholder={{
                label: 'User Type',
                value: null,
                color: '#FFF',
              }}
            items={data}
            itemKey={Math.random().toString(12).substring(0)}
           
            Icon={() => {
              return <Ionicons name="chevron-down" size={24} color="white" />;
            }}
            style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: 10,
                  right: 12,
                },
              }}
        />
       </View>
  )
}

export default DropDown

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 2,
      paddingVertical:5,
      color: '#FFF',
      paddingRight: 30, // to ensure the text is never behind the icon
      fontFamily:'Montserrat-Light'
    },
    inputContainer: {
        borderBottomWidth:.5,
        borderBottomColor: '#FFF',  
      }
  });