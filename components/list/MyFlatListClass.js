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

export default class MyFlatListClass extends React.Component {
  static defaultProps = {
    page: "MyFlatListClass",
    rowData: [
      { key: "1" },
      { key: "2" },
      { key: "3" },
      { key: "4" },
      { key: "5" },
      { key: "6" },
      { key: "7" },
      { key: "8" },
      { key: "9" },
      { key: "10" },
      { key: "11" },
      { key: "12" },
      { key: "13" },
      { key: "14" },
      { key: "15" },
      { key: "16" },
      { key: "17" },
      { key: "18" },
      { key: "19" },
      { key: "20" },
    ],
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  _onButtonPress() {
    console.log("Click" + "_onButtonPress");
  }

  _handleScrollEnd(e) {
    console.log("_handleScrollEnd");
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Flat List Demo</Text>
        <Button title="Click Me " onPress={this._onButtonPress}></Button>
        <FlatList
          ref="flatList"
          data={this.props.rowData}
          onMomentumScrollEnd={this._handleScrollEnd}
          // 注意这里的写法
          renderItem={({ item }) => (
            <Text style={styles.item}>
              Row - {item.key} - {this.props.page}
            </Text>
          )}
          style={styles.list}
        ></FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "column",
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 84,
    backgroundColor: "#F5FCFF",
  },
  title: {
    // flex: 1,
    height: 50,
    backgroundColor: "red",
    alignSelf: "center",
  },
});
