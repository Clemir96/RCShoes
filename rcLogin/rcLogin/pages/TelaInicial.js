import React from 'react';
import { View, StyleSheet,  TouchableOpacity, Text, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ImageBackground } from 'react-native';

const App = () => {
  return ( 
  <ImageBackground source={require('../src/imagemLogin.jpg')} 
    style={styles.imageBackground}>

    <View>
      <TouchableOpacity style={styles.repostCadastro}>
        <Text style={styles.decoraCadastro}>
          Cadastre-se e ganhe descontos especiais !!!
        </Text>
        <Icon name="user" size={25} color='#4F4F4F' style={styles.posicionaLogin}/>
      </TouchableOpacity>
    </View>

    <View style={styles.bordaNome}>
      <Text style={styles.nomeLoja}>
        RCshoes
      </Text>
    </View>

    <View>
      <TouchableOpacity style={styles.areaRedes}>
        <Text style={styles.decoraRedes}>
          Nos siga em nossas redes sociais
        </Text>
          <Icon name="facebook-square" size={20} color='#FFCE29' style={styles.posicionaFacebook}/>
          <Icon name="instagram" size={20} color='#FFCE29' style={styles.posicionaInstagram}/>
          <Icon name="twitter" size={20} color='#FFCE29' style={styles.posicionaTwitter}/>
      </TouchableOpacity>
    </View>

    </ImageBackground>
  );
}
export default App;



const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%', 
    height: '100%',
  },
  repostCadastro: {
    backgroundColor: '#4F4F4F',
    borderRadius: 20,
    width: 350,
    height: 30,
    bottom: 200,
  },
  decoraCadastro: {
    color: '#FFF',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 3,
  },
  posicionaLogin: {
    textAlign: 'right',
    left: 318,
    bottom: 20,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#FFCE29',
  },
  bordaNome: {
    borderRadius: 150,
    width: 150,
    height:150,
    backgroundColor: '#4F4F4F',
    bottom: 150,
  },
  nomeLoja: {
    color: '#FFCE29', 
    fontSize: 30,
    top: 55,
    textAlign: 'center', 
  },
  areaRedes: {
    backgroundColor: '#4F4F4F',
    borderRadius: 20,
    width: 390,
    height: 40,
    top: 230,
  },
  decoraRedes: {
    color: '#FFF',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18,
  },
  posicionaFacebook: {
    textAlign: 'right',
    marginRight: 10,
    bottom: 20,
  },
  posicionaInstagram: {
    textAlign: 'right',
    marginRight: 10,
    bottom: 40,
    right: 25,
  },
  posicionaTwitter: {
    textAlign: 'right',
    marginRight: 10,
    bottom: 60,
    right: 50,
  },
})