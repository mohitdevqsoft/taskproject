import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

const Background = ({children}) => {
  return (
    <View style={{flex: 1}}>
      <Video
        source={require('../assets/Shutter.mp4')}
        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
        resizeMode="cover"
        repeat
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,1)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 600,
        }}
      />
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        {children}
      </View>
    </View>
  );
};

export default Background;
