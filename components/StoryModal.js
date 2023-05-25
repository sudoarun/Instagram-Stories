import { React } from "react";
import { Button, View, Text } from "react-native";
import Modal from "react-native-modal";
import { Video } from "expo-av";

const StoryModal = ({ isModalVisible, toggleModal, videoUrl }) => {
  //   console.log(videoUrl);
  return (
    <>
      <View>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Button title="Hide modal" onPress={toggleModal} />
            {/* <Text>{videoUrl}</Text> */}
            <Video
              style={{ width: "100%", height: 700, marginTop: 10 }}
              source={{
                uri: videoUrl,
              }}
              isLooping
              shouldPlay
            />
          </View>
        </Modal>
      </View>
    </>
  );
};
export default StoryModal;
