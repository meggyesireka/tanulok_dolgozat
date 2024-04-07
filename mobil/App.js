// File: App.js
// Author: Meggyesi Réka
// Copyright: 2024, Meggyesi Réka
// Group: Szoft II/1/E
// Date: 2024-04-07
// Github: https://github.com/meggyesireka/


import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { lekerTanulok } from './services/tanulokServices';
/// import { FlatList } from 'react-native-web';

export default function App() {

  const[tanulok, beallitTanulok] = useState([]);

  useEffect(() => {
    lekerTanulok().then(data => {
      console.log(data)
      beallitTanulok(data)
    });
  }, []);

  return(
    <View style={styles.container}>
      <Text>grtdf</Text>
      <FlatList
      data = {tanulok}
      renderItem={ ({item}) => (
        <View style={styles.tanulokLista}>
          <Text>{item.nev}</Text>

          <View style={styles.footer}>
            <Text style={styles.nameText}>Név: {item.name}</Text>
            <Text style={styles.cityText}>Város: {item.city}</Text>
            <Text style={styles.birthText}>Születési dátum: {item.birth}</Text>
            <Text style={styles.groupIdText}>Csoport ID: {item.groupId}</Text>
          </View>

        </View>
      )}/>
      <StatusBar style="auto"/>
    </View>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tanulokLista:{
    border: 'solid 3px black',
    padding: 5,
    margin: 5,
    backgroundColor: 'silver'
  },
  nameText: {
    fontSize: 10,
    textAlign: 'center',
  },
  cityText: {
    fontSize: 8,
    textAlign: 'center',
  },
  birthTextText: {
    fontSize: 8,
    textAlign: 'center',
  },
  groupIdText: {
    fontSize: 8,
    textAlign: 'center',
  },


  footer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

