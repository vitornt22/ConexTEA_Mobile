import {Image, Text, View} from 'react-native';
import {images} from '../../../utils/constants/images';
import {StatisticCard} from '../../components/statisticCard';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

export function ProfileTeacherScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 bg-white">
      <View className="bg-blue-500 h-[100%]">
        <Image
          className="w-[100%] h-[40%] opacity-25"
          source={require('../../../../assets/images/banners/teacher.png')}
        />
        <Image
          className="w-40 h-40 absolute rounded-full z-10 top-[50] left-10"
          source={images.avatar1}
        />
      </View>
      <View className="p-12 absolute bottom-0 self-center bg-white h-[80%] w-[100%] rounded-t-[55]">
        <View className="top-10">
          <Text className=" text text-primary font-bold text-2xl">
            Prof. Antonia Maria de Sousa
          </Text>
          <View className="flex-row mb-3 justify">
            <Text className="text-lg ">ID: 10239282</Text>
            <Text className="text-lg ml-7 "> Atuação: 4 anos</Text>
          </View>
        </View>
        <ScrollView className="my-10 ">
          <View className="flex-row justify-between">
            <StatisticCard
              count={20}
              title={'Alunos'}
              iconName={'user-group'}
              iconType="solid"
            />
            <StatisticCard count={10} title={'Chat'} iconName={'comments'} />
            <StatisticCard
              count={20}
              title={'Registros'}
              iconName={'book'}
              iconType="solid"
            />
          </View>
          <View className="mt-4 mx-1 p-5 rounded-lg  bg-white elevation-lg">
            <Text className="mb-3 ">Disciplinas</Text>
            {['Geografia', 'História'].map((item, index) => (
              <Text className="text-subtitle" key={index}>
                {item}
              </Text>
            ))}
          </View>
          <View className="mt-4 mx-1 p-5 rounded-lg  bg-white elevation-lg">
            <Text className="mb-3 ">Turnos de Trabalho </Text>
            {['Manhã', 'Tarde'].map((item, index) => (
              <Text className="text-subtitle" key={index}>
                {item}
              </Text>
            ))}
          </View>
          <View className="mt-4 mx-1 p-5 rounded-lg  bg-white elevation-lg">
            <Text className="mb-3 ">Especialização em Educação Especial? </Text>
            <Text className="text-subtitle">Não</Text>
          </View>
          <View className="mx-1 my-4 p-5 bg-white rounded-lg   elevation-lg">
            <Text className="mb-3">Informações Pessoais:</Text>
            <Text className="text-start text-subtitle">
              Nascimento: 24/08/1968
            </Text>
            <Text className="text-start text-subtitle">
              Email: Mariasousa@gmail.com
            </Text>
            <Text className="text-start text-subtitle">
              Endereço: Rua Antonio Lisboa , 267
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
