import { StyleSheet, Text, View, TextInput, TextComponent, Button, Switch } from 'react-native';
import React, { useState } from 'react';

function TwoTexts(props) {
  return (
    <View>
      <Text style={styles.textView}>{props.name} {props.value}</Text>
    </View>
  )
}

export default function App() {
  const [value, setValue] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  if (isEnabled) {
    return (
      <View style={styles.container} backgroundColor='#121'>
        <Text style={styles.forText}>Web Techs Lab 2</Text>
        <Text></Text>
        <Text></Text>
        <TextInput style={styles.inputLabel} clearTextOnFocus='true' onChangeText={text => setValue(text)}>{value}</TextInput>
        <Text style={styles.textView}>{value}</Text>
        <Button title='Clear' onPress={() => setValue('')}></Button>
        <Switch
          ios_backgroundColor="#000"
          onValueChange={toggleSwitch}
          value={isEnabled}>
        </Switch>
      </View >
    );
  }

  else {
    return (
      <View style={styles.container} backgroundColor='#fff'>
        <Text style={styles.forText}>Web Techs Lab 2</Text>
        <Text></Text>
        <Text></Text>
        <TextInput style={styles.inputLabel} clearTextOnFocus='true' onChangeText={text => setValue(text)}>{value}</TextInput>
        <Text style={styles.textView}>{value}</Text>
        <Button title='Clear' onPress={() => setValue('')}></Button>
        <Switch
          ios_backgroundColor="#000"
          onValueChange={toggleSwitch}
          value={isEnabled}>
        </Switch>
      </View >
    );
  }
  // return (
  //   <View style={styles.container} backgroundColor='#fff'>
  //     <Text style={styles.forText}>Web Techs Lab 2</Text>
  //     <Text></Text>
  //     <Text></Text>
  //     <TextInput style={styles.inputLabel} clearTextOnFocus='true' onChangeText={text => setValue(text)}>{value}</TextInput>
  //     <Text style={styles.textView}>{value}</Text>
  //     <Button title='Clear' onPress={() => setValue('')}></Button>
  //     <Switch
  //       ios_backgroundColor="#000"
  //       onValueChange={toggleSwitch}
  //       value={isEnabled}>
  //     </Switch>
  //   </View >
  // );
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column'

  },
  forText: {
    fontSize: 40,
    color: 'grey',
  },
  textView: {
    fontSize: 20,
    color: 'black',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#0f0',
  },
  inputLabel: {
    fontSize: 25,
    color: 'black',
    borderWidth: 2,
    width: '95%',
    backgroundColor: '#f00',

  }

});
