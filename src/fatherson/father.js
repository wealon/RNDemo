import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  DeviceEventEmitter,
  NativeModules,
} from "react-native";
import Son from "./Son.js";

var XSHUDManager = NativeModules.XSHUDManager;
export default class Father extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      date: null,
    };

    console.log(">>>Life Method Father constructor");
  }

  componentDidMount() {
    console.log(">>>Life Method Father componentDidMount 加载完成");
  }

  componentWillUnmount() {
    console.log(">>>Life Method Father componentWillUnmount 卸载");
  }

  componentDidUpdate() {
    console.log(">>>Life Method Father componentDidUpdate 更新完成");
  }

  shouldComponentUpdate() {
    console.log(">>>Life Method Father shouldComponentUpdate true");
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Father.props = ", props);
    console.log("Father.state = ", state);
    console.log(">>>Life Method Father getDerivedStateFromProps");
    return null;
  }

  getAge(age) {
    console.log("getAge:" + age);
    var newAge = 10 + age;
    this.setState({
      age: newAge,
    });
  }

  _closePage() {
    console.log("点击关闭页面");
    XSHUDManager.closePage();
  }

  _changeTime() {
    let nowDate = Date.now();
    console.log("点击更新时间: " + nowDate + "state 变化");
    this.setState({ date: nowDate });
    this.forceUpdate();
  }

  render() {
    console.log(">>>Life Method Father render");
    DeviceEventEmitter.addListener("sendAge", this.getAge.bind(this));
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>I'm Father</Text>
        <Text>My Son tells me ,he is: {this.state.age}</Text>
        <Button title="关闭页面" onPress={this._closePage}></Button>
        <Button title="修改时间" onPress={this._changeTime.bind(this)}></Button>
        <Son name="son" age={this.getAge.bind(this)}></Son>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: "#999999",
  },
  text: {
    fontSize: 24,
    margin: 20,
  },
});
