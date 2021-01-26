import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

// import { Container } from './styles';

const Cart = (props) => {
  return(
    <TouchableOpacity
      style={{ 
        marginHorizontal: 10,
      }} 
      onPress={() => {}}
    >
      <View style={{ 
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: '#f65114',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 13,
        right: 10,
        zIndex: 100,
      }}>
        <Text style={{color: '#fff'}}>{props.value}</Text>
      </View>
      <Feather 
        name='shopping-cart'
        size={24}
        color={props.color}
      />
    </TouchableOpacity>
  );
}

export default Cart;