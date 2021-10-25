import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../Utils/colors';

import Images from '../../assets/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  title: string;
  onLeftIconPress: Function;
  onRightIconPress: Function;
};

const Header: React.FC<Props> = ({
  title = '',
  onLeftIconPress,
  onRightIconPress,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => onLeftIconPress()}
        style={styles.leftContainer}></TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onRightIconPress()}
        style={styles.rightContainer}>
        <Images.MenuIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: hp(5),

    backgroundColor: Colors.THEME_BLACK,
    flexDirection: 'row',

    borderColor: 'white',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: wp(4.5),
    color: Colors.WHITE,
  },
  leftContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
