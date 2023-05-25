import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import user from "../user.json";

const InstaStories = ({ toggleModal, setVideoUrl }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {user.map((data, index) => (
        <View key={index} style={style.InstaCol}>
          <TouchableOpacity
            onPress={() => toggleModal() || setVideoUrl(data.video)}
          >
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
          </TouchableOpacity>

          <Text>{data.name}</Text>
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
  InstaCol: {
    width: 85,
    flex: 1,
    alignItems: "center",
  },
});
export default InstaStories;
