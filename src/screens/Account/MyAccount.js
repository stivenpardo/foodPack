import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import UserLoged from './UserLoged'
import UserGuest from './UserGuest'
import Register from './Register'

//Components
import Loading from '../../components/Loading'
import * as firebase from 'firebase';

export default function MyAccount() {
    const [loged, setLoged ] = useState(null)

    useEffect( ()=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(!user){
                setLoged(false)
            }else{
                setLoged(true)
            }
        })
    });
    console.log(loged)

    if (loged == null){
        return <Loading />
    }

    return loged ? <UserLoged/> : <UserGuest/>;
    // if (loged) {
    //     return <UserLoged/>
    // }
    // else {
    //     return <UserGuest/>
    // }

}
