import React from 'react';
import {View} from 'react-native';

// props.children get item from prop that pass from parrent
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};
// containerStyle is variable we make up
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {Width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
export  {Card};