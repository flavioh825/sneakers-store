import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const SizeShoes = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {}} 
      style={[styles.container, props.selected ? {backgroundColor: '#000'} : {}]}
    >
      <Text style={[styles.text, props.selected ? {color: '#fff'} : {}]}>{props.size}</Text>
    </TouchableOpacity>
  );
}

export default SizeShoes;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 4,
    marginHorizontal: 3,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});