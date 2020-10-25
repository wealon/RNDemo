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
  // 构造函数
  constructor(props) {
    super(props);
    console.log(">>>Life Method Son constructor");
    this.state = {};
  }

  componentDidMount() {
    console.log(">>>Life Method Son componentDidMount 加载完成");
  }

  componentWillUnmount() {
    console.log(">>>Life Method Son componentWillUnmount 卸载");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Son.props = ", props);
    console.log("Son.state = ", state);
    console.log(">>>Life Method Son getDerivedStateFromProps");
    return null;
  }

  sendAge() {
    console.log("sendAge");
    this.props.age(30);
  }

  sendEmitterAge() {
    console.log("sendEmitterAge");
    DeviceEventEmitter.emit("sendAge", 40);
  }
  render() {
    console.log(">>>Life Method Son render");
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
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 24,
    margin: 20,
  },
});
