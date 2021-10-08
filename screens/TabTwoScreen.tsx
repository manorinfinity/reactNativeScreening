import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Authentication from '../components/Authentication';
import authContext from '../authContext';
import FadeInView from '../FadeInView';

export default function TabTwoScreen() {
  const { authenticated, setAuthenticated } = React.useContext(authContext);
  const handleLogin = () => setAuthenticated(true);
  const handleLogout = () => setAuthenticated(false);
  return (
    <FadeInView style={styles.container}>
      <Authentication path="/screens/TabTwoScreen.tsx" handleLogin={handleLogin} handleLogout={handleLogout} authenticated={authenticated}/>
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
