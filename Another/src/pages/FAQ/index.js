import React from "react"
import { View, Text, StyleSheet, FlatList, } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Faq(){
    const navigation = useNavigation();

    const CONTENT =[
      {
        id: 'yzrP3BFX',
        title:'Pergunta:',
        answer: 'Resposta:',
      },
      {
        id: 'bYLeB7Jr',
        title:'Pergunta:',
        answer: 'Resposta:',
      },
      {
        id: 'fU0iLHd3',
        title:'Pergunta:',
        answer: 'Resposta:',
      },
      {
        id: 'fAXqNSFE',
        title:'Pergunta:',
        answer: 'Resposta:',
      },
      {
        id: 'EMhhMIZp',
        title:'Pergunta:',
        answer: 'Resposta:',
      },
      {
        id: 'Zpb01qet',
        title:'Pergunta:',
        answer: 'Resposta:',
      },
    ];

    const Item = ({title}, {answer}) => (
      <View style={styles.box}>
        <Text style={styles.boxQ}>{title}</Text>
        <Text style={styles.boxA}>{answer}</Text>
      </View>
    );
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInDown" style={styles.subcontainer} delay={200}>
                <View style={styles.containerHeader}>
                    <Text style={styles.textHeader}>FAQ</Text>
                </View>
            </Animatable.View>

            <View style={styles.containerContent}>
                <FlatList
                  data={CONTENT}
                  renderItem={({item}) => 
                  <View>
                    <Item title={item.title}/>   
                  </View> 
                }
                  keyExtractor={item => item.id}
                />
                <Animatable.View animation="flipInX" delay={100}>
                <Text style={styles.footer} onPress ={()=> {
                    Linking.openURL('https://github.com/JonathanMagalhaes');
                }} >Desenvolvido por Jonathan Magalhães</Text>
                </Animatable.View>
                </View>
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
        flex: 2,
        paddingTop: '3%',
        flexDirection: 'column',
        padding: '2%',
      },
      box : {
        backgroundColor: 'white',
        height: 175,
        width: '100%',
        borderRadius: 6,
        marginTop: '3%',
      },
      boxQ:{
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: '4%',
        paddingTop: '2%',
      },
      boxA:{
        fontSize: 14,
        fontWeight: '400',
        paddingLeft: '4%',
        paddingTop: '2%',
        color: '#a1a1a1'
      },
      footer:{
        fontsize: 14,
        color: '#6b7280',
        alignSelf: 'center',
        paddingTop: '10%'
      },  
})