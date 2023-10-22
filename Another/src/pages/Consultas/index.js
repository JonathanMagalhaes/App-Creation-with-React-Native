import React, {useState} from "react"
import { Alert, Modal, Pressable, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Consultas(){
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Formulário</Text>
                        <View>
                            <Text style={styles.formText}>Nome</Text>
                            <TextInput style={styles.formInput} placeholder="Seu nome..."></TextInput>

                            <Text style={styles.formText}>Sobrenome</Text>
                            <TextInput style={styles.formInput} placeholder="Seu sobrenome..."></TextInput>

                            <Text style={styles.formText}>Modalidade</Text>
                            <TextInput style={styles.formInput} placeholder="Presencial ou Online?"></TextInput>
                        </View> 

                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      Alert.alert(
                        '',
                        'O formulário foi enviado com sucesso!'
                        );
                    setModalVisible(!modalVisible)}}>
                        <Text style={styles.textStyle}>Enviar</Text>
                    </Pressable>
                </View>
            </Modal>


            <Animatable.View animation="fadeInDown" style={styles.subcontainer} delay={200}>
                <View style={styles.containerHeader}>
                    <Text style={styles.textHeader}>SUAS CONSULTAS</Text>
                </View>
            </Animatable.View>

            <View style={styles.containerContent}>
                <Text style={styles.textContent}>No momento você ainda não marcou nenhuma consulta...</Text>
                <Text style={styles.subtextContent}>Deseja marcar uma agora? Aperte no botão abaixo!</Text>
                <TouchableOpacity style={styles.buttonContent} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Marcar consulta</Text>
                </TouchableOpacity>
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
      },
      subtextContent:{
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'Roboto',
        marginTop: 20,
        alignSelf: 'center',
      },
      buttonContent:{
        backgroundColor: '#509af7',
        width: '50%',
        borderRadius: 6,
        paddingVertical: 10,
        marginHorizontal: '24.2%',
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
      },
      modalView: {
        margin: 20,
        marginTop: 210,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      button: {
        borderRadius: 6,
        padding: 10,
        marginTop: 20,
        width: '50%'
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      formText:{
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '600',
        marginTop: 10
      },
      formInput:{
        marginVertical: 5,
        borderBottomWidth: 1,
      },
      footer:{
        fontsize: 14,
        color: '#6b7280',
        alignSelf: 'center',
        paddingTop: '3%',
        paddingBottom: '7%'
      },  
})