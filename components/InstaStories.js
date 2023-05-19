import * as react from "react";
// import { Text, View } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import user from "../user.json";

const InstaStories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {user.map((data, index) => (
        <View key={index} style={{ width: 100, flex: 1, alignItems: "center" }}>
          <LinearGradient
            colors={["#A459D1", "#E57C23", "#E76161"]}
            style={{ padding: 2, borderRadius: 50 }}
          >
            <Image
              source={{
                uri: data.img,
              }}
              style={style.img}
            />
          </LinearGradient>

          <Text style={style.instaText}>{data.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
const style = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 4,
    backgroundColor: "white",
    borderColor: "white",
  },
  instaText: {
    textTransform: "lowercase",
  },
});
export default InstaStories;
