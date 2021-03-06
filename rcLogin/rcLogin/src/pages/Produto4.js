import React from 'react';
import { View, StyleSheet,  TouchableOpacity, Text, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ImageBackground } from 'react-native';

const Produto4 = () => {
  return ( 
   <ImageBackground style={styles.imageBackground}>
      <Image
         style={styles.imagemLogo}
         source={{
            uri: 'https://cdn.discordapp.com/attachments/902707643590787092/956336272828428360/Capturar.jpg',
         }}
      />

      <View style={styles.areaProduto}>
         <Image style={styles.imagemProduto}
            source={{
               uri: 'https://artwalk.vteximg.com.br/arquivos/ids/229172-600-600/Tenis-Nike-Air-Force-1-07-Le-Masculino-Branco.jpg?v=637438982802100000',
         }}/>
         <Text style={styles.textoProduto}>
            Tênis Nike Air Force 1
         </Text> 
         <Text style={styles.valorProduto}>
            R$ 550,00
         </Text>

         <View style={styles.tamanho1}>
            <Text style={styles.textoTamanho1}>39</Text>
         </View> 

         <View style={styles.tamanho2}>
            <Text style={styles.textoTamanho1}>40</Text>
         </View> 
         <View style={styles.tamanho3}>
            <Text style={styles.textoTamanho1}>41</Text>
         </View>  

         <View style={styles.tamanho4}>
           <Text style={styles.textoTamanho1}>42</Text>
         </View> 

         <Text style={styles.textoDetalhe}>
            Detalhes do produto:
         </Text>

         <Text style={styles.descriocaoProduto}>
            Se o seu estilo é descolado, mas você gosta de estar sempre preparado para qualquer situação.
         </Text>

         <View style={styles.botaoCompra}>
            <Button
               title="Comprar"
               color='#FFCE29'
               onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
         </View>

      </View>

    </ImageBackground>
  );
}

export default Produto4;



const styles = StyleSheet.create({
   imageBackground: {
      backgroundColor: '#4F4F4F',
      width: '100%', 
      height: '100%',
   },
   imagemLogo: {
      height: '10%',
      width: '100%',
   },
   areaProduto: {
      backgroundColor: '#8D8D8D',
      height: '100%',
   },
   imagemProduto: {
      width: '98%',
      height: '35%',
      marginLeft: 4,
      marginTop: 5,
      borderRadius: 3,
   },
   textoProduto: {
      color: '#FFCE29',
      marginTop: 10,
      fontSize: 25,
      marginLeft: 10,
    },
    valorProduto: {
      color: '#363636',
      marginTop: 5,
      marginLeft: 10,
      fontSize: 18,
      marginBottom: 10,
    },
    tamanho1: {
      backgroundColor: '#FFCE29',
      width: 25,
      height: 25,
      borderRadius: 5, 
      left: 250,
    },
    textoTamanho1: {
      color: '#fff',
      textAlign: 'center',
      top: 2,
    },
    tamanho2: {
      backgroundColor: '#FFCE29',
      width: 25,
      height: 25,
      borderRadius: 5, 
      left: 285,
      bottom: 25,
    },
    textoTamanho2: {
      color: '#fff',
      textAlign: 'center',
      top: 2,
    },
    tamanho3: {
      backgroundColor: '#FFCE29',
      width: 25,
      height: 25,
      borderRadius: 5, 
      left: 320,
      bottom: 50,
    },
    textoTamanho3: {
      color: '#fff',
      textAlign: 'center',
      top: 2,
    },
    tamanho4: {
      backgroundColor: '#FFCE29',
      width: 25,
      height: 25,
      borderRadius: 5, 
      left: 355,
      bottom: 75,
    },
    textoTamanho4: {
      color: '#fff',
      textAlign: 'center',
      top: 2,
    },
    textoDetalhe: {
      color: '#000',
      bottom: 50,
      marginLeft: 5,
      fontSize: 18,
      textAlign: 'center',
    },
    descriocaoProduto: {
      backgroundColor:  '#00000015',
      height: '15%',
      borderRadius: 10,
      padding: 7,
      fontSize: 18,
      marginLeft: 10,
      marginRight: 10,
      color: '#363636',
      bottom: 30,
    },
    botaoCompra: {
      bottom: 20,
      width: '100%',
      alignItems: 'center',
    },
 })