import {useState} from 'react';
import {Modal, Alert, View, Text, Pressable} from 'react-native';
import {LoginTextInput} from '../inputs/LoginTextInput';
import {DefaultButton} from '../buttons/defaultButton';
import {theme} from '../../../utils/constants/theme';
import Icon from '@react-native-vector-icons/fontawesome6';

type RequestNewPasswordProps = {
  modalVisible: {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
export function RequestNewPassword({modalVisible}: RequestNewPasswordProps) {
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
              Informe o Seu Email
            </Text>
          </View>
          <LoginTextInput
            placeholder="Digite seu email"
            iconName={'envelope'}
            mode="email"
          />
          <DefaultButton
            style={{borderRadius: 100}}
            height={52}
            color={theme.primary}
            placeholder={'Solicitar Nova Senha'}
            buttonFunction={() => {
              modalVisible.setState(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
