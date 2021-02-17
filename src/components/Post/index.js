import React from 'react';
import { Text, View } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = (props) => {
    return ( 
        <View>
            <Header imageUri={props.post.user.imageUri} name={props.post.user.name} />
            <Body imageUri={props.post.imageUri} />
            <Footer likesCount = {props.post.likes} caption = {props.post.caption} postedAt = {props.post.postedAt} />
        </View>
        
     );
}
 
export default Post;