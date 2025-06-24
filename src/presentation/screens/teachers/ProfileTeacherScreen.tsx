import {Image, Text, View} from 'react-native';
import {images} from '../../../utils/constants/images';
import {StatisticCard} from '../../components/statisticCard';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {FloatButton} from '../../components/buttons/FloatButton';
import {theme} from '../../../utils/constants/theme';
import {ProfileTeacherScreenHook} from '../../hooks/ProfileTeacherScreenHook';
import {
  getSubjectLabel,
  getWorkShiftLabel,
} from '../../../utils/constants/getSubject';

export function ProfileTeacherScreen() {
  const {data, loading, navigation, studentId} = ProfileTeacherScreenHook();
  const teacher = data?.teacher;

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
        <FloatButton
          onPress={() => navigation.navigate('Initial')}
          style={{position: 'absolute', borderRadius: 50, top: 10, right: 10}}
          title={'Sair'}
          buttonColor={'white'}
          textColor={theme.primary}
          iconName={'right-from-bracket'}
        />
      </View>
      <View className="p-12 absolute bottom-0 self-center bg-white h-[80%] w-[100%] rounded-t-[55]">
        <View className="top-10">
          <Text className=" text text-primary font-bold text-2xl">
            Prof. {teacher?.name}
          </Text>
          <View className="flex-row mb-3 justify">
            <Text className="text-lg ">ID: {teacher?.registration_id}</Text>
            <Text className="text-lg ml-7 "> Atuação: 4 anos</Text>
          </View>
        </View>
        <ScrollView className="my-10 ">
          <View className="flex-row justify-between">
            <StatisticCard
              count={data?.related_data.activity_count || 0}
              title={'Atividades'}
              iconName={'note-sticky'}
              iconType="solid"
            />
            <StatisticCard
              count={data?.related_data.checkin_count || 0}
              title={'Check-Ins'}
              iconType="solid"
              iconName={'check'}
            />
            <StatisticCard
              count={data?.related_data.review_count || 0}
              title={'Avaliações'}
              iconName={'book'}
              iconType="solid"
            />
          </View>
          <View className="mt-4 mx-1 p-5 rounded-lg  bg-white elevation-lg">
            <Text className="mb-3 ">Disciplina</Text>

            <Text className="text-subtitle">
              {getSubjectLabel(teacher?.subject || '')}
            </Text>
          </View>
          <View className="mt-4 mx-1 p-5 rounded-lg  bg-white elevation-lg">
            <Text className="mb-3 ">Turnos de Trabalho </Text>
            <Text className="text-subtitle">
              {getWorkShiftLabel(teacher?.work_shift || '')}
            </Text>
          </View>
          <View className="mt-4 mx-1 p-5 rounded-lg  bg-white elevation-lg">
            <Text className="mb-3 ">Especialização em Educação Especial? </Text>
            <Text className="text-subtitle">
              {teacher?.has_specialization == true ? 'Possui' : 'Não Possui'}
            </Text>
          </View>
          <View className="mx-1 my-4 p-5 bg-white rounded-lg   elevation-lg">
            <Text className="mb-3">Informações Pessoais:</Text>
            <Text className="text-start text-subtitle">
              Nascimento: {teacher?.birthdate}
            </Text>
            <Text className="text-start text-subtitle">
              Email: {teacher?.email}
            </Text>
            <Text className="text-start text-subtitle">
              Endereço: {teacher?.address}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
