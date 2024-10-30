import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Main"); // 1.5초 후 Main(TabNavigator)로 이동
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/introScreen.png")} // 이미지 파일 경로
        style={styles.image} // 이미지 스타일
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // 이미지 비율 유지하며 크기 조정
  },
});

export default IntroScreen;
