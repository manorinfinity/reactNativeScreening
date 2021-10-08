import * as React from 'react';
import { StyleSheet } from 'react-native';

import StarShips from '../components/StarShips';
import { Text, View } from 'react-native';
import FadeInView from '../FadeInView';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'StarShips'>) {
  return (
    <FadeInView style={styles.container}>
      <Text style={styles.title}>Starships List</Text>
      <StarShips path="/screens/TabOneScreen.tsx" />
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
