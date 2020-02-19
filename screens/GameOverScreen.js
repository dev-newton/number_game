import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  Platform
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../assets/MainButton";

import Colors from "../constants/colors";

export default function GameOverScreen(props) {
  // console.log(Platform.OS, Dimensions.get("window").width);
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            fadeDuration={1000}
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://cdn.pixabay.com/photo/2015/09/02/12/25/mountain-918404_960_720.jpg"
            // }}
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  imageContainer: {
    // width: Dimensions.get("window").width > 350 ? 300 : 200,
    // height: Dimensions.get("window").height > 600 ? 300 : 200,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height > 600 ? 18 : 14
  }
});
