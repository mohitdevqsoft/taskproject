import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Btn = ({bgColor, btnLabel, textColor, Press, Icon, Icons}) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 15,
        marginVertical: 10,
      }}>
      {Icon}
      <Text style={{color: textColor, fontSize: 16, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
      {Icons}
    </TouchableOpacity>
  );
};
export default Btn;
