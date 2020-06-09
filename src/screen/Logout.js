import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { UserLogout } from '../redux/actions/AuthAction';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';

const Logout = () => {
    let dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(UserLogout())
        AsyncStorage.removeItem()
    }

    return (
        <View style={styles.container}>
            <View>
                <Button 
                    title="LOGOUT"
                    onPress={handleLogout}
                    containerStyle={{
                        alignItems: 'center'
                    }}
                    buttonStyle={{
                        backgroundColor: '#3DDC84',
                        width: '55%'
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Logout;
