import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Btn from './Btn';
import Cross from './Cross';
import Star from './Star';

const Logout = props => {
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Star />
            <Cross />
          </View>
          <Text style={styles.title}>Welcome to Soo</Text>
          <Text style={styles.subtitle}>Great to have you with us!</Text>
          <Btn
            textColor="white"
            bgColor="#253BFF"
            btnLabel="Got it"
            Press={() => props.navigation.navigate('Home')}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    color: '#101828',
    fontWeight: 'bold',
    marginTop: 30,
    fontFamily: 'Plus Jakarta Sans',
  },
  subtitle: {
    color: '#101828',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
  },
});

export default Logout;
