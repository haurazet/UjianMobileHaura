import Axios from 'axios'
import {API_URL} from './../../support/ApiUrl'
import AsyncStorage from '@react-native-community/async-storage';

export const alreadyLogin = (user) => {
    return {
        type: 'USER_LOGIN',
        payload: user
    }
}

export const UserLogout=()=>{
    return async (dispatch)=>{
        await AsyncStorage.removeItem('usertoken')
        dispatch({type:'USER_LOGOUT'})
    }
}

export const NotLoginYet = () =>{
    return {
        type: 'USER_LOGOUT'
    }
}


