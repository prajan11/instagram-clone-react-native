import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Story from './Story';

import styles from './style';

const DATA = [
    {
        imageUri : 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
        name: 'Prajan'
    },
    {
        imageUri : 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
        name: 'Niush'
    },
    {
        imageUri : 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
        name: 'Dipesh'
    },
    {
        imageUri : 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
        name: 'Subhash'
    },
    {
        imageUri : 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
        name: 'Sakar'
    },
    {
        imageUri : 'https://dummyimage.com/600x400/000/fff&text=Test+Image',
        name: 'Sam'
    },
]

const Stories = () => {
    return ( 
        <FlatList data={DATA} 
            renderItem={ ({item}) => <Story imageUri={item.imageUri} name={item.name} />}
            keyExtractor={item => item.name}
            horizontal = {true}
            showsHorizontalScrollIndicator= {false}
            style={styles.container}
        />
           
     );
}
 
export default Stories;