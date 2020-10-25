import React from "react";
import { AppRegistry } from "react-native";
import Father from "./src/fatherson/Father";
import LifeCycle from "./src/lifeCycle/LifeCycle";

class RNApp extends React.Component {
  render() {
    // return <Father />;
    return <LifeCycle></LifeCycle>;
  }
}

// 整体js模块的名称
AppRegistry.registerComponent("RNApp", () => RNApp);
AppRegistry.registerRunnable("Communication", () => {
  console.log("-----view willAppear");
});
