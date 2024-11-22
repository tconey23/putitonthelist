import { useEffect, useState } from 'react';
import { useCameraPermission } from 'react-native-vision-camera';
import { StyleSheet, Text, View } from "react-native";
import CameraComp from './Components/Camera';


const App = () => {
  const [userPermission, setUserPermission] = useState(false) 
  const { hasPermission, requestPermission } = useCameraPermission()

  useEffect(()=> {
    setUserPermission(hasPermission)
  }, [])


  return (
    <>
    {userPermission ? 
      <View style={styles.wrapper}>
        <CameraComp />
      </View>
      :
      <View>
        <Text>...Waiting for permission</Text>
      </View>
    }
    </>
  )

}


const styles=StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App