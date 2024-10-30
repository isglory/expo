import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

function ScreenA() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.greetingText}>옷장을 손안에</Text>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => alert("리스트 보기 버튼이 눌렸습니다!")}
        >
          <Text style={styles.buttonText1}>추가하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => alert("리스트 보기 버튼이 눌렸습니다!")}
        >
          <Text style={styles.buttonText2}>옷장 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 1, // 1/3 화면 차지
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // 상단 배경 색상 (원하는 색으로 변경 가능)
  },
  bottomSection: {
    flex: 2, // 2/3 화면 차지
    justifyContent: "center", // 버튼을 수직 중앙으로 배치
    alignItems: "center",
    backgroundColor: "#fff", // 하단 배경 색상
  },
  greetingText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  button1: {
    backgroundColor: "#CF364C",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    marginVertical: 10, // 버튼 간의 간격 조정
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#fff",
    border: "2px solid #CF364C",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    marginVertical: 10, // 버튼 간의 간격 조정
    alignItems: "center",
  },
  buttonText1: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#CF364C",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ScreenA;
