import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon, Button } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'


function UserGuest(props) {
    return (
        <View style={styles.container} >
            <Text style={styles.textTitle} > Lo sentimos debe iniciar sesión </Text>
            <FontAwesome name="lock"
                size={50}
            />
            <Text style={styles.text} > Por favor iniciar sesion para más contenido </Text>
            <View style={
                { width: "100%" }
            } >
                <Button 
                    title="Iniciar sesión"
                    onPress={
                        () => props.navigation.navigate('Login')
                    }
                />
            </View >
        </View>
    )
}
export default withNavigation(UserGuest)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    textTitle: {
        fontSize: 30,
        color: 'blue',
        justifyContent: "center"
    },
    text: {
        marginBottom: 10
    }
})