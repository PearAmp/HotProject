import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Exploreheader from '../components/Exploreheader';

export default function SearchScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
     <Exploreheader />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#fff',
    height: 'auto',
  },
});