import {Modal, Alert, View, Text} from 'react-native';
import {DefaultButton} from '../buttons/defaultButton';
import {theme} from '../../../utils/constants/theme';
import Icon from '@react-native-vector-icons/fontawesome6';
import {TextArea} from '../inputs/TextArea';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {DropdownInput} from '../inputs/DropDownInput';

type SaveCheckInModalProps = {
  modalVisible: {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
export function SaveCheckInModal({modalVisible}: SaveCheckInModalProps) {
  const navigation = useNavigation<NavigationProp>();

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
          <View className="flex-row items-center">
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
              Check-In Emocional
            </Text>
          </View>
          <Text className="text-subtitle">
            Você realizou um check-in, adicione uma descrição opcional e clique
            em salvar
          </Text>
          <TextArea
            placeholder={'Descreva sobre o checkInEmocional'}
            label={''}
          />

          <DefaultButton
            height={52}
            color={theme.primary}
            placeholder={'Salvar Check-In'}
            buttonFunction={() => {
              modalVisible.setState(false);
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
