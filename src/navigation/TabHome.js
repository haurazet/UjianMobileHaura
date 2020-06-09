import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import Home from './HomeStack'
import Profile from './Drawer'

const Tab=createBottomTabNavigator()

export default ()=>{
    return(
        <Tab.Navigator
            initialRouteName='HomeStack'
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName
                    let sizes=size
                    if (route.name === 'Home'){
                        iconName=focused? 'home':'home'
                        sizes=focused?30:size
                    } else {
                        iconName=focused? 'account-box' : 'account-box'
                        sizes=focused?30:size
                    } 
                    return <Icon name={iconName} size={sizes} color={color}/>
                }
            })}
            tabBarOptions={{
                activeTintColor:'#3DDC84',
                inactiveTintColor:'gray',
                showLabel:true
            }}
        >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}