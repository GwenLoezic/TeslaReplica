import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './Components/CarsList/index.js';
import Header from './Components/Header/index.js';

export default function App() {
  return (
    <View style={styles.container}>

    <Header/>

    <CarsList />

      <StatusBar style="auto" />

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
});