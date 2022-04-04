import Toast from 'react-native-simple-toast';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore'
const usersColRef = firestore().collection("users")
 const Services={
    isLog:true,
    showToast:(message:any)=>{
        Toast.show(message, Toast.LONG);
    },
    showLog:(message:any)=>{
        if(Services.isLog){
            console.log(message);
        }
        
    },
    imagePicker:(mediaType:any,isMutliple:any)=>{
        return new Promise((resolve, reject) => {
            ImagePicker.openPicker({
                multiple: isMutliple,
                mediaType: mediaType,
              }).then(images => {
                resolve(images);
              }, err => {
               // alert(JSON.stringify(err));
                reject(err);
              });
          })
        
    },
    isUniquePhone:async (phone)=>{
            try {
                const nameDoc = await usersColRef.where("phone", "==", phone).get()
                return nameDoc.empty?false:true;
              } catch (e) {
               return false
              }
        
        
    } 
}
export default Services;