import React from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Colors = (props) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { backgroundColor: props.color },
        props.selected ?  { borderWidth: 3, borderColor: '#a9a9a9' } : {},
      ]}
    />
  );
}

export default Colors;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.050,
    height: Dimensions.get('window').width * 0.050,
    borderRadius: Dimensions.get('window').width * 0.050 / 2,
    marginHorizontal: '3%',
  }
})