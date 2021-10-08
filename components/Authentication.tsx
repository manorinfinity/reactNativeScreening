import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { startClock } from 'react-native-reanimated';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function Authentication({ path, handleLogin, handleLogout, authenticated }: { path: string }) {
  return (
      <View style={{
          alignItems: 'center',
          width: "100%",
          paddingTop: "20%",
          height: "100%", 
          backgroundColor: (authenticated ? "green" : "white")
        }}>
        {!authenticated && <Button
            onPress={handleLogin}
            title="Log In"
            color="#007AFF"
            accessibilityLabel="Learn more about this purple button"
        />}
        {authenticated && <Button
            onPress={handleLogout}
            title="Log Out"
            color="#007AFF"
            accessibilityLabel="Learn more about this purple button"
        />}
        <Text> user is {`${authenticated ? "" : "not"} authenticated`} </Text>
      </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://swapi.dev/'
  );
}

const styles = StyleSheet.create({
  button: {
    padding: "10%",
    width: "80%",
  },
});
