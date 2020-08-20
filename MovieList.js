import React, { PureComponent } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listdata: [
        {
          key: "a",
          title: "标题1",
          year: "2015",
          posters: {
            thumbnail:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597895733178&di=e8d996b58ea507bf2c77ba26adb3beb6&imgtype=0&src=http%3A%2F%2Fpptdown.pptbz.com%2Fpptbeijing%2F%25E7%2594%25B5%25E5%25BD%25B1PPT%25E8%2583%258C%25E6%2599%25AF%25E5%259B%25BE%25E7%2589%2587.jpg",
          },
        },
        {
          key: "b",
          title: "标题2",
          year: "2016",
          posters: {
            thumbnail:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597895733178&di=e8d996b58ea507bf2c77ba26adb3beb6&imgtype=0&src=http%3A%2F%2Fpptdown.pptbz.com%2Fpptbeijing%2F%25E7%2594%25B5%25E5%25BD%25B1PPT%25E8%2583%258C%25E6%2599%25AF%25E5%259B%25BE%25E7%2589%2587.jpg",
          },
        },
      ],
    };
    this.title = this.props.title;
    this.url = this.props.url;
    // this.fetchData = this.fetchData.bind(this);
  }

  renderList() {
    return (
      <FlatList
        data={this.state.listdata}
        renderItem={({ item }) => (
          <View style={styles.contentContainer}>
            <Image
              source={{ uri: item.posters.thumbnail }}
              style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>Row {item.title}</Text>
              <Text style={styles.year}>Row {item.year}</Text>
            </View>
            <View style={styles.cellBottom}></View>
          </View>
        )}
      />
    );
  }

  renderItem(item) {}

  render() {
    return (
      <SafeAreaView>
        <Text backgroundColor={styles.baseText}>Film List</Text>
        {this.renderList()}
      </SafeAreaView>
    );
  }
}

const randomHexColor = () => {
  return "#000000".replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: randomHexColor(),
    height: 90,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: randomHexColor(),
    height: 90,
  },
  cellBottom: {
    backgroundColor: "red",
    height: 10,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "yellow",
  },
  title: {
    fontSize: 20,
    marginBottom: 0,
    textAlign: "center",
  },
  year: {
    textAlign: "center",
  },
  baseText: {
    fontWeight: "bold",
    backgroundColor: "red",
  },
});
