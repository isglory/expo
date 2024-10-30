import React from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet } from "react-native";

function ScreenD() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.notion.so/" }}
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

export default ScreenD;
