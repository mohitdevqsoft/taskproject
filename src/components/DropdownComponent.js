import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DropdownIcon from './DropdownIcon';

const DropdownComponent = ({
  data,
  value,
  onSelect,
  placeholder,
  error,
  isFocused,
  setIsFocused,
}) => {
  const handleSelect = itemValue => {
    onSelect(itemValue);
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.fieldContainer, error && styles.errorBorder]}
        onPress={() => setIsFocused(!isFocused)}>
        <Text style={styles.dropdownButtonText}>{value || placeholder}</Text>
        <DropdownIcon isFocused={isFocused} />
      </TouchableOpacity>
      {isFocused && (
        <View style={styles.dropdownList}>
          {data.map(item => (
            <TouchableOpacity
              key={item.value}
              style={styles.dropdownItem}
              onPress={() => handleSelect(item.value)}>
              <Text style={styles.dropdownItemText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  fieldContainer: {
    borderRadius: 15,
    color: 'black',
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: 'rgb(220, 220, 220)',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  errorBorder: {
    borderColor: 'red',
  },
  dropdownButtonText: {
    fontSize: 15,
    color: '#606060',
  },
  dropdownList: {
    position: 'absolute',
    width: '100%',
    top: 50,
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 10,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default DropdownComponent;
