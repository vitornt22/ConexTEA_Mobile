import {Modal, Alert, View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../../utils/constants/theme';
import Icon from '@react-native-vector-icons/fontawesome6';
import {ScrollView} from 'react-native-gesture-handler';
import {DefaultButton} from '../buttons/defaultButton';

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
      <View className="justify-center items-center bg-black/30 flex-1">
        <View
          className="bg-white rounded-3xl elevation-lg w-[80%] p-5"
          style={{
            maxHeight: 600,
            minHeight: 200,
          }}>
          <View className="flex-row items-center mb-3">
            <Icon
              onPress={() => {
                modalVisible.setState(false);
              }}
              name="chevron-left"
              color={theme.primary}
              iconStyle="solid"
              size={20}
            />
            <Text className="text-2xl ml-3 text-primary font-bold">
              Informações
            </Text>
          </View>

          {/* Scroll apenas no conteúdo interno */}
          <ScrollView
            style={{flexGrow: 0}}
            contentContainerStyle={{paddingBottom: 10}}>
            <Text>{text}</Text>
          </ScrollView>
          <DefaultButton
            style={{borderRadius: 50}}
            icon={<Icon name="play" color={'white'} iconStyle="solid" />}
            color={theme.primary}
            placeholder={'Ouvir Audio'}
            buttonFunction={() => {}}
          />
        </View>
      </View>
    </Modal>
  );
}
