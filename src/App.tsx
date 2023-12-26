import React from 'react';
import {PropsWithChildren, useState} from 'react';
import {ImageSourcePropType, StyleSheet, Text, View, Image} from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDiceOnTap = () => { 
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case value:
        
        break;
    
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
