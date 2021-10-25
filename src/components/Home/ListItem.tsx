/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Colors from "../../Utils/colors";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import images from "../../assets/index";
import Button from "../common/button";

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
    <View style={styles.bottomInformationContainer}>
      <View style={styles.bottomArtistNameContainer}>
        <Text style={styles.artistText}>{"Frank Frazetta"}</Text>
        <Text style={styles.assetsCountText}>{"3 listings"}</Text>
      </View>
      <View style={styles.assetNameContainer}>
        <Text style={styles.assetName}>{"Requiem for a Shark"}</Text>
      </View>
      <View style={styles.collectionNameContainer}>
        <Text style={styles.collectionName}>{"Warriors & Amazons"}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceFromText}>{"from"}</Text>
          <Text style={styles.priceText}>{"$124,567"}</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.favAndBuyButtonContainer}>
        <TouchableOpacity style={styles.favButton}>
          <Text style={styles.favButtonText}>{"ADD TO FAVOURITES"}</Text>
          <images.Fav_Icon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>{"Buy Now"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listingButtonContainer}>
        <Button title={"Show Listing"} onPress={() => {}} />
      </View>
    </View>
  );
};

const TopImageComponent: React.FC = () => {
  return (
    <View style={styles.topImageMainContainer}>
      <View style={styles.assetImageContainer}>
        <Image style={styles.assetImage} source={require("../../assets/Dummy.jpg")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: hp(50),
    paddingVertical: hp(1),
    alignItems: "center",
  },
  bottomInformationContainer: {
    width: "55%",
    height: "40%",
    alignItems: "center",
  },
  bottomArtistNameContainer: {
    width: "100%",
    height: "10%",
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  artistText: {
    color: "white",
    width: "65%",
    borderColor: Colors.WHITE,
    fontSize: wp(3),
    fontWeight: "bold",
  },
  assetsCountText: {
    color: Colors.LITE_GREY,
    fontSize: wp(3),
  },
  assetNameContainer: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
  },
  assetName: {
    color: "white",
    borderColor: Colors.WHITE,
    fontSize: wp(4.2),
    fontWeight: "bold",
  },
  collectionNameContainer: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
  },
  collectionName: {
    color: "white",
    borderColor: Colors.LITE_GREY,
    fontSize: wp(3.2),
    width: "60%",
  },
  priceContainer: {
    width: "40%",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  priceFromText: {
    color: Colors.SKYBLUE_TEXT,
    fontSize: wp(3),
    fontWeight: "bold",
  },
  priceText: {
    color: Colors.SKYBLUE_TEXT,
    fontSize: wp(4),
    fontWeight: "bold",
  },
  separator: {
    height: "1%",
    width: "100%",
    backgroundColor: Colors.THEME_GREY,
  },
  favAndBuyButtonContainer: {
    height: "19%",
    width: "100%",
    borderColor: Colors.WHITE,
    alignItems: "center",
    flexDirection: "row",
  },
  favButton: {
    width: "70%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  favButtonText: {
    color: Colors.LITE_GREY,
    fontSize: wp(3),
    marginEnd: wp(1),
  },
  buyNowButton: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buyNowButtonText: {
    color: Colors.LITE_GREY,
    fontSize: wp(3),
  },
  listingButtonContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  topImageMainContainer: {
    height: "60%",
    width: "80%",
    borderColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  assetImageContainer: {
    width: "70%",
    height: "95%",
    borderColor: "white",
    overflow: "hidden",
    borderRadius: wp(5),
  },
  assetImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ListItem;
