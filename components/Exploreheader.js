import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

export default function Exploreheader() {

   

  return (
    <SafeAreaView>
       <View>
       <View style={styles.header}>
      <Text style={styles.textheader}>Explore</Text>
    </View>
    <View style={styles.boxItem}>
        <View>
            <Image style={{width: 25, height: 25,}} source={require('../assets/icons/pin.png')} />
        </View>
        <View style={{marginLeft: 10,}}>
            <Text style={{color: '#a9adb0', fontWeight: '500'}}>Delivery to</Text>
            <Text style={{color: '#000', fontWeight: '500'}}>Menteng. North Jakarta</Text>
        </View>
        <View style={styles.content}>
            <Image style={{width: 15, height: 15,}} source={require('../assets/icons/pencil.png')} />
        </View>
    </View>

    <View>
   
    </View>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
    header: {
        borderBottomColor: '#eee',
        borderBottomWidth: 2,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    textheader: {
        fontSize: 20,
        fontWeight: '600',
        color: '#5a9a78',
    },
    boxItem: {
        backgroundColor: '#f5f9fc',
        borderBottomColor: '#eee',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        position: 'relative',
    },
    content: {
        position: 'absolute',
        right: 20,
    },

});