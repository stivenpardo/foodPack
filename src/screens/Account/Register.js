import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Input, Icon, SocialIcon, Divider, Button, Overlay, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo,Feather } from '@expo/vector-icons'
export default function Register(props) {
    console.log(props)
    const [acceptTerms, setAcceptTerms] = useState(false)
    const [seeTerms, setSeeTerms] = useState(false)
    const [hiddenPassword,setHiddenPaswword] = useState(false)


    return (
        <View style={styles.container}>
            <Text style={styles.text}> Join us </Text>
            <Input
                placeholder="email"
                label="Your email address"
                labelStyle={{ fontSize: 18, color: '#4567ff' }}
                rightIcon={
                    <Icon
                        name="email"
                        type="entypo"
                        size={20}
                    // containerStyle={{marginRight:10}}
                    />
                }
            />
            <Input
                label="Create password"
                labelStyle={{ fontSize: 18, color: '#4567ff' }}
                placeholder="email"
                rightIcon={
                    <Feather
                        name="eye"
                        size={20}
                    // containerStyle={{marginRight:10}}
                    />
                }
            />
            <Input
                label="Confirm password"
                labelStyle={{ fontSize: 18, color: '#4567ff' }}
                placeholder="email"
                rightIcon={
                    <Feather
                        name={hiddenPassword ? "eye" : "eye-off"}
                        size={20}
                    // containerStyle={{marginRight:10}}
                    />
                }
            />
            <View style={styles.checkTerms}>
                <CheckBox onPress={() => setAcceptTerms(!acceptTerms)} checked={acceptTerms}/>
                <Text onPress={() => setSeeTerms(true)} >Accept conditions and terms</Text>
            </View>
            {/* Aplicated overlap for show conditions and terms  */}
            {/* <Overlay isVisible={seeTerms} onBackdropPress={() => setSeeTerms(false)}>
                <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:24,marginBottom:10}}>Terms and conditions</Text>
                    <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
                </ScrollView>
            </Overlay> */}
            <View style={{ width: "100%" }}  >
                <Button
                    title="Sing Up"
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
    text: {
        color: "#555555",
        fontSize: 40,
    },
    checkTerms: {
        flexDirection: "row",
        alignItems: "center"
    }
})