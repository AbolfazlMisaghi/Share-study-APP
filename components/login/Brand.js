import { StyleSheet, Image, View } from "react-native";
import React from "react";

const Brand = () => {
  return (
    <View>
      <View style={styles.pngLogin}>
        <Image
          style={styles.imageLogin}
          source={require("../../assets/logoLogin.jpg")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  imageLogin: {
    width: 200,
    height: 200,
    marginTop: 20,
    padding: 5,
  },
});
