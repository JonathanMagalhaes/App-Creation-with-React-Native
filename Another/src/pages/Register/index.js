import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

export default function Register(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" style={styles.containerHeader} delay={200}>
                <Text style={styles.message}>Registre-se!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm} delay={200}>
                <Text style={styles.title}>Email<Text style={{color: 'red'}}>*</Text></Text>
                <TextInput
                id="email"
                keyboardType="email-address" 
                placeholder='Informe seu melhor email...'
                style={styles.input}
                />

                <Text style={styles.title}>Senha<Text style={{color: 'red'}}>*</Text></Text>
                <TextInput
                id="psw"
                secureTextEntry={true}
                maxLength={32} 
                placeholder='Digite sua senha...'
                style={styles.input}
                />

                <Text style={styles.title}>Confirme sua Senha<Text style={{color: 'red'}}>*</Text></Text>
                <TextInput
                id="cpsw"
                secureTextEntry={true}
                maxLength={32}
                placeholder='Confirme sua senha...'
                style={styles.input}
                />

                <Text style={styles.title}>Telefone</Text>
                <TextInput
                id="tel" 
                keyboardType={'phone-pad'}
                maxLength={11}
                placeholder='(xx)xxxxx-xxxx'
                style={styles.input}
                />

                <TouchableOpacity style={styles.buttonRegister} onPress={() =>navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Registrar</Text>
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
      buttonRegister:{
        backgroundColor: '#509af7',
        width: '100%',
        borderRadius: 20,
        paddingVertical: 8,
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{
        fontSize: 18,
        color: '#efede3',
        fontWeight: 'bold'
      },
})
