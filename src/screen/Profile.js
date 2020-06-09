//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'

// create a component
const Profile = ({Auth, Post}) => {


    // const picture=Post.selectedPostDetailProfile?Post.selectedPostDetailProfile:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business2community.com%2Fsocial-media%2Fimportance-profile-picture-career-01899604&psig=AOvVaw0F2VISno9ugu55RlPWn6GW&ust=1591783531196000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiK2vC99OkCFQAAAAAdAAAAABAD'

    return (
        <View style={styles.container}>
            <Image source={{
                
                uri: Post.selectedPostDetailProfile}} style={styles.image}/>
            <Text>{Auth.user}</Text>
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
        height: 200, width: '50%', marginBottom:'15%', borderRadius:100
    }
});

const MapStatetoProps=({Auth, Post})=>{
    console.log(Auth)
    console.log(Post.selectedPostDetailProfile)
    return{
        Auth:Auth,
        Post:Post
    }
}

//make this component available to the app
export default connect(MapStatetoProps) (Profile);
