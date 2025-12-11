import { StyleSheet,  View,  } from "react-native";
import React from "react";
import Brand from "../components/login/Brand";
import LoginForm from "../components/login/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Brand />
      <LoginForm />
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

});
