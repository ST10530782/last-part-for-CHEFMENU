import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.header}>
          <Text style={styles.logo}>CHEF'S MENU</Text>
          <Text style={styles.headerText}>MENU MANAGER</Text>
        </View>

        <Text style={styles.welcome}>Welcome, Chef!</Text>

        <Text style={styles.description}>
          Manage your restaurant menu easily.
          Add new dishes, update prices and keep
          your restaurant organised.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Restaurant</Text>

          <Text style={styles.cardDescription}>
            Everything you need to manage your
            restaurant menu in one place.
          </Text>

          <Text style={styles.foodIcon}>🍽️</Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Fresh Food</Text>
            <Text style={styles.infoText}>Quality Service</Text>
            <Text style={styles.infoText}>Easy Management</Text>
          </View>
        </View>

        <Text style={styles.footer}>
          Making menu management simple.
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    flexGrow: 1,
    padding: 20,
  },

  header: {
    backgroundColor: '#173F35',
    padding: 25,
    borderRadius: 12,
    marginBottom: 30,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  headerText: {
    color: '#D9E7DF',
    fontSize: 13,
    marginTop: 5,
  },

  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#173F35',
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 25,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 16,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#173F35',
  },

  cardDescription: {
    fontSize: 15,
    color: '#777777',
    lineHeight: 23,
    marginTop: 10,
  },

  foodIcon: {
    fontSize: 75,
    textAlign: 'center',
    margin: 25,
  },

  infoBox: {
    backgroundColor: '#EAF5E8',
    padding: 18,
    borderRadius: 10,
  },

  infoText: {
    color: '#31990C',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  footer: {
    textAlign: 'center',
    color: '#888888',
    marginTop: 30,
    marginBottom: 20,
  },

});