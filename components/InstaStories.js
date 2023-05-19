import * as react from "react";
// import { Text, View } from "react-native-paper";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import user from "../user.json";

const InstaStories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {user.map((data, index) => (
        <View key={index} style={{ width: 100 }}>
          <Image
            source={{
              uri: data.img,
            }}
            style={style.img}
          />
          {/* <Text>{data.name}</Text> */}
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
  },
});
export default InstaStories;
