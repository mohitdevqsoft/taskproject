import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Background from './Background';
import SignUpIcon from './SignUpIcon';
import MailIcon from './MailIcon';
import ForwardIcon from './ForwardIcon';
import ForwardIconBlack from './ForwardIconBlack';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'white', fontSize: 40, fontWeight: '800'}}>
          Soo
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: '800',
            marginBottom: 40,
          }}>
          and Carrots
        </Text>
        <View style={{paddingTop: 300}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Signup')}
            style={{
              backgroundColor: '#253BFF',
              borderRadius: 100,
              width: '100%',
              paddingVertical: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', gap: 15, paddingLeft: 20}}>
                <SignUpIcon />
                <Text
                  style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                  Sign Up for free
                </Text>
              </View>
              <View style={{paddingLeft: 60}}>
                <ForwardIcon />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={{
              backgroundColor: '#1D2939',
              borderRadius: 100,
              width: '100%',
              paddingVertical: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', gap: 15, paddingLeft: 20}}>
                <MailIcon />
                <Text
                  style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                  Continue with Email
                </Text>
              </View>
              <View style={{paddingLeft: 30}}>
                <ForwardIconBlack />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});
