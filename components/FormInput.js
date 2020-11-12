import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');
const inactiveColor = '#798497'
const themecolor = '#2B2D2F'
const tabcolor = '#47BD77'
export default function FormInput({ labelName, ...rest }) {
  return (
    <TextInput
      label={labelName}
      style={styles.input}
      numberOfLines={1}
      {...rest}
      placeholderTextColor={inactiveColor}
      underlineColor={tabcolor}
      selectionColor={inactiveColor}
      theme={{colors: {text: `${inactiveColor}`, primary: `${tabcolor}`}}}
      placeholder='Enter your question...'
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: width / 1.5,
    height: height / 15,
    backgroundColor: `${themecolor}`,
    color:`${inactiveColor}`,
    overflow: 'hidden'    
  }
});