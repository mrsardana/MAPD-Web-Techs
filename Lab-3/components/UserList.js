import React from 'react';
import { View, Text, Button, Switch, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class UserList extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {

    }

    fetchUserData = async () => {
        fetch("").then(response => response.json()).
            then((jsonResponse) => { this.setState({ data: jsonResponse }) }).
            catch(error => console.log(error))
    }

    render() {

        const friends = [
            { name: 'Mary' },
            { name: 'John' },
            { name: 'Lee' },
            { name: 'James' },
        ]
        return
        (
            <View style={styles.regform}>
                <FileList data={friends}
                    renderItem={(element) => { console.log(element) }}

                />
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

