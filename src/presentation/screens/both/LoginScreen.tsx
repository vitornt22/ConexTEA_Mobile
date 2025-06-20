import Icon from '@react-native-vector-icons/fontawesome6';
import {TouchableOpacity} from 'react-native';
import {Image, Text, View} from 'react-native';
import {theme} from '../../../utils/constants/theme';
import {LoginTextInput} from '../../components/inputs/LoginTextInput';
import {DefaultButton} from '../../components/buttons/defaultButton';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RequestNewPassword} from '../../components/modals/RequestNewPassword';
import {SetStateAction, useState} from 'react';
import {RootStackParamList} from '../../navigation/types';

type LoginRouteProp = RouteProp<RootStackParamList, 'Login'>;

export function LoginScreen({navigation}: any) {
  const route = useRoute<LoginRouteProp>(); // agora route.params tem o tipo certo
  const {screenRoute = 'teacher'} = route.params || {};
  const [modalVisible, setModalVisible] = useState(false); // Modal visível por padrão
  const parentsText =
    'Faça o login para acompanhar a evolução e progresso do seu filho na nossa escola.';
  const teacherText =
    'Faça o login para registrar e acompanhar a evolução dos seus alunos com TEA';

  const teacher = (
    <Image
      className="w-[100%] h-[40%] opacity-25"
      source={require('../../../../assets/images/banners/teacher.png')}
    />
  );

  const family = (
    <Image
      className="w-[100%] h-[40%] opacity-25"
      source={require('../../../../assets/images/banners/family.jpg')}
    />
  );

  return (
    <View className="flex-1 bg-white">
      <RequestNewPassword
        modalVisible={{
          state: modalVisible,
          setState: setModalVisible,
        }}
      />
      <View className="bg-blue-500 h-[100%]">
        {screenRoute === 'teacher' ? teacher : family}
        <View className="absolute">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="elevation-md  absolute bg-blue-500  p-4 top-12 left-5 rounded-full">
            <Icon
              name="arrow-left"
              size={15}
              color="#FFFF"
              iconStyle="solid" // <- adicione essa linha
            />
          </TouchableOpacity>
          <View className="left-5 top-32">
            <Text className="  text-white text-2xl   font-bold">
              {screenRoute == 'teacher' ? 'Professor' : 'Pai ou Responsavel'}
            </Text>
            <Text className="text-white text-md w-[60%]">
              {screenRoute == 'teacher' ? teacherText : parentsText}
            </Text>
          </View>
        </View>
      </View>
      <View className="p-12 absolute bottom-0 self-center bg-white h-[70%] w-[100%] rounded-t-[55]">
        <Text className="pt-6 text-primary text-2xl   font-bold">Login</Text>
        <View className="h-3"></View>
        <LoginTextInput
          placeholder="Digite seu email"
          iconName={'envelope'}
          mode="email"
        />
        <LoginTextInput
          placeholder="Digite sua Senha"
          iconName={'lock'}
          iconStyle="solid"
          mode="password"
        />
        <View className="items-end mt-4">
          <Text
            onPress={() => setModalVisible(true)}
            className=" text-primary  text-sm font-semibold">
            Solicitar nova Senha
          </Text>
        </View>
        <DefaultButton
          style={{borderRadius: 100}}
          height={52}
          color={theme.primary}
          placeholder={'Login'}
          buttonFunction={() => navigation.navigate(screenRoute)}
        />
        <View className="flex-row mt-8 items-center justify-center">
          <View className="border-b border-b-gray-400 h-5 w-[40%] mr-3"></View>
          <Text>Ou</Text>
          <View className="border-b border-b-gray-400 h-5 w-[40%] ml-3"></View>
        </View>
        <Text className="text-subtitle text-sm text-center mt-12">
          Solicite à gestão escolar a mudança ou emissão de uma nova senha para
          seu acesso presencialmente
        </Text>
      </View>
    </View>
  );
}
