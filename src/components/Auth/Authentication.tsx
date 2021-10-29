import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, GestureResponderEvent, Alert } from "react-native";
import Colors from "../../Utils/colors";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Images from "../../assets/index";
import Routes from "../../navigation/routes";
import { CommonActions } from "@react-navigation/native";

type Props = {
  navigation: any;
};

const Authentication: React.FC<Props> = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  React.useEffect(() => {}, [navigation]);

  return (
    <LinearGradient colors={Colors.BACKGROUND_GRADIENTS} style={styles.mainContainer}>
      <View style={styles.topLogoContainer}>
        <Images.AppLogo preserveAspectRatio="none" width={"50%"} height={"50%"} />
      </View>

      <View style={styles.middleContainer}>
        <TopTabBar
          isSignIn={isSignIn}
          isSignUp={isSignUp}
          onSignInPress={() => {
            setIsSignUp(false);
            setIsSignIn(true);
          }}
          onSignUpPress={() => {
            setIsSignIn(false);
            setIsSignUp(true);
          }}
        />
        {isSignIn && <SignInComponent />}
        {isSignUp && <SignUpComponent />}

        <BottomInfoRow />
      </View>
    </LinearGradient>
  );
};

const SignInComponent: React.FC = () => {
  return (
    <View style={{ width: "100%", height: "75%", alignItems: "center" }}>
      <View style={{ width: "80%", height: "20%", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: Colors.SKYBLUE_TEXT, fontWeight: "bold" }}>
          {"Log in with your Venly or MetaMask Wallet"}
        </Text>
      </View>
      <View style={{ width: "100%", height: "80%" }}>
        <View
          style={{
            height: "50%",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ width: "100%", height: "50%", justifyContent: "center", alignItems: "center" }}>
            <Images.IC_Metamask width={"50%"} height={"100%"} />
          </TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: "white", fontWeight: "bold" }}>{"MetaMask"}</Text>
        </View>
        <View
          style={{
            height: "50%",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ width: "100%", height: "50%", justifyContent: "center", alignItems: "center" }}>
            <Images.IC_Venly width={"50%"} height={"100%"} />
          </TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: "white", fontWeight: "bold" }}>{"Venly"}</Text>
        </View>
      </View>
    </View>
  );
};
const SignUpComponent: React.FC = () => {
  return (
    <View style={{ width: "100%", height: "75%", alignItems: "center" }}>
      <View style={{ width: "80%", height: "20%", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: Colors.WHITE, fontWeight: "bold" }}>{"Create your artefy account with:"}</Text>
      </View>
      <View style={{ width: "100%", height: "80%" }}>
        <View
          style={{
            height: "20%",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ width: "100%", height: "50%", justifyContent: "center", alignItems: "center" }}>
            <Images.IC_Metamask width={"50%"} height={"100%"} />
          </TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: "white", fontWeight: "bold" }}>{"MetaMask"}</Text>
        </View>
        <View
          style={{
            height: "20%",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ width: "100%", height: "50%", justifyContent: "center", alignItems: "center" }}>
            <Images.IC_Venly width={"50%"} height={"100%"} />
          </TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: "white", fontWeight: "bold" }}>{"Venly"}</Text>
        </View>
        <View
          style={{
            height: "20%",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ width: "100%", height: "50%", justifyContent: "center", alignItems: "center" }}>
            <Images.IC_Venly width={"50%"} height={"100%"} />
          </TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: "white", fontWeight: "bold" }}>{"Venly"}</Text>
        </View>
        <View
          style={{
            height: "20%",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ width: "100%", height: "50%", justifyContent: "center", alignItems: "center" }}>
            <Images.IC_Venly width={"50%"} height={"100%"} />
          </TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: "white", fontWeight: "bold" }}>{"Venly"}</Text>
        </View>
      </View>
    </View>
  );
};

const TopTabBar: React.FC<{
  isSignUp: boolean;
  isSignIn: boolean;
  onSignInPress: (event: GestureResponderEvent) => void;
  onSignUpPress: (event: GestureResponderEvent) => void;
}> = ({ isSignUp, isSignIn, onSignInPress, onSignUpPress }) => {
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        onPress={onSignInPress}
        style={[styles.tabBarButtonContainer, { borderColor: isSignIn ? Colors.SKYBLUE_TEXT : Colors.THEME_GREY }]}
      >
        <Text style={[styles.tabBarButtonText, { fontWeight: isSignIn ? "bold" : "normal" }]}>{"Login"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSignUpPress}
        style={[styles.tabBarButtonContainer, { borderColor: isSignUp ? Colors.SKYBLUE_TEXT : Colors.THEME_GREY }]}
      >
        <Text style={[styles.tabBarButtonText, { fontWeight: isSignUp ? "bold" : "normal" }]}>{"Sign up"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const BottomInfoRow: React.FC = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "15%",

        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold", height: "50%" }}>
        {"For support or questions contact us here"}
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          height: "50%",
          width: "100%",
        }}
      >
        <TouchableOpacity style={{ width: "50%", height: "100%", alignItems: "center" }}>
          <Images.IC_mail width={wp(7)} height={hp(5)} preserveAspectRatio="none" />
          <Text style={{ fontWeight: "bold", fontSize: wp(3), color: Colors.WHITE }}>{"Mail"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "50%", height: "100%", alignItems: "center" }}>
          <Images.IC_discord width={wp(7)} height={hp(5)} preserveAspectRatio="none" />
          <Text style={{ fontWeight: "bold", fontSize: wp(3), color: Colors.WHITE }}>{"Discord"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  topLogoContainer: {
    width: "80%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  middleContainer: {
    width: "100%",
    height: "75%",
    alignItems: "center",
  },
  tabBarContainer: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabBarButtonContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: hp(0.2),
  },
  tabBarButtonText: {
    color: Colors.WHITE,
    fontSize: wp(5),
  },
});
