import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Image, Input, Icon, SocialIcon, Tile } from 'react-native-elements';

export default function Login(props) {
    return (
        <View style={styles.container} >
            <View style={styles.setection, { marginTop: 30, alignItems: "center" }}>
                <Tile
                    imageSrc={{ uri: 'https://image.shutterstock.com/image-vector/healthy-food-banner-vegetables-cafe-600w-626693570.jpg' }}
                    title="foodPack"
                    featured
                    caption="The best Food"
                    width={280}
                    height={200}
                // containerStyle={{backgroundColor:'#333333aa', title:'red'}}

                />
                <Text style={{ marginTop: 20, fontSize: 20 }}> Login </Text>

            </View>
            <View style={styles.setection, { marginTop: 10, marginBottom: 30 }}>
                <Input
                    placeholder='Email'
                    leftIcon={
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
                    leftIcon={
                        <Icon
                            name='lock'
                            type='font-awesome'
                            size={24}
                            color='black'
                        />
                    }
                />
            </View>
            <View style={styles.setection, { flexDirection: 'row', justifyContent: "space-around" }}>
                <SocialIcon
                    title='Facebook'
                    button
                    type='facebook'
                />
                <SocialIcon
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
        // height:500,
        // width:290,
        // alignItems: "center",
        // justifyContent: 'center',
        // backgroundColor: "red",
        padding: 20,

    },
    setection: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

})

