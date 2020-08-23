import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import MovieList from "./MovieList";
import LayotApp from "./layout";
import DisplayAnImageWithStyle from "./imageStyle";
import HelloWorldApp from "./helloword";

class RNApp extends React.Component {
  render() {
    return (
      <HelloWorldApp></HelloWorldApp>
      // <DisplayAnImageWithStyle></DisplayAnImageWithStyle> // 展示图片样式
      // <MovieList></MovieList>
      // <View style={styles.container}>
      //   <LayotApp></LayotApp>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#999999",
  },
});

// 整体js模块的名称
AppRegistry.registerComponent("RNApp", () => RNApp);
