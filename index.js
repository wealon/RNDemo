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

// import Father from "./component/father.js";

import MemberCardPage from "./membercard";

class RNApp extends React.Component {
  render() {
    return <MemberCardPage />;
    // return <Father></Father>;
    // return <MyLifeMethodClass />;
    // return <HelloWorldApp></HelloWorldApp>;
    // return <DisplayAnImageWithStyle></DisplayAnImageWithStyle>; // 展示图片样式
    // return <MovieList></MovieList>;
    // return (
    //   <MyFlatListClass
    //     data={[
    //       { key: "Tom" },
    //       { key: "Lucy" },
    //       { key: "Jack" },
    //       { key: "Bus" },
    //       { key: "BuXSs" },
    //     ]}
    //   />
    // );
    // return (
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <LayotApp></LayotApp>
    //   </View>
    // );
  }
}

// 整体js模块的名称
AppRegistry.registerComponent("RNApp", () => RNApp);
