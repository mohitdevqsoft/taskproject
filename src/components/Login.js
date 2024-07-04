import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import Field from './Field';
import Btn from './Btn';
import PreviousIcon from './PreviousIcon';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email format is invalid';
      valid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      valid = false;
    } else {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[~`!@#$%^&*()_\-+=?]/.test(password);

      const criteriaMet = [
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar,
      ].filter(Boolean).length;

      if (criteriaMet < 3) {
        errors.password =
          'At least 8 letters Include at least 3 uppercase letters, lowercase letters, number, or special letters. Special letters are only limited to (~`!@#$%^&*()_-+=?)';
        valid = false;
      }
    }

    setErrors(errors);
    return valid;
  };

  const handleSignup = () => {
    if (!validate()) {
      return;
    }
    console.log('Signup successful!');
    props.navigation.navigate('Logout');
  };

  return (
    <View style={{paddingHorizontal: 25}}>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={{
            borderRadius: 100,
            width: '100%',
            paddingVertical: 40,
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row', gap: 20}}>
            <PreviousIcon />
            <Text style={{color: 'black', fontSize: 30, fontWeight: '800'}}>
              Login With Email
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 700,
          width: '100%',
          paddingTop: 30,
        }}>
        <Field
          placeholder="Email / Username"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={{
              borderRadius: 15,
              color: 'black',
              paddingHorizontal: 10,
              width: '100%',
              backgroundColor: 'rgb(220, 220, 220)',
              color: 'black',
              marginVertical: 25,
              position: 'relative',
            }}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword ? require('./show.png') : require('./hide.png')
              }
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                right: 10,
                top: -10,
              }}
            />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={{color: 'red'}}>{errors.password}</Text>
        )}

        <View style={{paddingVertical: 50}}>
          <Btn
            textColor="white"
            bgColor="#253BFF"
            btnLabel="Login"
            Press={handleSignup}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
