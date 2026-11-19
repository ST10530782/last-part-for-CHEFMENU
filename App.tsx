import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import AddMenuScreen from './AddScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
    <View style={styles.container}>

      {currentScreen === 'Home' && <HomeScreen />}

      {currentScreen === 'Menu' && <MenuScreen />}

      {currentScreen === 'Add' && <AddMenuScreen />}

      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => setCurrentScreen('Home')}>
          <Text style={styles.button}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentScreen('Menu')}>
          <Text style={styles.button}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentScreen('Add')}>
          <Text style={styles.button}>Add Item</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#173F35',
    padding: 20,
  },
  button: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
