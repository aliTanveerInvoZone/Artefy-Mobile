import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../Utils/colors';
import CountDown from 'react-native-countdown-component';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import images from '../../assets/index';
import Button from '../common/button';

const LaunchDrop: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={StyleSheet.absoluteFill}>
        <images.GradientBackground
          height={'100%'}
          width={'100%'}
          preserveAspectRatio="none"
        />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.topContainer}>
          <TopLeftContainer />
          <TopRightContainer />
        </View>
        <View style={styles.bottomContainer}>
          <BottomContainer />
        </View>
      </View>
    </View>
  );
};

const BottomContainer: React.FC = () => {
  return (
    <>
      <View style={styles.bottomTopContainer}>
        <Text style={styles.bottomDropText}>{'FANTASY LAUNCH DROP'}</Text>
      </View>
      <View style={styles.bottomBelowContainer}>
        <Button
          backgroundColor={Colors.WHITE}
          onPress={() => {}}
          title="View Drop"
        />
      </View>
    </>
  );
};

const TopLeftContainer: React.FC = () => (
  <View style={styles.topLeftContainer}>
    <Text style={styles.dropStartsText}>{'DROP STARTS'}</Text>
    <View style={styles.countDownContainer}>
      <CountDown
        until={10000}
        onFinish={() => alert('finished')}
        digitStyle={styles.countDownElement}
        digitTxtStyle={styles.countDownText}
        onPress={() => alert('hello')}
        timeLabels={timeLabels}
        timeLabelStyle={styles.countDownLabelStyle}
        showSeparator
        separatorStyle={{color: Colors.WHITE}}
      />
    </View>
  </View>
);

const TopRightContainer: React.FC = () => {
  return (
    <View style={styles.topRightContainer}>
      <images.AppLogoWithOutBottomText
        height={'50%'}
        width={'80%'}
        preserveAspectRatio="none"
      />
    </View>
  );
};

const timeLabels = {m: 'min', s: 'sec', h: 'hour', d: 'day'};

const styles = StyleSheet.create({
  mainContainer: {
    width: wp(100),
    height: hp(20),
    backgroundColor: Colors.THEME_BLACK,
  },
  innerContainer: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
  },
  topContainer: {
    height: '50%',
    width: '95%',

    flexDirection: 'row',
  },
  bottomContainer: {
    height: '50%',
    width: '95%',

    flexDirection: 'column',
  },
  topLeftContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dropStartsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp(6),
  },
  bottomDropText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp(5),
    textAlign: 'center',
  },
  countDownContainer: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  countDownElement: {
    backgroundColor: 'transparent',
    height: 'auto',
  },
  countDownText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: wp(5),
  },
  countDownLabelStyle: {
    color: Colors.SKYBLUE_TEXT,
    fontWeight: 'bold',
    fontSize: wp(3),
  },
  topRightContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTopContainer: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBelowContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LaunchDrop;
