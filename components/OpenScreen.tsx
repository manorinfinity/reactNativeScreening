import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { startClock } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function OpenScreen({ path }: { path: string }) {
  const[starships, setStarships] = useState({
    data: [],
  });
  const longestVowelString = (arr) => {
    let lgstr = arr.reduce((acc, item) => {
      if(item.length > acc.length){
        acc = item;
      }
      return acc;
    }, '');
    return `${lgstr} contains ${lgstr.split('').filter((item) => (/[aeiou]+/gi.test(item))).length} vowels`
  }
  return (
      <View style={styles.getStartedContainer}>
        <Text>
          {
            longestVowelString([
              'Am I the Longest?',
              'Wololoo',
              'Supercalifragilisticexpialidocious',
              'I like turtles',
            ])
          }
        </Text>
      </View>

  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://swapi.dev/'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
