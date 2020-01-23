import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import publicColor from '../assets/js/publicColor';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  guideTxt: {
    color: publicColor.blueGray,
  },
  input: {
    height: 40,
    width: width / 1.3,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: '#ffffff',
    padding: 10,
    marginBottom: 40,
    fontSize: 16,
  },
});

const InputBox = ({txt, isPassword = false}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.guideTxt}>{txt}</Text>
      <TextInput style={styles.input} secureTextEntry={isPassword} />
    </View>
  );
};

export default InputBox;
