import React from "react";
import { View, Image, Text, TouchableOpacity,Linking } from "react-native";
import styles from "./styles";
import Logo from "../assets/Logo.png";
import { Feather } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

export default function Detail() {
  const navigation = useNavigation();
  const message= 'Ola APAD'

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){ 
    MailComposer.composeAsync({
      subject: 'Heroi do caso: cadelinha',
      recipients:['ylhalemeida@gmail.com'],
      body:message,
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=+5532999393370&text=${message}`)
   }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <TouchableOpacity onPress ={navigateBack}>
          <Feather name='arrow-left' size={28} color='#e02041' />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
      <Text style={[styles.incidentProperty,{marginTop:0}]}>Ong:</Text>
            <Text style={styles.incidentValue}>APAD </Text>
      </View>
      <View syle={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi!</Text>
        <Text style={styles.heroDesc}>Contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}