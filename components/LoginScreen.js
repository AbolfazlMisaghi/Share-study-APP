import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pngLogin}>
        <Image
          style={styles.imageLogin}
          source={require("../assets/logoLogin.jpg")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#F2F4F3"
    
  },
  imageLogin: {
    width: 200,
    height: 200,
    marginTop: 20,
    padding: 5,
  },
});
