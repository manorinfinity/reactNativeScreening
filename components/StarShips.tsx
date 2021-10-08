import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { startClock } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';

export default function EditScreenInfo({ path }: { path: string }) {
  const[starships, setStarships] = useState({
    data: [],
    searchResults: []
  });
  useEffect(() => {
    // Fetch List of Starships
    fetch('https://swapi.dev/api/starships')
    .then((res) => res.json())
    .then(data => setStarships({data: data.results, searchResults:[]}))
    .catch(err => console.log(err))
  }, []);
  const handleSearch = (value) => {
    console.log(value);
    setStarships({...starships, searchResults: starships.data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()) && value !== "")});
  }
  const StarShipsList = starships.searchResults.map((item) => (
      <View style={styles.helpContainer}>
        <Text style={styles.helpLinkText} lightColor={Colors.dark.tint}>
          {item.name}
        </Text>
        <Text style={styles.helpLinkText} lightColor={Colors.dark.tint}>
          {item.cost_in_credits}
        </Text>
        <Text style={styles.helpLinkText} lightColor={Colors.dark.tint}>
          {item.max_atmosphering_speed}
        </Text>
      </View>
    ));
  return (
      <View style={styles.helpContainer}>
        {(!starships.data || !(starships.data.length > 0)) && <Text style={styles.loader}>Loading...</Text>}
        {(starships.data && starships.data.length > 0) && (
          <View style={styles.helpContainer}>
            <TextInput style={styles.textInput} onChangeText={handleSearch}/>
            <ScrollView style={styles.mainContainer}>
              <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
                {(starships.searchResults && starships.searchResults.length > 0) && StarShipsList}
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://swapi.dev/'
  );
}

const styles = StyleSheet.create({
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  loader: {
    fontSize: 20,
    textAlign: 'center',
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    flex: 1
  },
  mainContainer: {
    width: '100%',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  textInput: {
    width: "80%",
    padding: 10,
    borderColor: 'black',
    color: 'black',
    borderWidth: 2
  }
});
