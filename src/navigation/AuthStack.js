import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './../screen/login'

const AuthStack=createStackNavigator()

export default ()=>{
    return(
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name='Login' component={Login}/>
        </AuthStack.Navigator>
    )
}
