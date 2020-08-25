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
} from "react-native";
import Son from "./son.js";

export default class Father extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }
  getAge(age) {
    console.log("getAge:" + age);
    var newAge = 10 + age;
    this.setState({
      age: newAge,
    });
  }

  render() {
    DeviceEventEmitter.addListener("sendAge", this.getAge.bind(this));
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>show ResultAge</Text>
        <Text>My Son tells me ,he is: {this.state.age}</Text>
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
