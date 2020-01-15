import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import publicColor from '../assets/js/publicColor';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  guideTxt: {
    color: publicColor.blueGray,
  },
  input: {
    height: 30,
    width: 120,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: '#ffffff',
    padding: 10,
  },
});

const InputBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.guideTxt}>dummy</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default InputBox;
