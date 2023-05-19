import * as react from "react";
// import { Text, View } from "react-native-paper";
import { ScrollView, Text, View } from "react-native";
import user from "../user.json";

const InstaStories = () => {
  return (
    <ScrollView horizontal>
      {user.map((data, index) => (
        <View key={index}>
          <Text>{data.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
export default InstaStories;
