import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../constants/colors';

function InstrucionText({children, style}: any) {
  return <Text style={[styles.instrucionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instrucionText: {
    color: Colors.accent500,
    fontSize: 22,
  },
});

export default InstrucionText;
