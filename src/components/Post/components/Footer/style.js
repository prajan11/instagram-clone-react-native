import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },  
    iconsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 5,
    }, 
    leftIcons:{
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between'

    },
    rightIcons:{

    },
    likes: {
        fontWeight: 'bold',
        color: 'black',
        margin: 3,    
    },
    caption: {
        color: '#8c8c8c',
        margin: 3
    },
    postedAt: {
        margin: 3,
    }
});

export default styles;