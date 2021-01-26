import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, GestureResponderEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

const Shoes = (props) => {

  const navigation = useNavigation();

  function showDescription(text) {
    if(text.length < 27) {
      return text;
    }
    
    return `${text.substring(0, 20)}...`;
  }

  return(
    <TouchableOpacity style={styles.container} onPress={props.callDetail}>
      <Image source={props.img} style={styles.image} />
      <Text style={styles.text}>
        {showDescription(props.text)}
      </Text>
      <View style={{opacity: 0.5}}>
        <Text style={styles.text}>
          R${props.price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Shoes;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 175,
    height: 175,
  },
  text: {
    fontSize: 16
  },
});