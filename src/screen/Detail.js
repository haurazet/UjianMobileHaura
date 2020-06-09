//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { selectProfilePost } from './../redux/actions'
import { connect } from 'react-redux'

// create a component
const Detail = ({route, navigation,selectProfilePost}) => {

    const setProfile=(photo)=>{
        selectProfilePost(photo)
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: route.params.photo.url }} style={styles.image}/>
            <Button
                onPress={()=> setProfile(route.params.photo.url) }
                title="Set as Display Picture"
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
        // backgroundColor: '#2c3e50',
    },
    image:{
        height: 400, width: '100%', marginBottom:'15%' 
    }
});

//make this component available to the app
export default connect(null, {selectProfilePost}) (Detail);
