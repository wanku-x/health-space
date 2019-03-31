import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';

const styles = StyleSheet.create({
  button: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: '#0082c8',
    marginTop: 15,
    marginBottom: 30,
    shadowRadius: 0
  }
});

const RountButton = ({ children, ...props }) => (
  <Button
    block
    rounded
    style={styles.button}
    {...props}
  >
    {typeof children === 'string' ? <Text>{children}</Text> : children}
  </Button>
);

export default RountButton;
