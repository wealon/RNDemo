import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const MyFlatList = (props) => {
  console.log("MyFlatList");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Flat List Demo</Text>
      <FlatList
        data={props.data}
        // 注意这里的写法
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        style={styles.list}
      ></FlatList>
    </SafeAreaView>
  );
};

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
    height: 44,
  },
  title: {
    // flex: 1,
    height: 50,
    backgroundColor: "red",
    alignSelf: "center",
  },
});

export default MyFlatList;
