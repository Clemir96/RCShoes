import React from 'react';
import { View, StyleSheet,  TouchableOpacity, Text, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ImageBackground } from 'react-native';

const App = () => {
  return ( 
   <ImageBackground style={styles.imageBackground}>
      <Image
         style={styles.imagemLogo}
         source={{
         uri: 'https://cdn.discordapp.com/attachments/902707643590787092/956336272828428360/Capturar.jpg',
      }}
      />
 
      <View style={styles.posicionaIcon}>
         <Icon name="user" size={80} color='#fff' style={styles.areaIcon}/>
      </View>

      <View style={styles.primeiroInput}>
         <TextInput style={styles.twoFactor} color='white' defaultValue="Enter e-mail or phone"/>
      </View>

      <View style={styles.segundoInput}>
         <TextInput color='white' defaultValue="Enter your password"/>
      </View>

      <View style={styles.areaLogin}>
         <TouchableOpacity style={styles.repostLogin}>
            <Text style={styles.estilizaLogin}>
               Login
            </Text>
         </TouchableOpacity>
      </View>

      <View style={styles.areaTexto}>
         <Text style={styles.textoLogin}>
            Realize seu cadastro
         </Text>
      </View>

   </ImageBackground> 
    

  );
}
export default App;



const styles = StyleSheet.create({
   imageBackground: {
      backgroundColor: '#FFCE29',
      width: '100%', 
      height: '100%',
   },
   imagemLogo: {
      height: '25%',
      width: '100%',
   },
   textoLogin: {
      color: '#fff',
      textAlign: 'center',
   },
   posicionaIcon: {
      alignItems: 'center',
   },
   areaIcon: {
      width: 100,
      height: 100,
      borderRadius: 100,
      paddingTop: 7,
      textAlign: 'center',
      backgroundColor: '#828282', 
      top: 50,
   },
   primeiroInput: {
      marginTop: 100,
      marginLeft: 10,
      borderRadius: 10,
      width: '90%',
      backgroundColor: '#828282',
   },
   segundoInput: {
      marginTop: 5,
      marginLeft: 10,
      width: '90%',
      borderRadius: 10,
      backgroundColor: '#828282',
   },
   areaLogin: {
      width: 150,
      height: 40,
      borderRadius: 30,
      marginTop: 50,
      backgroundColor: '#828282',
      alignItems: 'center',
      marginLeft: 130,
   },
   estilizaLogin: {
      textAlign: 'center',
      color: '#fff',
      marginTop: 10,
   },
   areaTexto: {
      alignItems: 'center',
      backgroundColor: '#828282',
      width: 300,
      left: 60,
      borderRadius: 5,
      marginTop: 70,
      padding: 10,
   },
})