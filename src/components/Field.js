import {TextInput} from 'react-native';
import React from 'react';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 15,
        color: 'black',
        paddingHorizontal: 10,
        width: '100%',
        backgroundColor: 'rgb(220, 220, 220)',
        marginVertical: 10,
      }}
      placeholderTextColor="#606060"></TextInput>
  );
};

export default Field;
