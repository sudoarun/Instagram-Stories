import { React } from "react";
import { Button, View, Text } from "react-native";
import Modal from "react-native-modal";
// import { Video, ResizeMode } from "expo-av";

const StoryModal = ({ isModalVisible, toggleModal, videoUrl }) => {
  console.log(videoUrl);
  return (
    <>
      <View>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>{videoUrl}</Text>
            {/* <Video
              style={styles.video}
              source={{
                uri: Status,
              }}
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              shouldPlay
            /> */}
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    </>
  );
};
export default StoryModal;
