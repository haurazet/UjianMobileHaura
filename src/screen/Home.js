//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { getListPost } from './../redux/actions'
import { ScrollView } from 'react-native-gesture-handler';
// import { selectProfilePost } from './../../redux/actions'


// create a component
const Home = ({getListPost, Post, navigation, selectProfilePost}) => {

    useEffect(()=>{
        getListPost()
    },[])


    const OntoDetailPost=(phototerpilih)=>{
        // selectProfilePost(phototerpilih)
        navigation.navigate('Detail',{photo:phototerpilih})
    }

    const renderListPost=()=>{
        return Post.map((val,index)=>{
            
            return(
                <TouchableWithoutFeedback
                    key={index}
                    onPress={()=>OntoDetailPost(val)}
                >
                    <View 
                        style={styles.imageContainer}
                    >
                        <Image source={{uri: val.url }} style={styles.image}/>
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }

    return (
        <ScrollView>
            <View style={styles.container} >
                
                    {renderListPost()}
                
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap:"wrap",
        flexDirection: 'row',
    },
    imageContainer:{
        justifyContent: 'center',
        width: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image:{
        height: 200, width: '100%' 
    }
});

const Mapstatetoprops = ({Post}) => {
    
    return{
        Post:Post.postList,
    }
}

//make this component available to the app
export default connect(Mapstatetoprops, {getListPost}) (Home);
