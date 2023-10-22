import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Conta(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" style={styles.subcontainer} delay={200}>
                <View style={styles.containerHeader}>
                    <Text style={styles.textHeader}>SUA CONTA</Text>
                </View>
            </Animatable.View>
            <View style={styles.containerContent}>
                <Text style={styles.textContent}> Lorem ipsum</Text>
            </View>
            <Animatable.View animation="flipInX" delay={100}>
                <Text style={styles.footer} onPress ={()=> {
                    Linking.openURL('https://github.com/JonathanMagalhaes');
                }} >Desenvolvido por Jonathan Magalhães</Text>
                </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#74c4ec',
        flex: 1
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '14%',
        alignSelf: 'center'
      },
      subcontainer:{
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 6
      },
      textHeader:{
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      },
      containerContent:{
        backgroundColor: 'white',
        flex: 2,
        paddingLeft: 5,
        marginLeft: 5, 
        marginRight: 5,
        marginTop: 15,
        marginBottom: 25,
        borderRadius: 6
      },
      textContent:{
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Roboto',
        marginTop: '50%',
        alignSelf: 'center',
        color: '#a1a1a1',
      },
      footer:{
        fontsize: 14,
        color: '#6b7280',
        alignSelf: 'center',
        paddingTop: '3%',
        paddingBottom: '7%'
      }, 
})