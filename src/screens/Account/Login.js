import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image, Input, Icon, SocialIcon, Divider } from 'react-native-elements';
import Logo from '../../../assets/img/Logo.png'
export default function Login(props) {
    console.log(props)
    return (
        <View style={styles.container} >
            <Text style={styles.text}> FoodPack </Text>
            <Image style={styles.img} source={Logo} />
            <Text style={{ marginTop: 20, fontSize: 20 }}> Login </Text>
            <View style={{ width: "100%", marginTop:10 }}>
                <Input
                    placeholder='Email'
                    rightIcon={
                        <Icon
                            name='envelope'
                            type='font-awesome'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Password'
                    rightIcon={
                        <Icon
                            name='lock'
                            type='font-awesome'
                            size={24}
                            color='black'
                        />
                    }
                />
            </View>
            <View style={[styles.section, { flexDirection: "row" }]}>
                <Text style={{ fontSize: 15 }}> Don't you have account?</Text>
                <Text style={styles.textInfo} onPress={() => props.navigation.navigate('Register')}> Sing up</Text>
            </View>

            <Divider style={[styles.section, { width: "100%" }]} />

            <View style={[styles.section, { flexDirection: 'row', justifyContent: "space-around" }]}>
                <SocialIcon
                    style={styles.socialIcon}
                    title='Facebook'
                    button
                    type='facebook'
                />
                <SocialIcon
                    style={styles.socialIcon}
                    title='Google'
                    button
                    type='google'
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 20
    },
    text: {
        color: "#555555",
        fontSize: 40,
    },
    textInfo: {
        color: "blue",
        fontSize: 15,
        marginLeft: 5
    },
    socialIcon: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    section: {
        marginVertical: 10
    }

})

