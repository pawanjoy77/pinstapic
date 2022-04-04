import { View, Text,LogBox  } from 'react-native'
import React,{useEffect} from 'react'
import Routes from './src/navigation/Routes'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    ]);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

  return (
    
    <NavigationContainer>
     <Routes/>
     </NavigationContainer>
  )
}

export default App