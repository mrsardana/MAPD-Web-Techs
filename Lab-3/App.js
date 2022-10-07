import { StyleSheet, Text, View, Image, Switch, ScrollView, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import Regform from './components/regform';
import UserList from './components/UserList';


export default function App() {


  return (

    <View style={styles.container}>
      <Text style={styles.title}>Lab3</Text>
      <UserList />

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    fontSize: 30,
  },
  input: {
    margin: 20,
    height: 45,
    borderWidth: 1,
    padding: 15,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  resultText: {
    paddingTop: 30,
    paddingBottom: 15,
    textAlign: "center",
    fontSize: 25,
    color: 'black'
  },
  label: {
    marginLeft: 15,
    fontSize: 20
  }

});
