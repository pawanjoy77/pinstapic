import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import {CustomButton, Images, ModelComponent} from '../../components';
import navigationStrings from '../../constants/navigationStrings';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Services from '../../Services/Services';
import FieldSet from 'react-native-fieldset';
import {TextInput} from 'react-native-gesture-handler';
const CreateLookbook = ({navigation}) => {
  const [coverImage, setCoverImage] = useState('');
  const [isVisible, setisVisible] = useState(false);
  const [moreImage, setMoreImage] = useState([]);
  
 
  const _renderItem = ({ item }) => (
    <View style={styles.lookbookContainer}>
      <Image
        style={styles.cameraIcon}
        source={{ uri: item.image }}
      />
    <View
                  style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection:'row',
                    bottom:5
                  }}>
                 <Image source={Images.imgicon} style={{marginRight:5}}/>
                  <Text style={{fontSize:12,fontWeight:'600',color:'#FFF',fontFamily: 'Montserrat-Light'}}>{item.id}</Text>
                </View>
    </View>
  );
  const OpenModel = async () => {
    setisVisible(true);
  };
  const CloseModel = async () => {
    setisVisible(false);
  };
  const uploadCoverImage = async () => {
    try {
      let imageData: any = await Services.imagePicker('photo', false);
      setCoverImage(imageData.path);
      setisVisible(false);
      //Services.showLog(imageData);
    } catch (error) {
      //alert(JSON.stringify(error));
    }
  };
  const uploadMoreCoverImage = async () => {
    try {
      let imageData: any = await Services.imagePicker('photo', true);
     
      let data:any=[];
      imageData.map((v,i)=>{
        let obj ={id:i+1,title:`Item ${i+1}`,image:v.path}
        data.push(obj);
        
      });
      setMoreImage(data);
      setisVisible(false);
      //Services.showLog(data);
    } catch (error) {
      //alert(JSON.stringify(error));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
       <ModelComponent isVisible={isVisible} modelType={'center'} onPress={uploadCoverImage} onPressMore={CloseModel} />
      <ScrollView style={styles.scrollView}  >
        <View style={[styles.cameraContainer]}>
          <TouchableOpacity
            onPress={OpenModel}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            {coverImage ? (
              <>
                <Image source={{uri: coverImage}} style={styles.cameraIcon} />
                <View
                  style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    alignSelf:'center'
                  }}>
                  <Image source={Images.camera}/>
                  <Text  style={{ fontFamily: 'Montserrat-Light',color:'#e2f2f9',fontSize:13}}> Change a cover photo</Text>
                </View>
              </>
            ) : (
              <>
                <Image source={Images.camera}/>
                <Text  style={{ fontFamily: 'Montserrat-Light',color:'#e2f2f9',fontSize:13,marginTop:'12%'}}> Add a cover photo</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Lookbook Title</Text>
          <TextInput placeholder="Write Something..." style={[
            styles.textboxfieldd
          ]} />
        </View>
        <View
          style={{
            borderBottomColor: '#5e98e3',
            borderBottomWidth: 2,
            marginHorizontal: '2%',
          }}
        />
        <View style={{alignItems: 'center',marginVertical:'5%'}}>
          <TouchableOpacity
            onPress={uploadMoreCoverImage}
            style={{
              backgroundColor: '#96b4e6',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3.5%',
              width: '85%',
            }}>
            <Text style={{ fontFamily: 'Montserrat-Medium',color:'#FFF'}}>Add Photos to your Lookbook</Text>
          </TouchableOpacity>
        </View>

        
        { <FlatList
          data={moreImage}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 20 }}
        /> }
      </ScrollView>
      
        <View style={styles.bottombtn}>
        
        <>
        <TouchableOpacity
            onPress={() => {navigation.goBack(null)}}
            style={{
              backgroundColor: 'transparent',
              borderRadius: 15,
              alignItems: 'center',
              alignContent: 'center',
              width: '45%',
              justifyContent:'center',
              marginRight:'1%',
              borderWidth: 1,
		borderColor: '#FFF',
    height:50
            }}>
            <Text style={{ fontFamily: 'Montserrat-Light',color:'#f8fcfe',fontSize:15,fontWeight:'700'}}>Cancel</Text>
          </TouchableOpacity>
        </>
        
        <>
        <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#97b3e3',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent:'center',
              height:50,
              width: '45%',
              marginLeft:'1%'
            }}>
            <Text style={{ fontFamily: 'Montserrat-Light',color:'#f8fcfe',fontSize:15,fontWeight:'700'}}>Save</Text>
          </TouchableOpacity>
        
        </>
        
        
      </View>
    </SafeAreaView>
  );
};

export default CreateLookbook;
