import React, { useLayoutEffect } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  ScrollView,
  Image } from 'react-native';
import Colors from '../../components/Colors';
import OtherProducts from '../../components/OtherProducts';
import PurchaseButton from '../../components/PurchaseButton';
import SizeShoes from '../../components/SizeShoes';

// import { Container } from './styles';

const Detail = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Tenis Nike Revolution 5'
      
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{margin: 3}}>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 } ]}>Tenis Nike Revolution 5</Text>
        </View>
        <View>
          <Text style={[styles.title, { fontSize: 24 } ]}>R$295,99</Text>
        </View>
        <View style={styles.colorsContainer}>
          <Colors color='#ddd' selected={false} />
          <Colors color='#237' selected={false} />
          <Colors color='#d34' selected={false} />
          <Colors color='#000' selected={true} />
        </View>
        <View style={styles.sizesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeShoes size='39' selected={false} />
            <SizeShoes size='40' selected={true} />
            <SizeShoes size='41' selected={false} />
            <SizeShoes size='42' selected={false} />
            <SizeShoes size='43' selected={false} />
            <SizeShoes size='44' selected={false} />
            <SizeShoes size='45' selected={false} />
          </ScrollView>
        </View>
        <View style={styles.descriptionContent}>
          <View opacity={0.4}>
            <Text style={[styles.title, {fontSize: 24, marginVertical: '2%'}]}>Descrição</Text>
          </View>
          <Text style={{ textAlign: 'justify', fontSize: 16, color: '#2c2c2c' }}>
            Com ótimo amortecimento em espuma, o Tênis Nike Masculino Revolution 5 é ideal para os corredores que buscam leveza e conforto. Confeccionado em material respirável, esse tênis para correr possui reforço no calcanhar para proteger contra possíveis torções e fechamento dinâmico, garantindo um ajuste personalizado. Aposte na Nike para te acompanhar nos seus desafios dentro do esporte!
          </Text>
        </View>
        <PurchaseButton />
        <View style={styles.line} />
        <OtherProducts />
      </View>
    </ScrollView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
  },
  title: {
    fontFamily: 'Anton_400Regular',
    color: '#2c2c2c'
  },
  colorsContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
  },
  sizesContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  descriptionContent: {
    marginVertical: '2%'
  },
  line: {
    width: '95%',
    borderBottomWidth: 4,
    borderBottomColor: '#ddd',
    marginVertical: '2%',
    alignSelf: 'center',
  }
});
