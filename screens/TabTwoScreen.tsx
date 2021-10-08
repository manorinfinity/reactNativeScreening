import * as React from 'react';
import { StyleSheet } from 'react-native';

import Authentication from '../components/Authentication';
import { Text, View } from '../components/Themed';
import authContext from '../authContext';

export default function TabTwoScreen() {
  const { authenticated, setAuthenticated } = React.useContext(authContext);
  const handleLogin = () => setAuthenticated(true);
  const handleLogout = () => setAuthenticated(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Authentication path="/screens/TabTwoScreen.tsx" handleLogin={handleLogin} handleLogout={handleLogout} authenticated={authenticated}/>
    </View>
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
