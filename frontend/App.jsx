import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import StoreCard from "./StoreCard";

const App = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("http://10.0.0.13:8000/stores");
        if (!response.ok)
          throw new Error("Something is wrong with the network. I'm broken :(");
        const data = await response.json();
        console.log("Response Data - Stores: ", data);
        setStores(data);
      } catch (err) {
        setError("Failed");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStores();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {stores.map((store, index) => (
        <StoreCard key={index} store={store} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});

export default App;
