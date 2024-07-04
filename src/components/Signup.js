import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Field from './Field';
import Btn from './Btn';
import PreviousIcon from './PreviousIcon';
import DropdownComponent from './DropdownComponent';

const data = [
  {label: 'Competitions', value: 'Competitions'},
  {label: 'Results', value: 'Results'},
  {label: 'Updates', value: 'Updates'},
];

const Signup = props => {
  const [competition, setCompetition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dropdownFocused, setDropdownFocused] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setCompetition('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      setAgreeTerms(false);
      setErrors({});
    }, []),
  );

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!competition) {
      errors.competition = 'You must pick a competition to register';
      valid = false;
    }

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
          'At least 8 letters Include at least 3 uppercase letters, lowercase letters, number, or special letters Special letters are only limited to (~`!@#$%^&*()_-+=?)';
        valid = false;
      }
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
      valid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    if (!firstName) {
      errors.firstName = 'This is a required field.';
      valid = false;
    }

    if (!lastName) {
      errors.lastName = 'This is a required field.';
      valid = false;
    }

    if (!agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSignup = () => {
    if (!validate()) {
      return;
    }
    console.log('Signup successful!');
    props.navigation.navigate('Competition');
  };

  const handlePressOutside = () => {
    setDropdownFocused(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={{flex: 1}}>
        <ScrollView style={{paddingHorizontal: 25}}>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}
              style={{
                borderRadius: 100,
                width: '100%',
                paddingVertical: 10,
                marginVertical: 10,
              }}>
              <View style={{flexDirection: 'row', gap: 20}}>
                <PreviousIcon />
                <Text style={{color: 'black', fontSize: 30, fontWeight: '800'}}>
                  Create Account
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
            <DropdownComponent
              data={data}
              value={competition}
              onSelect={setCompetition}
              placeholder="Competition to sign up *"
              error={errors.competition}
              isFocused={dropdownFocused}
              setIsFocused={setDropdownFocused}
            />
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
                  marginVertical: 10,
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                style={{
                  borderRadius: 15,
                  color: 'black',
                  paddingHorizontal: 10,
                  width: '100%',
                  backgroundColor: 'rgb(220, 220, 220)',
                  marginVertical: 10,
                  position: 'relative',
                }}
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Image
                  source={
                    showConfirmPassword
                      ? require('./show.png')
                      : require('./hide.png')
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
            {errors.confirmPassword && (
              <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
            )}
            <Field
              placeholder="First Name in English *"
              keyboardType="default"
              value={firstName}
              onChangeText={setFirstName}
            />
            {errors.firstName && (
              <Text style={{color: 'red'}}>{errors.firstName}</Text>
            )}
            <Field
              placeholder="Last Name in English *"
              keyboardType="default"
              value={lastName}
              onChangeText={setLastName}
            />
            {errors.lastName && (
              <Text style={{color: 'red'}}>{errors.lastName}</Text>
            )}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: '#475467',
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setAgreeTerms(!agreeTerms)}>
                {agreeTerms && (
                  <Text style={{fontSize: 16, color: '#475467'}}>✓</Text>
                )}
              </TouchableOpacity>
              <Text style={{color: '#475467', fontSize: 13}}>
                By signing up, I agree to Cloit's {''}
              </Text>
              <Text
                style={{color: '#475467', fontWeight: 'bold', fontSize: 13}}>
                Terms & Conditions
              </Text>
            </View>
            {errors.agreeTerms && (
              <Text style={{color: 'red'}}>{errors.agreeTerms}</Text>
            )}
            <View
              style={{flexDirection: 'row', marginBottom: 40, paddingLeft: 33}}>
              <Text style={{color: '#475467', fontSize: 13}}>and {''}</Text>
              <Text
                style={{color: '#475467', fontWeight: 'bold', fontSize: 13}}>
                Privacy Policy
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor="#253BFF"
              btnLabel="Sign Up"
              Press={handleSignup}
              disabled={!agreeTerms}
            />
          </View>
        </ScrollView>
        {/* {dropdownFocused && (
          <TouchableOpacity
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}
            onPress={() => setDropdownFocused(false)}
          />
        )} */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
