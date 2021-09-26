import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import CustomListItem from '../components/CustomListItem'
import { auth } from '../firebase'

export default function HomeScreen({ navigation }) {

    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headeTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={signOut} >

                        <Button
                            raised
                            title="LogOut"
                            style={{ width: 100, }}
                            onPress={signOut}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity  >
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [navigation]);

    return (
        <SafeAreaView>
            <ScrollView><CustomListItem /></ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({})
