import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const img = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={img} style={{ width: 100, height: 100 }} />
      <Text>Hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
});
