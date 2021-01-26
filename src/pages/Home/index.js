import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

import Shoes from '../../components/Shoes';
import Cart from '../../components/Cart';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={ require('../../assets/banner.png') } 
          style={styles.imageHeader}
        />
        <View style={{
          position: 'absolute', 
          alignSelf: 'flex-end',
          top: 35,
        }}>
          <Cart color='#fff' value={1} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>-</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>MASCULINO</Text>
          <TouchableOpacity 
            style={{position: 'absolute', right: 0, alignSelf: 'center'}}
            onPress={() => {}}>
            <MaterialIcons name='filter-list' size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ borderBottomColor: '#d8d8d8', borderBottomWidth: 2 }} />

      <ScrollView style={{flex: 1}}>
        <Text style={styles.text}>Lançamentos</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Shoes 
            img={require('../../assets/1.png')} 
            price="199,99" 
            text="Tenis Nike Revolution 5" 
            callDetail={() => navigation.navigate('Detail')} 
          />
          <Shoes 
            img={require('../../assets/2.png')} 
            price="339,99" 
            text="Tenis Nike Court Lite 2" 
            callDetail={() => alert("Clicou!")} 
          />
          <Shoes 
            img={require('../../assets/3.png')} 
            price="157,98" 
            text="Tenis Adidas Run the Game" 
            callDetail={() => alert("Clicou!")} 
          />
          <Shoes 
            img={require('../../assets/4.png')} 
            price="239,00" 
            text="Tenis Adidas Adizero Club" 
            callDetail={() => alert("Clicou!")} 
          />
          <Shoes 
            img={require('../../assets/5.png')} 
            price="499,00" 
            text="Tenis Adidas Gamecourt" 
            callDetail={() => alert("Clicou!")} 
          />
          <Shoes 
            img={require('../../assets/6.png')} 
            price="559,00" 
            text="Tenis Adidas Defiant Generation" 
            callDetail={() => alert("Clicou!")} 
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8,
  },
  imageHeader: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: '2%',
    marginHorizontal: '3%',
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
  }
});