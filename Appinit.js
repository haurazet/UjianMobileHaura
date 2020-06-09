import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './src/navigation/AuthStack'
import TabHome from './src/navigation/TabHome'
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native'
// import * as Animatable from 'react-native-animatable'
// import { Text } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
// import Axios from 'axios'
// import { API_URL } from './src/support/ApiUrl'
import { alreadyLogin, NotLoginYet } from './src/redux/actions'


const Appinit=(props)=>{

    const fetchdata = () =>{
        AsyncStorage.getItem('user')
                .then((res)=>{
                    props.alreadyLogin(res.data)
                    console.log('berhasil getitem')
                }).catch((err)=>{
                    props.NotLoginYet()
                    console.log(err)
                })
    }

    // const [loading,setLoading]=useState(true)
    
    // const fetchdata= async()=>{
    //     try {
    //         const token=await AsyncStorage.getItem('user')
    //         const options = {
    //             headers: {
    //                 'Authorization' : `Bearer ${token}`
    //             }
    //         }
    //         // console.log(token)
    //         Axios.post(`${API_URL}/user/keeplogin`, null, options)
    //         .then((res)=>{
    //             props.alreadyLogin(res.data)
    //         }).catch((err)=>{
    //             props.NotLoginYet()
    //         }).finally(()=>{
    //             setLoading(false)
    //         })
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    useEffect(()=>{
        fetchdata()
    },[])

    // if(loading){
    //     return(
    //         <View style={styles.LogcontainerStyle}>
    //             <Animatable.Text animation={'bounce'} iterationCount='infinite'>
    //                 <Text h3>Instagrim...</Text>
    //             </Animatable.Text>
    //         </View>
    //     )
    // }

    // const Auth=useSelector(state=>state.Auth)
    return(
        <NavigationContainer>
            {
                props.Auth.isLogin?
                <TabHome/>
                :
                <AuthStack/>
}
        </NavigationContainer>
    )
}

const styles=StyleSheet.create({
    LogcontainerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10
    }
})

const MapStateToProps=(state)=>{
    return{
        Auth:state.Auth,
        // error:state.Auth.errorRegister
    }
}

// export default Appinit

export default connect(MapStateToProps, {NotLoginYet, alreadyLogin})(Appinit)