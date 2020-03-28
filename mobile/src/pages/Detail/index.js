import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Styles from  './styles';
import logoImg from '../../assets/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const formatedValue = Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' }).format(incident.value)
    
    const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de ajudar o caso:[${incident.title}] com o valor de ${formatedValue}`;

    function navigateBack() {
        navigation.goBack();
    }
    
    function SendMail() {
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function SendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.SendWhatsapp}&text=${message}`);
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="E02041" />
                </TouchableOpacity>
            </View>    
            <View style={Styles.incident}>
                <Text style={[Styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
                <Text style={Styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf} </Text>

                <Text style={Styles.incidentProperty}>CASO:</Text>
                <Text style={Styles.incidentValue}>{incident.title}</Text>

                <Text style={Styles.incidentProperty}>VALOR:</Text>
                <Text style={Styles.incidentValue}>{formatedValue}</Text>
            </View>      
            <View style={Styles.contactBox} >
                <Text style={Styles.heroTitle}>Salve o dia!</Text>
                <Text style={Styles.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={Styles.heroDescription}>Entre em contato:</Text>
                <View style={Styles.actions}>
                    <TouchableOpacity style={Styles.action} onPress={SendWhatsapp}>
                        <Text style={Styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.action} onPress={SendMail}>
                        <Text style={Styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        </View>
    );
}