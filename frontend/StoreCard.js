// StoreCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StoreCard = ({ store }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.storeName}>{store.name}</Text>
      <Text style={styles.category}>{store.category}</Text>
      <View style={styles.timeContainer}>
        <MaterialCommunityIcons name="clock" size={20} color="black" />
        <Text style={styles.time}>{store.openTime} - {store.closeTime}</Text>
      </View>
      <Text style={styles.floor}>Floor: {store.floor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#777',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  time: {
    marginLeft: 5,
    fontSize: 14,
  },
  floor: {
    marginTop: 10,
    fontSize: 12,
    color: '#555',
  },
});

export default StoreCard;
