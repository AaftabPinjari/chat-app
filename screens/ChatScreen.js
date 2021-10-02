import React, { useLayoutEffect } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

const ChatScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.chatName,
            headerBackTitleVisibile: false,
            headerTitleAlign: "left",
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,
                    }}>
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
