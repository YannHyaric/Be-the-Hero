import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import styles from "../Incidents/styles";
import Logo from "../assets/Logo.png";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

export default function Incidents() {
  const [incidents, setIncidents] = useState();
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Detail",{incident});
  }

  async function loadIncidents() {
    const response = await api.get("incidents");
    setIncidents(response.data);
    setTotal(response.headers["x-total-count"]);
  }

  useEffect(() => {
    loadIncidents;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo</Text>
      <Text style={styles.description}>Selecione um caso abaixo</Text>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>Ong:</Text>
        <Text style={styles.incidentValue}>Teste</Text>
        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>0</Text>
        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>
          R$ 0.00
        </Text>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={()=>navigateToDetail(incident)}
        >
          <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
          <Feather name="arrow-right" size={16} color="#E02041" />
        </TouchableOpacity>
      </View>


      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Ong:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            <Text style={styles.incidentProperty}>Ong:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
