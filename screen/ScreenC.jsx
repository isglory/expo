import React from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet } from "react-native";

function ScreenC() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://gw.mailplug.com/mail/1" }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default ScreenC;
