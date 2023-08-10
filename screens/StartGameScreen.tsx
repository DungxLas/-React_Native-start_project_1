import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstrucionText from '../components/ui/InstrucionText';

function StartGameScreen({onPickedNumber}: any) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText: any) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber, 10);
    if (chosenNumber <= 0 || chosenNumber > 99 || isNaN(chosenNumber)) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }

    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstrucionText>Enter A Number</InstrucionText>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 58,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {flexDirection: 'row'},
  buttonContainer: {flex: 1},
});

export default StartGameScreen;
