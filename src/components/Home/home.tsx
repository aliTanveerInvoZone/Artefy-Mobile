import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, GestureResponderEvent, FlatList } from "react-native";
import Colors from "../../Utils/colors";
import LinearGradient from "react-native-linear-gradient";

import Header from "../common/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import images from "../../assets";
import LaunchDrop from "./LaunchDrop";
import ListItem from "./ListItem";

const Home: React.FC = (props) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header title={"Home"} onLeftIconPress={() => {}} onRightIconPress={() => {}} />
      <LinearGradient style={styles.mainContainer} colors={Colors.BACKGROUND_GRADIENTS}>
        <AppLogo />
        <LogInRow onPressLogIn={() => {}} />
        <FlatList
          ListHeaderComponent={<LaunchDrop />}
          data={[1, 2, 3, 4]}
          renderItem={() => {
            return <ListItem />;
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const LogInRow: React.FC<{
  onPressLogIn: ((event: GestureResponderEvent) => void) | undefined;
}> = ({ onPressLogIn }) => {
  return (
    <View style={styles.logInRowContainer}>
      <View style={styles.logInRowLogoContainer}>
        <images.ArtefyAppLogo />
      </View>
      <View style={styles.logInRowButtonContainer}>
        <TouchableOpacity onPress={onPressLogIn}>
          <Text style={styles.loginRowText}>{"Log In"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AppLogo: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <images.AppLogo width={"70%"} height={"80%"} preserveAspectRatio="none" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaContainer: {
    width: wp(100),
    height: hp(100),
    backgroundColor: Colors.THEME_BLACK,
    alignItems: "center",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  logoContainer: {
    height: "8%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  logInRowContainer: {
    width: "80%",
    height: "8%",
    flexDirection: "row",
  },
  logInRowLogoContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logInRowButtonContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  loginRowText: { color: Colors.WHITE, fontWeight: "bold", fontSize: wp(4) },
});
