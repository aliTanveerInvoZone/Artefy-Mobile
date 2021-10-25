import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../Utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../assets/index';
import Routes from '../../navigation/routes';
import {CommonActions} from '@react-navigation/native';

type Props = {
  navigation: any;
};

const Splash: React.FC<Props> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: Routes.HOME_STACK}],
      });
      navigation.dispatch(resetAction);
    }, 1000);
  }, [navigation]);

  return (
    <LinearGradient
      colors={Colors.BACKGROUND_GRADIENTS}
      style={styles.mainContainer}>
      <Images.AppLogo />
      <Images.ArtefyAppLogo width={200} height={100} />
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
