import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min: number, max: number, exclude: any) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({userNumber}: any) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>sedjulfncjhkbnf</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, padding: 24},
});

export default GameScreen;
