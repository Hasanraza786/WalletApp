import React from 'react'
import { View, Text,
Image,
TouchableOpacity
} from 'react-native'

import {RNCamera } from 'react-native-camera';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"


const Scan = () => {
    return (
        <View style={{flex:1,backgroundColor:COLORS.transparent}}>
            <RNCamera
            ref={re => {
                this.RNCamera = re
            }}
            style={{flex:1}}
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            flashMode ={RNCamera.Constants.FlashMode.Off}
            androidCameraPermissionOptions={{
                title:"Permission to use camera",
                message:'Camera is required for barcode scanning',
                buttonPositive:"OK",
                buttonNegative:'Cancel'

            }}
            >

            </RNCamera>
        </View>
    )
}

export default Scan
