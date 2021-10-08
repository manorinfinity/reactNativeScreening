import * as React from 'react';
import { StyleSheet, Animated, Text, View } from 'react-native';
import { useRef } from 'react';
import OpenScreen from '../components/OpenScreen';
import FadeInView  from '../FadeInView';
export default function TabThreeScreen() {

  return (
    <FadeInView style={styles.container}>
      <OpenScreen path="/screens/TabTwoScreen.tsx" />
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
