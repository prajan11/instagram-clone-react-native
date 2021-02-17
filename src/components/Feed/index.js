import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const post = [
    {
        user: {
            imageUri: 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
            name: 'Prajan'
        },
        imageUri: 'https://dummyimage.com/600x400/000/fff&text=Post+Content+Image',
        caption: 'Test Image Yaar #instagramClone',
        likes: 1234,
        postedAt: '5 minutes ago',
    },
    {
        user: {
            imageUri: 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
            name: 'Niush'
        },
        imageUri: 'https://dummyimage.com/600x400/000/fff&text=Post+Content+Image',
        caption: 'Test Image Yaar #instagramClone',
        likes: 5678,
        postedAt: '6 minutes ago',
    },
    {
        user: {
            imageUri: 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
            name: 'Dipesh'
        },
        imageUri: 'https://dummyimage.com/600x400/000/fff&text=Post+Content+Image',
        caption: 'Test Image Yaar #instagramClone',
        likes: 9101,
        postedAt: '7 minutes ago',
    }
];

const Feed = () => {
    return ( 
        <FlatList 
            data={post}
            renderItem = { ({item}) =>  <Post post={item} /> }
            ListHeaderComponent={Stories}
            keyExtractor = { (item, index) => index.toString() }
        />

     );
}
 
export default Feed;