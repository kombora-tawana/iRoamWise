import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreCard = ({ store }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.storeName}>{store.name}</Text>
      <Text style={styles.category}>{store.category}</Text>
      <Text style={styles.details}>Floor: {store.floor}</Text>
      <Text style={styles.details}>Open: {store.open_time}</Text>
      <Text style={styles.details}>Close: {store.close_time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
  details: {
    fontSize: 12,
    color: '#333',
  },
});

export default StoreCard;
