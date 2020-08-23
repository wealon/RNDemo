import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";

const HelloWorldApp = () => {
  return (
    <ScrollView style={{ backgroundColor: "pink" }}>
      <SafeAreaView style={{ backgroundColor: "blue" }}>
        <Text>Hello World</Text>
        <View>
          <Text>展示图片</Text>
          <Image
            source={{
              uri:
                "https://static.91xinshang.com/pc/v1.0/images/index/code.png",
            }}
            style={{
              width: 200,
              height: 300,
              resizeMode: "contain",
              backgroundColor: "green",
            }}
          />
        </View>
        <View style={{ backgroundColor: "blue" }}>
          <TextInput
            style={{
              backgroundColor: "yellow",
              height: 44,
              borderColor: "#EA3325",
              borderWidth: 2,
            }}
            defaultValue="this is input"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello world</Text>
//       </View>
//     );
//   }
// }

export default HelloWorldApp;
