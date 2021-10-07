import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { startClock } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  const[starships, setStarships] = useState({
    data: [],
  });
  useEffect(() => {
    // Fetch List of Starships
    fetch('https://swapi.dev/api/starships')
    .then((res) => res.json())
    .then(data => setStarships({data: data.results}))
    .catch(err => console.log(err))
  }, []);
  return (
    <ScrollView>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          {(starships.data && starships.data.length > 0) && starships.data.map((item) => (
          <View style={styles.helpContainer}>
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              {item.name}
            </Text>
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              {item.cost_in_credits}
            </Text>
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              {item.max_atmosphering_speed}
            </Text>
          </View>
          ))}
        </TouchableOpacity>
      </View>
    </ScrollView>
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
