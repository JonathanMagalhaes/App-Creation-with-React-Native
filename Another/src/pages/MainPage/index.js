import React from "react"
import { View, Text, StyleSheet, Linking, FlatList } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function MainPage(){
    const navigation = useNavigation();

    const CONTENT =[
      {
        id: 'MPYYj0Ys',
        title:'Conteúdo 1',
      },
      {
        id: 'EM6odSZd',
        title:'Conteúdo 2',
      },
      {
        id: 'EFtRstg4',
        title:'Conteúdo 3',
      },
      {
        id: 'oiXMGAiL',
        title:'Conteúdo 4',
      },
      {
        id: '7xesG38n',
        title:'Conteúdo 5',
      },
      {
        id: 'V3yUF6yL',
        title:'Conteúdo 6',
      },
    ];

    const Item = ({title}) => (
      <View style={styles.box}>
        <Text style={styles.boxText}>{title}</Text>
      </View>
    );

    return(
        <View style={styles.container}>
            <Animatable.View animation="lightSpeedIn" delay={200} style={styles.navbar}>
                <Text style={styles.message}>Menu</Text>
                <View style={styles.row}>
                    <Text style={styles.links} onPress={() =>navigation.navigate('Consultas')}>Consultas</Text>
                    <Text style={styles.links} onPress={() =>navigation.navigate('Eventos')}>Eventos</Text>
                    <Text style={styles.links} onPress={() =>navigation.navigate('FAQ')}>FAQ</Text>
                    <Text style={styles.links} onPress={() =>navigation.navigate('Pagamentos')}>Pagamentos</Text>
                    <Text style={styles.links} onPress={() =>navigation.navigate('Conta')}>Conta</Text>
                </View>
            </Animatable.View>
            
            <View style={styles.subcontainer}>
                <FlatList
                  data={CONTENT}
                  renderItem={({item}) => <Item title={item.title} />}
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
        flex: 1,
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        paddingTop: '7%'
      },
      navbar:{
        flex: 0.2,
        backgroundColor: '#FAF8FF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flex: 0.5,
        opacity: .8
      },
      links:{
        textDecorationStyle: 'none',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: '7%',
        alignSelf: 'center',
        paddingLeft: '4.3%',
      },
      row:{
        flexDirection: "row",
      },
      subcontainer:{
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
      boxText:{
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: '4%',
        paddingTop: '2%',
      },
      footer:{
        fontsize: 14,
        color: '#6b7280',
        alignSelf: 'center',
        paddingTop: '6%'
      },     
})
