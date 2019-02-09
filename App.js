import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import ProfileHeader from "./ProfileHeader";

const deviceWidth = Dimensions.get('window').width;

export default class AppRoot extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(3)).map((v, i) => {
      return { id: i, src: 'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM-970-80.jpg'} ;
    });
    that.setState({
      dataSource: items,
    });
  }
  render() {
   

    return (
      <ScrollView style={{ flex: 1 }}>
        <ProfileHeader />
        <View style={styles.bottom}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image style={styles.image} source={{ uri: item.src }} />
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    paddingTop: 5,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    width: deviceWidth / 2,
    height: deviceWidth / 2
  },

  image: {
    width: deviceWidth / 2,
    height: deviceWidth / 2
  }
});
