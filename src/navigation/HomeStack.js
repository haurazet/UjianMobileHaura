import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './../screen/Home'
import Detail from './../screen/Detail'

const AuthStack=createStackNavigator()

export default ()=>{
    return(
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name='Home' component={Home}/>
            <AuthStack.Screen name='Detail' component={Detail}/>
        </AuthStack.Navigator>
    )
}