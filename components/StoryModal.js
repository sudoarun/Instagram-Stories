import { React } from "react";
import { Button, View } from "react-native";
import Modal from "react-native-modal";
// import { Video, ResizeMode } from "expo-av";

const StoryModal = ({ isModalVisible, toggleModal }) => {
  console.log(isModalVisible);
  return (
    <>
      <View>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
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
