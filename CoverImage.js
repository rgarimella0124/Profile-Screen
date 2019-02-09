import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient as Gradient } from "expo";

const CoverImage = () => {
  return (
    <View style={styles.profileCover}>
      <Image
        style={styles.profileCoverImage}
        source={{
          uri:
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM-970-80.jpg"
        }}
      />
      <Gradient
        colors={[
          "rgba(0,0,0,1)",
          "rgba(0,0,0,0.0)",
          "rgba(255,255,255,0.0)",
          "rgba(255,255,255,0.2)",
          "rgba(255,255,255,0.5)",
          "rgba(255,255,255,0.8)",
          "rgba(255,255,255,1)"
        ]}
        style={[styles.profileCoverGradient, { height: 200 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileCover: {
    height: 200,
    position: "absolute",
    width: 100 + "%"
  },
  profileCoverGradient: {
    height: 200,
    width: 100 + "%",
    position: "absolute"
  },
  profileCoverImage: {
    height: 200,
    width: 100 + "%",
    position: "absolute"
  }
});

export default CoverImage;