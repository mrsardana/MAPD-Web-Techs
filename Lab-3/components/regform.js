import React from 'react';
import { View, Text, Button, Switch, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class Regform extends React.Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    }

    fName = (text) => this.setState({ fname: text })
    lName = (text) => this.setState({ lname: text })
    Email = (text) => this.setState({ email: text })
    Password = (text) => this.setState({ password: text })

    onSignUpClicked = () => {
        alert("Name is " + this.state.fname + " " + this.state.lname + " and Email is " + this.state.email)
    }
    onClearButtonClicked = () => {
        alert("Are you sure you want to Clear")
        this.setState({ fname: '', lname: '', email: '', password: '' })
    }

    render() {

        return (
            <View style={styles.regform}>
                <Text style={styles.header}>  Registration Form</Text>
                <TextInput onChangeText={this.fName} style={styles.textinput} placeholder="Enter Your First Name" >{this.state.fname}</TextInput>
                <TextInput onChangeText={this.lName} style={styles.textinput} placeholder="Enter Your Last Name">{this.state.lname}</TextInput>
                <TextInput onChangeText={this.Email} style={styles.textinput} placeholder="Enter Your Email">{this.state.email}</TextInput>
                <TextInput onChangeText={this.Password} secureTextEntry={true} style={styles.textinput} placeholder="Enter Your Password">{this.state.password}</TextInput>
                <TouchableOpacity style={styles.button} onPress={this.onSignUpClicked}>
                    <Text style={styles.btntext}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.onClearButtonClicked}>
                    <Text style={styles.btntext}>Clear</Text>
                </TouchableOpacity>

            </View>
        )

    };
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
        fontSize: 30,
    },
    header: {
        color: '#fff',
        fontSize: 24,
        paddingBottom: 10,
        backgroundColor: '#199187',
        alignItems: 'center',
        marginBottom: 40,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#000',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 10,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

