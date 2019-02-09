
import React from "react";
import { View, Text, StyleSheet, StatusBar,Dimensions } from "react-native";
import { SafeAreaView } from "react-navigation";
import Count from "./Count";
import { Avatar } from "react-native-elements";
import CoverImage from "./CoverImage";

export default class ProfileHeaderInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos_count: 0,
      followers_count: 0
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.profileHeader}>
        <CoverImage />
        <View style={[styles.mainSection]}>
          <View style={styles.userDetails}>
            <Text style={styles.userName}>UserName</Text>
            <Text style={styles.userDesc}>Description</Text>
          </View>
          <Avatar
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar1.png"
            }}
            size={150}
            rounded
          />
        </View>
        <View style={styles.statSection}>
          <Count num={this.state.photos_count}>Photos</Count>
          <Count num={this.state.followers_count}>Following</Count>
        </View>
      </SafeAreaView>
    );
  }
}

const margin = 15;

const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: "#fff",
    paddingBottom: margin,
    width: 100 + "%"
  },
  profileHeaderShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  mainSection: {
    width: 100 + "%",
    marginTop: Dimensions.get('window').height/6,
    marginBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  userDetails: {
    flex: 1
  },
  userName: {
    fontSize: 39,
    fontWeight: "600",
    color: "#364047"
  },
  userUrl: {
    fontSize: 12,
    color: "#364047"
  },
  userDesc: {
    fontSize: 14,
    fontWeight: "500",
    color: "#364047",
    lineHeight: 19,
    marginTop: 7
  },
  statSection: {
    paddingLeft: margin * 2,
    paddingRight: margin,
    flexDirection: "row"
  }
});