import React, { useState, useEffect } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontListoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer = ({likesCount , caption, postedAt}) => {
    const [isLiked, setIsLike] = useState(false);
    const [numberOfLikes,setNumberOfLikes] = useState(0);
    const onLikePressed = () => {
        console.warn('hello');
        
        const amount = isLiked ? -1 : 1;
        setNumberOfLikes(numberOfLikes + amount);

        setIsLike(!isLiked);
    }

    useEffect(() => {
        setNumberOfLikes(likesCount);
    }, [])


    return ( 
        <View style={styles.container}>
            
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLiked ? 
                                <AntDesignIcon name="heart" size={25} color={"#c30000"} /> 
                                : <AntDesignIcon name="hearto" size={25} color={"#545454"} />}
                        
                    </TouchableWithoutFeedback>
                   
                    <FontListoIcon name="comment" size={23} />
                    <Ionicons name="paper-plane-outline" size={25} />
                </View>
                <View style={styles.rightIcons}>
                    <FontAwesomeIcon name="bookmark-o" size={25} />
                </View>
                
               
            </View>
            <Text style={styles.likes}>{numberOfLikes} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
     );
}
 
export default Footer;