import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import database from "./src/config/firebaseconfig";


export default function App() {
  const [dados, setDados] = useState([]);
  const [descricao, setDescricao] = useState('');


  //conexão com Firabase Storage
  useEffect(() => {
    database
    .collection("teste")
    .onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id });
      });
      setDados(list);
    });

    console.log(list)
  }, []);


  // Função de adição de dados 
  function addDados() {
    database.collection('dados').add(
      {descricao}
    )
  }


  return (
    <View style={styles.container}>
     {dados.map((dados) =>{
      return <Text key={dados.id}>{dados.descricao} </Text>
     })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});