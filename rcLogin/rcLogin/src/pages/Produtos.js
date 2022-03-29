import React from 'react';
import { View, StyleSheet,  TouchableOpacity, Text, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ImageBackground } from 'react-native';

const Produtos = ({ navigation }) => {
  return ( 
  <ImageBackground style={styles.imageBackground}>
    <Image
      style={styles.imagemLogo}
      source={{
        uri: 'https://cdn.discordapp.com/attachments/902707643590787092/956336272828428360/Capturar.jpg',
      }}
    />

    <View style={styles.areaProdutos}>
      <View style={styles.areaNike}>
        <Image style={styles.tenisNike}
          source={{
            uri: 'https://static.netshoes.com.br/produtos/tenis-nike-court-division-mid-masculino/06/2IC-7124-006/2IC-7124-006_zoom1.jpg?ts=1644879188&ims=544x',
          }}/>
        <Text style={styles.textoNike}>
          Tenis Nike Court Division Mid Masculino - Preto
        </Text> 
        <Text style={styles.valorNike}>
          R$ 350,00
        </Text> 
        <Button
          title="Comprar"
          color='#FFCE29'
          onPress={ () => { navigation.navigate('Produto1') } }
        />
      </View>

      <View style={styles.areaAdidas}>
        <Image style={styles.tenisAdidas}
          source={{
            uri: 'https://www.iguatemi365.com/media/catalog/product/cache/c8f7edaf5dc00b1707e4ae9eef3c4b2e/s/n/snk_210616_09_250-01.jpg',
        }}/>
        <Text style={styles.textoAdidas}>
          Tenis ZX 2K BOOST ADIDAS
        </Text> 
        <Text style={styles.valorAdidas}>
          R$ 750,00
        </Text>
        <Button
          title="Comprar"
          color='#FFCE29'
          onPress={ () => { navigation.navigate('Produto2') } }
        />
      </View>

      <View style={styles.areaVans}>
        <Image style={styles.tenisVans}
          source={{
            uri: 'https://secure-static.vans.com.br/medias/sys_master/vans/vans/h1f/hc6/h00/h00/9592308957214/1002001070011U-01-BASEIMAGE-Midres.jpg',
          }}/>
          <Text style={styles.textoVans}>
            Tenis OLD SKOOL
          </Text> 
          <Text style={styles.valorVans}>
            R$ 329,00
          </Text>
          <Button
            title="Comprar"
            color='#FFCE29'
            onPress={ () => { navigation.navigate('Produto3') } }
          />
        </View>

        <View style={styles.areaAir}>
          <Image style={styles.tenisAir}
            source={{
              uri: 'https://artwalk.vteximg.com.br/arquivos/ids/229172-600-600/Tenis-Nike-Air-Force-1-07-Le-Masculino-Branco.jpg?v=637438982802100000',
            }}/>
          <Text style={styles.textoAir}>
            Tenis Nike Air Force 1
          </Text> 
          <Text style={styles.valorAir}>
            R$ 550,00
          </Text>
            <Button
              title="Comprar"
              color='#FFCE29'
              onPress={ () => { navigation.navigate('Produto4') } }
            />
        </View>
        
      </View>

    </ImageBackground>
  );
}

export default Produtos;



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
  areaProdutos: {
    backgroundColor: '#FFCE29',
    width: '100%',
    height: 550,
    top: 1,
    flexDisplay: 'row',
  },
  tenisNike: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  areaNike: {
    backgroundColor: '#4F4F4F',
    width: 180,
    height: 260,
    marginLeft: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  textoNike: {
    color: '#fff'
  },
  valorNike: {
    color: '#fff',
    marginTop: 5,
    marginBottom: 8,
  },
  areaAdidas: {
    backgroundColor: '#4F4F4F',
    width: 180,
    height: 260,
    left: 210,
    bottom: 260,
    alignItems: 'center',
  },
  tenisAdidas: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  textoAdidas: {
    color: '#fff'
  },
  valorAdidas: {
    color: '#fff',
    marginTop: 21,
    marginBottom: 8,
  },
  areaVans: {
    backgroundColor: '#4F4F4F',
    width: 180,
    height: 260,
    left: 15,
    bottom: 250,
    alignItems: 'center',
  },
  tenisVans: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  textoVans: {
    color: '#fff'
  },
  valorVans: {
    color: '#fff',
    marginTop: 21,
    marginBottom: 8,
  },
  areaAir: {
    backgroundColor: '#4F4F4F',
    width: 180,
    height: 260,
    left: 210,
    bottom: 510,
    alignItems: 'center',
  },
  tenisAir: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  textoAir: {
    color: '#fff'
  },
  valorAir: {
    color: '#fff',
    marginTop: 21,
    marginBottom: 8,
  },
})