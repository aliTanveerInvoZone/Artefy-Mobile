/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Colors from '../../Utils/colors';

import Images from '../../assets/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import images from '../../assets/index';
import Button from '../common/button';

const ListItem: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <TopImageComponent />
      <BottomInformationComponent />
    </View>
  );
};

const BottomInformationComponent: React.FC = () => {
  return (
    <View
      style={{
        width: '55%',
        height: '40%',

        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          height: '10%',
          borderColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            width: '65%',
            borderColor: Colors.WHITE,
            fontSize: wp(3),
            fontWeight: 'bold',
          }}>
          {'Frank Frazetta'}
        </Text>
        <Text style={{color: Colors.LITE_GREY, fontSize: wp(3)}}>
          {'3 listings'}
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '15%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            borderColor: Colors.WHITE,
            fontSize: wp(4.2),
            fontWeight: 'bold',
          }}>
          {'Requiem for a Shark'}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '25%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            borderColor: Colors.LITE_GREY,
            fontSize: wp(3.2),
            width: '60%',
          }}>
          {'Warriors & Amazons'}
        </Text>
        <View
          style={{
            width: '40%',

            height: '100%',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: Colors.SKYBLUE_TEXT,
              fontSize: wp(3),
              fontWeight: 'bold',
            }}>
            {'from'}
          </Text>
          <Text
            style={{
              color: Colors.SKYBLUE_TEXT,
              fontSize: wp(4),
              fontWeight: 'bold',
            }}>
            {'$124,567'}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '1%',
          width: '100%',
          backgroundColor: Colors.THEME_GREY,
        }}
      />
      <View
        style={{
          height: '19%',
          width: '100%',

          borderColor: Colors.WHITE,

          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '70%',
            height: '100%',

            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: Colors.LITE_GREY,
              fontSize: wp(3),
              marginEnd: wp(1),
            }}>
            {'ADD TO FAVOURITES'}
          </Text>
          <images.Fav_Icon />
        </View>
        <View
          style={{
            width: '30%',
            height: '100%',

            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text style={{color: Colors.LITE_GREY, fontSize: wp(3)}}>
            {'Buy Now'}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '30%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button title={'Show Listing'} onPress={() => {}} />
      </View>
    </View>
  );
};

const TopImageComponent: React.FC = () => {
  return (
    <View
      style={{
        height: '60%',
        width: '80%',

        borderColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '70%',
          height: '95%',
          borderColor: 'white',
          overflow: 'hidden',
          borderRadius: wp(5),
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
          source={require('../../assets/Dummy.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: hp(50),
    paddingVertical: hp(1),
    alignItems: 'center',
  },
});

export default ListItem;
