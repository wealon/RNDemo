import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import MovieList from "./MovieList";
import LayotApp from "./layout";
import DisplayAnImageWithStyle from "./imageStyle";
import HelloWorldApp from "./helloword";
import MyFlatList from "./components/list/MyFlatList";
import MyFlatListClass from "./components/list/MyFlatListClass";
import MyLifeMethodClass from "./components/lifeMethod";
import Son from "./components/son.js";
import Father from "./components/father.js";
import { ScrollView } from "react-native-gesture-handler";

class RNApp extends React.Component {
  demo() {
    // <Father></Father>
    // <MyLifeMethodClass />
    // <MyFlatListClass
    //   data={[
    //     { key: "Tom" },
    //     { key: "Lucy" },
    //     { key: "Jack" },
    //     { key: "Bus" },
    //     { key: "BuXSs" },
    //   ]}
    // />
    // <HelloWorldApp></HelloWorldApp>
    // <DisplayAnImageWithStyle></DisplayAnImageWithStyle> // 展示图片样式
    // <MovieList></MovieList>
    // <View style={styles.container}>
    //   <LayotApp></LayotApp>
    // </View>
  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.one}>
            <Text style={styles.text}>Top</Text>
          </View>
          <View style={styles.two}>
            <View style={styles.card}>
              <Text style={styles.text}>卡</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>卡</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>卡</Text>
            </View>
          </View>
          <View style={styles.three}>
            <Text style={styles.text}>Bottom</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "red",
  },
  scrollView: {
    backgroundColor: "pink",
  },
  one: {
    height: 120,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  two: {
    height: 675,
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  card: {
    height: 200,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  three: {
    // flex: 1,
    height: 400,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // flex: 1,
    fontSize: 40,
  },
});

// 整体js模块的名称
AppRegistry.registerComponent("RNApp", () => RNApp);
