import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Shoes from '../Shoes';

// import { Container } from './styles';

const OtherProducts = () => {

  const navigation = useNavigation(null);

  return(
    <View style={styles.container}>
      <View opacity={0.4}>
        <Text style={styles.title}>Outros Produtos</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginHorizontal: 10}}>
            <Shoes 
              img={require('../../assets/1.png')} 
              price="199,99" 
              text="Tenis Nike Revolution 5" 
              callDetail={() => navigation.navigate('Detail')} 
            />
          </View>
          <View style={{marginHorizontal: 3}}>
            <Shoes 
              img={require('../../assets/2.png')} 
              price="339,99" 
              text="Tenis Nike Court Lite 2" 
              callDetail={() => alert("Clicou!")} 
            />
          </View>
          <View style={{marginHorizontal: 3}}>
            <Shoes 
              img={require('../../assets/3.png')} 
              price="157,98" 
              text="Tenis Adidas Run the Game" 
              callDetail={() => alert("Clicou!")} 
            />
          </View>
          <View style={{marginHorizontal: 3}}>
            <Shoes 
              img={require('../../assets/4.png')} 
              price="239,00" 
              text="Tenis Adidas Adizero Club" 
              callDetail={() => alert("Clicou!")} 
            />
          </View>
          <View style={{marginHorizontal: 3}}>
            <Shoes 
              img={require('../../assets/5.png')} 
              price="499,00" 
              text="Tenis Adidas Gamecourt" 
              callDetail={() => alert("Clicou!")} 
            />
          </View>
          <View style={{marginHorizontal: 3}}>
            <Shoes 
              img={require('../../assets/6.png')} 
              price="559,00" 
              text="Tenis Adidas Defiant Generation" 
              callDetail={() => alert("Clicou!")} 
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default OtherProducts;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontFamily: 'Anton_400Regular',
    color: '#2c2c2c',
    fontSize: 24,
  },
})