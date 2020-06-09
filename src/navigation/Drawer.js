import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screen/Profile'
import Logout from '../screen/Logout'

const Drawer = createDrawerNavigator()

const ProfileDrawer = () => {
    return (
        <Drawer.Navigator 
            drawerPosition="right"
            drawerContentOptions={{
                activeTintColor: '#3DDC84'
            }}
        >
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Settings" component={Logout} />
        </Drawer.Navigator>
    );
};

export default ProfileDrawer;