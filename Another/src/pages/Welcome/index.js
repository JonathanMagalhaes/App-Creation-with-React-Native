import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image 
          delay={200}
          animation="flipInY"
          source={require('../../assets/logoDix.png')}
          style={{width:'100%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={500} animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.titleWelcome}>Deixe fluir a energia universal!</Text>
        <Text style={styles.subtitleWelcome}>Faça o login para começar</Text>

        <TouchableOpacity 
          style={styles.buttonWelcome}
          onPress={() =>navigation.navigate('SignIn')}
          >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#74c4ec',
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#74c4ec',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm:{
    flex: 1.5,
    backgroundColor: '#ebf6f3',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  titleWelcome:{
    fontSize: 24,
    fontWeight: '500',
    marginTop: 36,
    marginBottom: 15,
  },
  subtitleWelcome:{
    color: '#a1a1a1',
    fontSize: 17,
  },
  buttonWelcome:{
    position: 'absolute',
    backgroundColor: '#509af7',
    borderRadius: 30,
    paddingVertical: 8,
    paddingTop: 12,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  buttonText:{
    fontSize: 20,
    color: '#efede3',
    fontWeight: 'bold'
  }
})