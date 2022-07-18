import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Flashsale() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#000'}}>
          Flashsale
        </Text>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#387148'}}>
          2:10:09
        </Text>
      </View>

      <View style={styles.Itemwrap}>
        <View style={styles.Boxitem}>
          <View style={styles.bgImage}>
            <View style={styles.headText}>
              <Text style={{fontWeight: '500', color: '#fff'}}>
                Bast Seller
              </Text>
            </View>
            <View style={{marginTop: 40, alignItems: 'center'}}>
              <Image
                style={{width: 120, height: 120}}
                source={require('../assets/images/cabbage.png')}
              />
            </View>
          </View>
          <View style={styles.boxcontent}>
            <View style={styles.imageHart}>
              <Image
                style={{width: 15, height: 15}}
                source={require('../assets/icons/heart.png')}
              />
            </View>
            <View style={styles.textcontent}>
              <View>
                <Text style={{fontWeight: '500', color: '#000'}}>Cabbage</Text>
                <Text
                  style={{
                    textDecorationColor: '#000',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    fontSize: 12,
                    color: '#ccc'
                  }}>
                  $2.0
                </Text>
                <Text style={{fontWeight: '500', color: '#37a260'}}>$1.80</Text>
              </View>
              <View style={styles.boxsave}>
                <Text style={{fontSize: 12, fontWeight: '500', color: '#fff'}}>Save 5%</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Boxitem}>
          <View style={styles.bgImage}>
            <View style={styles.headText}>
              <Text style={{fontWeight: '500', color: '#fff'}}>
                Bast Seller
              </Text>
            </View>
            <View style={{marginTop: 40, alignItems: 'center'}}>
              <Image
                style={{width: 140, height: 120}}
                source={require('../assets/images/kale.png')}
              />
            </View>
          </View>
          <View style={styles.boxcontent}>
            <View style={styles.imageHart}>
              <Image
                style={{width: 15, height: 15}}
                source={require('../assets/icons/heart.png')}
              />
            </View>
            <View style={styles.textcontent}>
              <View>
                <Text style={{fontWeight: '500', color: '#000'}}>Kale</Text>
                <Text
                  style={{
                    textDecorationColor: '#000',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    fontSize: 12,
                    color: '#ccc'
                  }}>
                  $2.0
                </Text>
                <Text style={{fontWeight: '500', color: '#37a260'}}>$1.80</Text>
              </View>
              <View style={styles.boxsave}>
                <Text style={{fontSize: 12, fontWeight: '500', color: '#fff'}}>Save 5%</Text>
              </View>
            </View>
          </View>
        </View>

        
      </View>

      <View style={styles.Itemwrap}>
        <View style={styles.Boxitem}>
          <View style={styles.bgImage}>
            <View style={styles.headText}>
              <Text style={{fontWeight: '500', color: '#fff'}}>
                Bast Seller
              </Text>
            </View>
            <View style={{marginTop: 40, alignItems: 'center'}}>
              <Image
                style={{width: 140, height: 120}}
                source={require('../assets/images/cantonese.png')}
              />
            </View>
          </View>
          <View style={styles.boxcontent}>
            <View style={styles.imageHart}>
              <Image
                style={{width: 15, height: 15}}
                source={require('../assets/icons/heart.png')}
              />
            </View>
            <View style={styles.textcontent}>
              <View>
                <Text style={{fontWeight: '500', color: '#000'}}>Cantonese</Text>
                <Text
                  style={{
                    textDecorationColor: '#000',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    fontSize: 12,
                    color: '#ccc'
                  }}>
                  $2.0
                </Text>
                <Text style={{fontWeight: '500', color: '#37a260'}}>$1.80</Text>
              </View>
              <View style={styles.boxsave}>
                <Text style={{fontSize: 12, fontWeight: '500', color: '#fff'}}>Save 5%</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Boxitem}>
          <View style={styles.bgImage}>
            <View style={styles.headText}>
              <Text style={{fontWeight: '500', color: '#fff'}}>
                Bast Seller
              </Text>
            </View>
            <View style={{marginTop: 40, alignItems: 'center',}}>
              <Image
                style={{width: 160, height: 120,}}
                source={require('../assets/images/lettuce.png')}
              />
            </View>
          </View>
          <View style={styles.boxcontent}>
            <View style={styles.imageHart}>
              <Image
                style={{width: 15, height: 15}}
                source={require('../assets/icons/heart.png')}
              />
            </View>
            <View style={styles.textcontent}>
              <View>
                <Text style={{fontWeight: '500', color: '#000'}}>Lettuce</Text>
                <Text
                  style={{
                    textDecorationColor: '#000',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                    fontSize: 12,
                    color: '#ccc'
                  }}>
                  $2.0
                </Text>
                <Text style={{fontWeight: '500', color: '#37a260'}}>$1.80</Text>
              </View>
              <View style={styles.boxsave}>
                <Text style={{fontSize: 12, fontWeight: '500', color: '#fff'}}>Save 5%</Text>
              </View>
            </View>
          </View>
        </View>

        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 30,
  },

  Itemwrap: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  Boxitem: {
    backgroundColor: '#f7f5f8',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    width: 165,
  },
  headText: {
    backgroundColor: '#f1ba4e',
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomRightRadius: 10,
  },

  boxcontent: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  imageHart: {
    backgroundColor: '#fff',
    position: 'absolute',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
    right: 5,
    top: -10,
  },
  textcontent: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  boxsave: {
    backgroundColor: '#37a260',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 3,
  },
});
