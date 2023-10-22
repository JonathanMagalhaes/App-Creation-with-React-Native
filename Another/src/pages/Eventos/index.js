import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Eventos(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" style={styles.subcontainer} delay={200}>
                <View style={styles.containerHeader}>
                    <Text style={styles.textHeader}>EVENTOS</Text>
                </View>
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
})