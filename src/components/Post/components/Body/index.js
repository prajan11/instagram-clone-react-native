import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';

const Body = ({imageUri}) => {
    return ( 
        <Image source={{uri: imageUri}} style={styles.image} />
     );
}
 
export default Body;