import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  NativeModules,
  AppRegistry,
} from "react-native";

var XSHUDManager = NativeModules.XSHUDManager;

export default class Communication extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // AppRegistry.registerRunnable("viewWillAppear", () => {
    //   console.log("-----view willAppear");
    // });
  }

  viewWillAppear() {
    console.log("Communication view willAppear");
  }

  // 专门写一个文件来处理 RN与原生的通信
  _onButtonPress() {
    console.log("Click" + "_onButtonPress");
    XSHUDManager.showToast("Hello iOS");
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.box1}>
          <Button title="调用原生" onPress={this._onButtonPress}></Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 100,
  },
});
