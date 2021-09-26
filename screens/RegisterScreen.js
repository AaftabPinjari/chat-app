import { StatusBar } from 'expo-status-bar'
import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Text, Image, Input, Button } from 'react-native-elements'
import { auth } from '../firebase'

export default function RegisterScreen({ navigation }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login"
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password).then(
            authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    profileURL: imageUrl ||
                        "https://pic.onlinewebfonts.com/svg/img_258083.png"
                })
            }
        ).catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal Account
            </Text>
            {/*<Image
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
                }}
                style={{ width: 200, height: 200 }}
            />*/}
            <View style={styles.registerContainer}>
                <Input placeholder="Full Name" autofocus type="text" value={name}
                    onChangeText={text => setName(text)} />
                <Input placeholder="Email" autofocus type="email" value={email}
                    onChangeText={text => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry type="password" value={password}
                    onChangeText={text => setPassword(text)} />
                <Input placeholder="Profile Picture URL (Optional)" autofocus type="text" value={imageUrl}
                    onChangeText={text => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button title="Register" raised onPress={register} containerStyle={styles.button} />
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
    registerContainer: {},
    button: {
        width: 200,
        marginTop: 10
    },

})


