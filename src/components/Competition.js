import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import LeftIcon from './LeftIcon';
import SearchIcon from './SearchIcon';

const Competition = props => {
  const competitions = [
    {
      id: 1,
      title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
      dateRange: 'YYYY-MM-DD ~ YYYY-MM-DD',
      location: 'Pyeongchang, Gangwon-do, Korea',
      backgroundColor: '#253BFF',
    },
    {
      id: 2,
      title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
      dateRange: 'YYYY-MM-DD ~ YYYY-MM-DD',
      location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
      backgroundColor: '#4C53FF',
    },
    {
      id: 3,
      title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
      dateRange: 'YYYY-MM-DD ~ YYYY-MM-DD',
      location: 'Pyeongchang, Gangwon-do, Korea',
      backgroundColor: '#253BFF',
    },
    {
      id: 4,
      title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
      dateRange: 'YYYY-MM-DD ~ YYYY-MM-DD',
      location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
      backgroundColor: '#4C53FF',
    },
    {
      id: 5,
      title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
      dateRange: 'YYYY-MM-DD ~ YYYY-MM-DD',
      location: 'Pyeongchang, Gangwon-do, Korea',
      backgroundColor: '#253BFF',
    },
  ];

  return (
    <ScrollView style={{paddingHorizontal: 25}}>
      <View style={{flexDirection: 'row', gap: 30}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Signup')}
          style={{
            borderRadius: 100,
            paddingVertical: 10,
            marginVertical: 10,
          }}>
          <View>
            <LeftIcon />
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={{
              borderRadius: 15,
              color: 'black',
              paddingHorizontal: 10,
              width: '87%',
              backgroundColor: '#F9FAFB',
              marginVertical: 10,
              position: 'relative',
            }}
            placeholder="Asian"
            placeholderTextColor="black"
          />
          <TouchableOpacity
            style={{
              borderRadius: 100,
            }}>
            <SearchIcon style={{position: 'absolute', right: 20, top: -10}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'column', gap: 10}}>
        <Text style={{fontSize: 24, fontWeight: '800', color: '#101828'}}>
          Competition
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#344054',
            lineHeight: 21,
          }}>
          An account is needed per one host. If you already have an account for
          the host of competition you want to sign up, you can login and
          register.
        </Text>
      </View>
      <View style={{paddingVertical: 15}}>
        {competitions.map(comp => (
          <ImageBackground
            key={comp.id}
            source={require('./BG.png')}
            style={{
              borderRadius: 15,
              color: 'black',
              width: '100%',
              backgroundColor: comp.backgroundColor,
              marginVertical: 10,
              overflow: 'hidden',
            }}
            imageStyle={{borderRadius: 15}}>
            <View style={{padding: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: '#FFFFFF',
                  lineHeight: 27,
                }}>
                {comp.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#FFFFFF',
                  lineHeight: 30,
                }}>
                {comp.dateRange}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#B8BFFF',
                  lineHeight: 14,
                }}>
                {comp.location}
              </Text>
            </View>
          </ImageBackground>
        ))}
      </View>
    </ScrollView>
  );
};

export default Competition;
