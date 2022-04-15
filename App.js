import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import api from './src/services/Api';



export default function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/jeefzpiires")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <View style={styles.container}>
            <Text style={styles.title}>Consumindo Api</Text>
            <StatusBar style="auto" />

            <Text style={styles.titleUser}>Usuario: {user?.login}</Text>
            <Text style={styles.titleBio}>Bio: {user?.bio}</Text>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#c9b00c',
    marginTop: 200,
    borderRadius: 10,
    margin: 10,

  },
  titleUser: {
    fontSize: 24,
    color: '#c9b00c',
    margin: 100,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 2,
  },
  titleBio: {
    fontSize: 24,
    color: '#c9b55c',
    padding: 20,
  },
});
