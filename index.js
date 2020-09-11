import React from "react";
import { AppRegistry } from "react-native";
import Communication from "./src/communication/communication";

class RNApp extends React.Component {
  render() {
    return <Communication />;
  }
}

// 整体js模块的名称
AppRegistry.registerComponent("RNApp", () => RNApp);
AppRegistry.registerRunnable("Communication", () => {
  console.log("-----view willAppear");
});
