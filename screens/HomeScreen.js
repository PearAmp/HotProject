import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Home from '../components/Home';
import Flashsale from '../components/Flashsale';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Home />
      <Flashsale />
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#f7f8fc',
    height: 'auto',
},
});