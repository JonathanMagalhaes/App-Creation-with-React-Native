import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Eventos(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Página de Eventos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#74c4ec',
        flex: 1
    },
})