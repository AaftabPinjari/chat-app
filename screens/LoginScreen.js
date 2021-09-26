import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Image, Input, Button } from 'react-native-elements'
import { auth } from '../firebase'

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error.message));
    }

    return (
        <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
                }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.loginContainer}>
                <Input placeholder="Email" autofocus type="email" value={email}
                    onChangeText={text => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry type="password" value={password}
                    onChangeText={text => setPassword(text)} />
            </View>
            <Button title="Login" onPress={signIn} containerStyle={styles.button} />
            <Button title="Register" onPress={() => navigation.navigate("Register")} type="outline" containerStyle={styles.button} />
            <View style={{ height: "1px" }} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
    },
    loginContainer: {},
    button: {
        width: 200,
        marginTop: 10
    },

})


