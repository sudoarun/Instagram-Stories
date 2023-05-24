import { View, Text } from "react-native";
import InstaStories from "./components/InstaStories";
import StoryModal from "./components/StoryModal";
import { useState } from "react";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false); // State Up lifting
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ marginTop: 10 }}>
      <InstaStories toggleModal={toggleModal} />
      <StoryModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </View>
  );
}
