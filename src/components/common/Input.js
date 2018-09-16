import React from 'react';
import {TextInput, View, Text} from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const {inputStyle,labelStyle,containerStyle} = styles;
    return(
        <View style = {containerStyle}>
             <Text style ={labelStyle}>{label}</Text>
             <TextInput
                placeholder={placeholder}
                secureTextEntry= {secureTextEntry}
                autoCorrect={false}
                style={inputStyle}
                value = {value}
                onChangeText = {onChangeText}
             
             />
        </View>
    );
};
//flex alocate portion in parent, alocate = flex/(total flex in parrent)
const styles = {
 inputStyle:{
     color: '#000',
     paddingRight: 5,
     paddingLeft: 5,
     fontSize: 18,
     lineHeight: 23, 
     height: 20, 
     width: 100,
     flex: 2
 },
 labelStyle:{
     fontSize: 18,
     paddingLeft: 20,
     flex: 1
 },
 containerStyle: {
     height: 40,
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center'
 }
};

export { Input };