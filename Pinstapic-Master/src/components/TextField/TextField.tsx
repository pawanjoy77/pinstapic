import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react'
import styles from './styles';
const TextField = ({
  onChangeText,
  onIconPress,
  secureTextEntry,
  editable,
  isPlaceHolder,
  multiline,
  keyboardType,
  placeholderTextColor,
  imageIcon,
  value,
  error,
  maxLength,
  numberOfLines,
  customStyles,
  onEndEditing,
  placeholder,
}) => {
  return (
    <View
        style={[
          styles.inputContainer,
          imageIcon != '' && styles.flexdirection,
          ...customStyles,
        ]}>
     <TextInput
          ref={ref =>
            ref && ref.setNativeProps({style: {fontFamily: 'Montserrat-Light'}})
          }
          maxLength={maxLength}
          //  placeholderTextColor={'red'}
          underlineColorAndroid="transparent"
          //  placeholderTextColor = {'#333'}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={editable}
          multiline={multiline}
          onEndEditing={onEndEditing}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          placeholder={isPlaceHolder ? placeholder : ''}
          placeholderTextColor={placeholderTextColor}
          value={value}
          style={[
            styles.textboxfieldd,
            imageIcon == '' && styles.textboxwidth,
            multiline && styles.textAreaCss,
          ]}
        />
        {imageIcon != '' && (
          <View style={styles.imageiconConatiner}>
            <TouchableWithoutFeedback onPress={onIconPress}>
              <Image source={imageIcon} style={styles.imageicon} />
            </TouchableWithoutFeedback>
          </View>
        )}
    </View>
  )
}
TextField.defaultProps = {
  underlineColorAndroid: 'transparent',
  autoCapitalize: 'sentences',
  editable: true,
  isPlaceHolder: true,
  secureTextEntry: false,
  multiline: false,
  keyboardType: 'default',
  placeholderTextColor: '#FFFFFF',
  imageIcon: '',
  value: '',
  error: '',
  placeholder: '',
  maxLength: 100,
  numberOfLines: 1,
  customStyles: '',
}
export default TextField