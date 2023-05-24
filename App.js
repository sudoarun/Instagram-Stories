import { View } from "react-native";
import InstaStories from "./components/InstaStories";
import StoryModal from "./components/StoryModal";
import { useState } from "react";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false); // State Up lifting
  const [videoUrl, setVideoUrl] = useState("");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ marginTop: 10 }}>
      <InstaStories toggleModal={toggleModal} setVideoUrl={setVideoUrl} />
      <StoryModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        videoUrl={videoUrl}
      />
    </View>
  );
}
