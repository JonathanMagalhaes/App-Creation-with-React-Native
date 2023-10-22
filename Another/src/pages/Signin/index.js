import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>


      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput 
          id="email"
          placeholder='Digite um email...'
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
        id="psw"
          secureTextEntry={true}
          maxLength={32} 
          placeholder='Digite sua senha...'
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonSignin} onPress={() => navigation.navigate('MainPage')}>
          <Text id="signinBtn" style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() =>navigation.navigate('Register')}>
          <Text style={styles.registerText}>Não possui uma conta? <Text style={styles.registerSubtext}>Cadastre-se</Text></Text>
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
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  containerForm:{
    backgroundColor: '#ebf6f3',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title:{
    fontSize: 20,
    marginTop: 28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  buttonSignin:{
    backgroundColor: '#509af7',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 18,
    color: '#efede3',
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText:{
    color: '#a1a1a1'
  },
  registerSubtext:{
    color: '#a1a1a1',
    fontWeight: 'bold',
  }
})

/* 
  color: '#a1b1a3', 
  fontWeight: 'italic',
  fontSize: 18,
  marginTop: 14,
  padding: 5 10,
  alignSelf: 'center',
  justifyContent: 'center',


*/