// Components/Camera.js
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevice} from 'react-native-vision-camera';
import { useCodeScanner } from 'react-native-vision-camera';

const CameraComp = () => {
    const device = useCameraDevice('back')
    
    useEffect(() => {
        if(Camera.getAvailableCameraDevices()){
            Camera.focus()
        }
    }, [Camera])

    if (!device) return null;

    const codeScanner = useCodeScanner({
        codeTypes: ['upc-a'],
        onCodeScanned: (codes) => {
          console.log(`Scanned ${codes.length} codes!`)
        }
      })

    return (
        <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            codeScanner={codeScanner}
        />
    );
};

export default CameraComp;
