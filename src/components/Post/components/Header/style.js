import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    left:{
        flexDirection: 'row',
    },
    right:{
        marginRight: 15
    },
    name:{
        alignSelf: 'center',
        color: '#4f4f4f',
        fontWeight: 'bold',
    }
});

export default styles;