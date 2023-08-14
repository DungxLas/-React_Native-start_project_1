import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../constants/colors';

function InstrucionText({children, style}: any) {
  return <Text style={[styles.instrucionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instrucionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 22,
  },
});

export default InstrucionText;
