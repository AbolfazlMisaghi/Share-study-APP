import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Pressable,
} from "react-native";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View>
      <View style={styles.inputField}>
        <TextInput
          placeholder="شماره موبایل و نام کاربری و ایمیل"
          placeholderTextColor={"#444"}
        />
        <TextInput
          placeholder="رمز عبور"
          placeholderTextColor={"#444"}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>ورود</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
