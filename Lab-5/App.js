import React, { useState } from 'react';
import { Button, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [state, setstate] = React.useState('#eee')


  return (
    <SafeAreaView style={styles.safeArea}>
      <View backgroundColor={state} style={styles.container}>
        <View style={styles.groupOne}>
          <TouchableOpacity style={styles.button1} onPress={(green) => setstate('green')} >
            <Text style={styles.text}> Green</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={(red) => setstate("red")} >
            <Text style={styles.text}> Red </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.groupTwo}>
          <TouchableOpacity style={styles.button3} onPress={(purple) => setstate("purple")}>
            <Text style={styles.text}> Purple</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.button4} onPress={(orange) => setstate("orange")}>
            <Text style={styles.text}> Orange</Text>
          </TouchableOpacity>

        </View>

      </View >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 3,
    justifyContent: 'center'
  },
  groupOne: {

    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  groupTwo: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  button1: {
    borderRadius: 20,
    backgroundColor: "green",
    justifyContent: 'center',
    height: 45,
    width: 125,
  },
  button2: {
    borderRadius: 20,
    backgroundColor: "red",
    justifyContent: 'center',
    height: 45,
    width: 125,
  },
  button3: {
    borderRadius: 3,
    backgroundColor: "purple",
    justifyContent: 'center',
    height: 70,
    width: 190,
  },
  button4: {
    borderRadius: 3,
    backgroundColor: "orange",
    justifyContent: 'center',
    height: 70,
    width: 190,
  },
});
