import React from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';

const GumtrackerSplashScreen = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <ImageBackground
        source={require('@src/localAssets/img/gumtracker-logo.png')}
        style={{
          width: Dimensions.get('window').width / 2,
          aspectRatio: 1,
        }}
      />
    </View>
  );
};

export default GumtrackerSplashScreen;
