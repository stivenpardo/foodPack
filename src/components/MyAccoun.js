import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function MyAccoun(props) {

    return (
        <View style={styles.container}>
            <Text> textInComponent </Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        // backgroundColor:'#777777'
    }
})