import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Colors from '../../Utils/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor: any;
};

const Button: React.FC<Props> = ({
  title = '',
  onPress,
  backgroundColor = Colors.BUTTON_COLOR,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, {backgroundColor: backgroundColor}]}>
      <View
        style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', color: Colors.THEME_BLACK}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: wp(55),
    height: hp(5),
    borderRadius: wp(10),

    flexDirection: 'row',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
