import {Modal, Alert, View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../../utils/constants/theme';
import Icon from '@react-native-vector-icons/fontawesome6';
import {AudioReportButton} from '../ReportAudioButton';

type InformationModalProps = {
  text: string;
  modalVisible: {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
export function InformationModal({modalVisible, text}: InformationModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible.state}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        modalVisible.setState(false);
      }}>
      {/* Container que centraliza o modal */}
      <View className="flex-1 justify-center items-center bg-black/30">
        <View className="bg-white w-[90%] p-7 py-12 rounded-3xl elevation-lg ">
          <View className="flex-row items-center mb-5">
            <Icon
              onPress={() => {
                modalVisible.setState(false);
              }}
              name="chevron-left"
              color={theme.primary}
              iconStyle="solid"
              size={20}
            />
            <Text className="text-2xl ml-3  text-primary font-bold ">
              Informações
            </Text>
          </View>
          <Text>{text}</Text>
          <TouchableOpacity className="h-10 items-center mt-3    flex-row ">
            <Icon
              style={{marginRight: 10}}
              size={15}
              color={theme.blueText}
              name="play"
              iconStyle="solid"
            />

            <Text className="  text-lg underline font-bold text-blueText">
              Informações por audio
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
