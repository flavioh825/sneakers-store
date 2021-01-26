import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

const PurchaseButton = () => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>COMPRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PurchaseButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    marginVertical: '2%',
    borderRadius: 5
  },
  text: {
    color: '#fff',
    fontSize: 16,
  }
});
