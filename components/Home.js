import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View>
      <View>
        <Image
          style={styles.imgHead}
          source={require('../assets/images/Vg.jpg')}
        />
      </View>
      <View>
        <View style={styles.background}>
          <View style={styles.boxItem}>
            <View style={styles.bgImage}>
              <Image
                style={styles.imageIcon}
                source={require('../assets/icons/vegetable.png')}
              />
              <Text style={styles.textIcon}>vegetable</Text>
            </View>

            <View style={styles.bgImage}>
              <Image
                style={styles.imageIcon}
                source={require('../assets/icons/fruit.png')}
              />
              <Text style={styles.textIcon}>fruit</Text>
            </View>

            <View style={styles.bgImage}>
              <Image
                style={styles.imageIcon}
                source={require('../assets/icons/salad.png')}
              />
              <Text style={styles.textIcon}>food</Text>
            </View>

            <View style={styles.bgImage}>
              <Image
                style={styles.imageIcon}
                source={require('../assets/icons/soft-drink.png')}
              />
              <Text style={styles.textIcon}>soft-drink</Text>
            </View>
          </View>

          <View style={styles.boxItembottom}>
            <View style={styles.bgImage}>
              <Image
                style={styles.imageIcon}
                source={require('../assets/icons/vegetable.png')}
              />
              <Text style={styles.textIcon}>vegetable</Text>
            </View>

            <View style={styles.bgImage}>
              <Image
                style={styles.imageIcon}
                source={require('../assets/icons/fruit.png')}
              />
              <Text style={styles.textIcon}>fruit</Text>
            </View>

            <View style={styles.bgImage}>
              <Image
                style={styles.imageIcon}
                source={require('../assets/icons/salad.png')}
              />
              <Text style={styles.textIcon}>food</Text>
            </View>

            <View style={styles.bgImage}>
              <Image
                style={styles.imageIcon}
                source={require('../assets/icons/soft-drink.png')}
              />
              <Text style={styles.textIcon}>soft-drink</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgHead: {
    width: '100%',
    height: 250,
  },

  background: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center'
  },
  bgImage: {
    backgroundColor: '#f1f7f3',
    width: 75,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center'
  },
  imageIcon: {
    width: 40,
    height: 40,
  },
  textIcon: {
    marginTop: 5,
    fontSize: 6,
    textAlign: 'center',
    fontWeight: '600',
    color: '#59c98e',
  },
  boxItem: {
    flexDirection: 'row',
  },
  boxItembottom: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
