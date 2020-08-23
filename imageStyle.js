import React, { Component } from "react";
import { View, Image, StyleSheet, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class DisplayAnImageWithStyle extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageItem}>
            <Image
              style={{
                resizeMode: "cover",
                height: 100,
                width: 200,
              }}
              source={require("./images/react-native-logo.png")}
            />
            <Text>resizeMode : cover</Text>
          </View>
          <View style={styles.imageItem}>
            <Image
              style={{
                resizeMode: "contain",
                height: 100,
                width: 200,
              }}
              source={require("./images/react-native-logo.png")}
            />
            <Text>resizeMode : contain</Text>
          </View>
          <View style={styles.imageItem}>
            <Image
              style={{
                resizeMode: "stretch",
                height: 100,
                width: 200,
              }}
              source={require("./images/react-native-logo.png")}
            />
            <Text>resizeMode : stretch</Text>
          </View>
          <View style={styles.imageItem}>
            <Image
              style={{
                resizeMode: "repeat",
                height: 100,
                width: 200,
              }}
              source={require("./images/react-native-logo.png")}
            />
            <Text>resizeMode : repeat</Text>
          </View>
          <View style={styles.imageItem}>
            <Image
              style={{
                resizeMode: "center",
                height: 100,
                width: 200,
              }}
              source={require("./images/react-native-logo.png")}
            />
            <Text>resizeMode : center</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const randomHexColor = () => {
  return "#000000".replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    width: "100%",
    textAlign: "center",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    flexDirection: "column",
    // width: "100%",
  },
  imageItem: {
    backgroundColor: randomHexColor(),
    marginTop: 20,
  },
});
export default DisplayAnImageWithStyle;
