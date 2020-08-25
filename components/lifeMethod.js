import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default class MyLifeMethodClass extends React.Component {
  static defaultProps = {
    page: "MyLifeMethodClass",
    name: "Jack",
    defaultProps: "",
  };

  // Life Methods
  constructor(props) {
    super(props);
    console.log("constructor");
    console.log(props);
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount");
    console.log(this.props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props);
  }

  shouldComponentUpdate() {
    return true;
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("UNSAFE_componentWillReceiveProps");
  }

  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // ======================

  _handleScrollEnd(e) {
    console.log("_handleScrollEnd");
  }

  _onButtonPress() {
    console.log("Click" + "_onButtonPress");
    console.log(this.defaultProps);
  }

  render() {
    console.log("render");
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Life Method Demo</Text>
        <Button title="Click Me " onPress={this._onButtonPress}></Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    // flex: 1,
    // height: 50,
    backgroundColor: "red",
    alignSelf: "center",
    fontSize: 30,
  },
});
