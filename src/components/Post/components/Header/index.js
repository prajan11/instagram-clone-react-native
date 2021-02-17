import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({imageUri, name}) => {
    return ( 
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} size={40} />
            <Text style={styles.name}>{name}</Text>
            <Icon name="rocket" size={30} color="#900" />
        </View>
     );
}
 
export default Header;