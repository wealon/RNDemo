import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  NativeModules,
} from "react-native";

var XSHUDManager = NativeModules.XSHUDManager;

export default class MemberCardPage extends React.Component {
  // 专门写一个文件来处理 RN与原生的通信
  _onButtonPress() {
    console.log("Click" + "_onButtonPress");
    XSHUDManager.showToast("Hello iOS");
  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.one}>
            <Text style={styles.text}>Top</Text>
          </View>
          <View style={styles.two}>
            <View style={styles.card}>
              <Text style={styles.text}>卡</Text>
              <Button title="调用原生" onPress={this._onButtonPress}></Button>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>卡</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>卡</Text>
            </View>
          </View>
          <View style={styles.three}>
            <Text style={styles.text}>Bottom</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "red",
  },
  scrollView: {
    backgroundColor: "pink",
  },
  one: {
    height: 120,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  two: {
    height: 675,
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  card: {
    height: 200,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  three: {
    // flex: 1,
    height: 400,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // flex: 1,
    fontSize: 40,
  },
});
