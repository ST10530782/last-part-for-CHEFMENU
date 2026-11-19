import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';

export default function AddMenuScreen() {
  const [foodName, setFoodName] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const [category, setCategory] = useState('');

  const saveItem = () => {
    if (!foodName.trim() || !foodPrice.trim() || !category.trim()) {
      Alert.alert('Error', 'Please complete all fields.');
      return;
    }

    if (isNaN(Number(foodPrice)) || Number(foodPrice) <= 0) {
      Alert.alert('Error', 'Enter a valid price.');
      return;
    }

    Alert.alert(
      'Success',
      foodName + ' has been added successfully!'
    );

    setFoodName('');
    setFoodPrice('');
    setCategory('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.heading}>Add Menu Item</Text>

        <Text style={styles.description}>
          Add new food and drinks to your restaurant menu.
        </Text>

        <Text style={styles.label}>Food Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter food name"
          value={foodName}
          onChangeText={setFoodName}
        />

        <Text style={styles.label}>Price (R)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter price"
          keyboardType="decimal-pad"
          value={foodPrice}
          onChangeText={setFoodPrice}
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Main Course, Drinks"
          value={category}
          onChangeText={setCategory}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={saveItem}
        >
          <Text style={styles.buttonText}>Save Menu Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            setFoodName('');
            setFoodPrice('');
            setCategory('');
          }}
        >
          <Text style={styles.clearText}>Clear Fields</Text>
        </TouchableOpacity>

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
    padding: 22,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#173F35',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#173F35',
    marginTop: 18,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#31990C',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 28,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    borderWidth: 1,
    borderColor: '#31990C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  clearText: {
    color: '#31990C',
    fontWeight: 'bold',
  },
});