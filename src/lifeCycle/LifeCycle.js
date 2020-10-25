import { number } from "prop-types";
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

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      refresh: false,
      date: null,
    };

    console.log(">>>Life Method constructor");

    // AppRegistry.registerRunnable("viewWillAppear", () => {
    //   console.log("-----view willAppear");
    // });
  }

  // life Methods

  componentDidMount() {
    console.log(">>>Life Method componentDidMount");
  }

  componentWillUnmount() {
    console.log(">>>Life Method componentWillUnmount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props = ", props);
    console.log("state = ", state);
    console.log(">>>Life Method getDerivedStateFromProps");
    return null;
  }

  _showNativeLoading() {
    console.log("Click _showNativeLoading");
    XSHUDManager.showToast("Hello iOS");
  }

  _closePage() {
    XSHUDManager.closePage();
  }

  _changeTime() {
    let nowDate = Date.now();
    console.log("点击更新时间: " + nowDate + "state 变化");
    this.setState({ date: nowDate });
  }

  render() {
    console.log(">>>Life Method render");
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Button
            title="展示原生Loading"
            onPress={this._showNativeLoading}
          ></Button>
        </View>
        <View style={styles.box}>
          <Button title="返回页面" onPress={this._closePage}></Button>
        </View>
        <View style={styles.box}>
          <Button
            title="修改时间"
            onPress={this._changeTime.bind(this)}
          ></Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 100,
  },
});
