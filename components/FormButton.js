import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');
const inactiveColor = '#8E8E8E'
const themecolor = '#2B2D2F'
const tabcolor = '#47BD77'
export default function FormButton({ title, modeValue, ...rest }) {
  return (
    <Button
      mode={modeValue}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: `${tabcolor}`
  },
  buttonContainer: {
    width: width / 2,
    height: height / 15
  }
});