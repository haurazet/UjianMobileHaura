//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon, Input,  } from 'react-native-elements'
// import { State } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { alreadyLogin } from './../redux/actions'
import AsyncStorage from '@react-native-community/async-storage';


// create a component
const Login = ({alreadyLogin, Auth}) => {

    const [username, setusername]=useState('')
    console.log(username)

    const onLoginPress=()=>{
        if(username!==''){
            alreadyLogin(username)
            AsyncStorage.setItem('user', username)
            .then((res)=>{
                console.log('berhasil setitem')
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    return (
        <View style={styles.container}>
            <Icon
                name='android1'
                type='antdesign'
                color='#3DDC84'
                iconStyle={{fontSize:156}}
                />
            <Input
                placeholder='Username'
                value={username}
                onChangeText={(text)=>setusername(text)}
                />
            <Button
                onPress={onLoginPress}
                title="Login"
                color="#3DDC84"
                // accessibilityLabel="Learn more about this purple button"
                />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccdcf',
    },
});

const MapStateToProps=({Auth})=>{
    return{
        Auth:Auth
    }
}

//make this component available to the app
export default connect(MapStateToProps,{alreadyLogin}) (Login);
