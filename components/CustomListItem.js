import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar rounded source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
            }}></Avatar>
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 800 }}>{chatName}</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}
                    ellipsizeMode="tail"
                >Test Subtitle</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
