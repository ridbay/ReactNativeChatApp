import React from "react";
import { StyleSheet, Dimensions, Text } from "react-native";

import { Button } from "react-native-paper";

const { width, heigth } = Dimensions.get("screen");

export default function FormButton({ title, modeValue, ...rest }) {
  return (
    <Button
      mode={modeValue}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  },
  buttonContainer: {
    width: width / 2,
    heigth: heigth / 15
  }
});
