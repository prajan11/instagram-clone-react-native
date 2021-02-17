import React from 'react';
import { Text, View } from 'react-native';
import ProfilePicture from '../../ProfilePicture';
import styles from './style';

const Story = (props) => {
    return ( 
        <View>
            <ProfilePicture uri={props.imageUri} />
            <Text style={styles.name}>{props.name}</Text>
        </View>
     );
}
 
export default Story;