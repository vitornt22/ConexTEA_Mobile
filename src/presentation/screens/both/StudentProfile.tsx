import {Image, Text, View} from 'react-native';
import {images} from '../../../utils/constants/images';
import {FloatButton} from '../../components/buttons/FloatButton';
import {theme} from '../../../utils/constants/theme';
import {StudentProfileTabView} from './StudentTabView';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {evolutionReportText} from '../../../data/mockups/evolutionReportText';

export function StudentProfile() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1  bg-white">
      <View className="bg-blue-500 h-[20%]">
        <Image
          className="w-[100%] h-[100%] opacity-25"
          source={require('../../../../assets/images/banners/teacher.png')}
        />
        <Image
          className="w-32 h-32 absolute rounded-full z-10 bottom-[-30] left-5"
          source={images.avatar1}
        />
        <View className="flex-row absolute bottom-[0] z-10 right-4">
          <FloatButton
            title={'PEI'}
            buttonColor={'white'}
            textColor={theme.primary}
            iconName={'chart-bar'}
            onPress={() => navigation.navigate('PEI')}
          />
          <View className="w-3" />
          <FloatButton
            onPress={() => navigation.navigate('chatPage')}
            title={'Chat'}
            buttonColor={theme.secondary}
            textColor={'white'}
            iconName={'comments'}
          />
        </View>
      </View>
      <View className="bg-white p-5 px-8">
        <View className="top-10">
          <Text className=" text text-primary font-bold text-2xl">
            Prof. Antonia Maria de Sousa
          </Text>
          <View className="flex-row mb-3 justify">
            <Text className="text-sm text-subtitle">12/03/2015</Text>
            <Text className="text-sm text-subtitle">Feminino</Text>
            <Text className="text-sm text-subtitle ">Feminino</Text>
          </View>
          <Text
            onPress={() => {
              navigation.navigate('customReport', {
                text: evolutionReportText,
                reportName: 'Relatório de Aluno',
              });
            }}
            className="underline font-bold text-sm text-primary mb-2">
            Gerar Relatório Personalizado
          </Text>
          <Text className="text-sm text-subtitle ">
            Nivel de apoio: Moderado
          </Text>
          <Text className="text-sm text-subtitle ">Nivel de Autismo: 1</Text>
          <Text className="text-sm text-subtitle ">
            Comunicação: Não verbal
          </Text>
        </View>
      </View>
      <StudentProfileTabView navigation={navigation} />
    </View>
  );
}
