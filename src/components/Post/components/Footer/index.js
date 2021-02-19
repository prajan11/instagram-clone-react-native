import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontListoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer = ({likesCount, caption, postedAt}) => {
    return ( 
        <View style={styles.container}>
            
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <AntDesignIcon name="hearto" size={25} />
                    <FontListoIcon name="comment" size={23} />
                    <Ionicons name="paper-plane-outline" size={25} />
                </View>
                <View style={styles.rightIcons}>
                    <FontAwesomeIcon name="bookmark-o" size={25} />
                </View>
                
               
            </View>
            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
     );
}
 
export default Footer;