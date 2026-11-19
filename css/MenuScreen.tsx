import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';

export default function MenuScreen() {

  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Chicken Burger', category: 'Main Course', price: '85' },
    { id: '2', name: 'Cheese Pizza', category: 'Main Course', price: '120' },
    { id: '3', name: 'French Fries', category: 'Side Dish', price: '40' },
    { id: '4', name: 'Chocolate Cake', category: 'Dessert', price: '45' },
    { id: '5', name: 'Orange Juice', category: 'Drinks', price: '30' },
    { id: '6', name: 'Grilled Chicken', category: 'Main Course', price: '110' },
  ]);

  const deleteItem = (id: string) => {
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setMenuItems(menuItems.filter(item => item.id !== id));
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.heading}>Restaurant Menu</Text>

        <Text style={styles.description}>
          View and manage your restaurant food items.
        </Text>

        <Text style={styles.total}>
          Total Menu Items: {menuItems.length}
        </Text>

        <ScrollView>
          {menuItems.map(item => (
            <View style={styles.menuCard} key={item.id}>

              <View style={styles.details}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.price}>R {item.price}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteItem(item.id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>

            </View>
          ))}

          {menuItems.length === 0 && (
            <Text style={styles.empty}>
              No menu items available.
            </Text>
          )}
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#173F35',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 18,
  },

  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#31990C',
    marginBottom: 15,
  },

  menuCard: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 12,
    marginBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  details: {
    flex: 1,
  },

  foodName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#173F35',
  },

  category: {
    fontSize: 14,
    color: '#777777',
    marginTop: 5,
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#31990C',
    marginTop: 7,
  },

  deleteButton: {
    backgroundColor: '#FFE5E5',
    padding: 10,
    borderRadius: 8,
  },

  deleteText: {
    color: '#C62828',
    fontWeight: 'bold',
  },

  empty: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 30,
  },

});