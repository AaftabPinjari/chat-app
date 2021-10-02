import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { db } from '../firebase'

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Create a New Chat",
            headerBackTitle: "Chats",
        })
    }, [navigation])

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack()
        }).catch((error) => atert(error))
    }

    return (
        <View style={styles.container}>
            <Input placeholder="Name of the Chat"
                value={input}
                onChangeText={(text) => setInput(text)}
                leftIcon={
                    <Icon name='wechat' type="antdesign" size={24} color="black" />
                }
                onSubmitEditing={createChat}
            />
            <Button onPress={createChat} title="Create New Chat" />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    },
})
