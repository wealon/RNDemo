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

export default class Son extends React.Component {
  sendAge() {
    console.log("sendAge");
    this.props.age(30);
  }

  sendEmitterAge() {
    console.log("sendEmitterAge");
    DeviceEventEmitter.emit("sendAge", 40);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello , {this.props.name}</Text>
        <Text style={styles.text} onPress={this.sendAge.bind(this)}>
          向上传递数据 bind
        </Text>
        <Text style={styles.text} onPress={this.sendEmitterAge.bind(this)}>
          向上传递数据Emitter
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginTop: 100,
    // backgroundColor: "yellow",
  },
  text: {
    fontSize: 24,
    margin: 20,
  },
});
