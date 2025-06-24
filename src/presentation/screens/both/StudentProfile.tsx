import {Image, Text, View} from 'react-native';
import {images} from '../../../utils/constants/images';
import {FloatButton} from '../../components/buttons/FloatButton';
import {theme} from '../../../utils/constants/theme';
import {StudentProfileTabView} from './StudentTabView';
import {NavigationProp, RootStackParamList} from '../../navigation/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  getAutismLevelLabel,
  getSexLabel,
  getSupportLevelLabel,
} from '../../../utils/helpers/get_relationship_name';

export function StudentProfile() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'studentProfile'>>();
  const {student} = route.params;

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
            onPress={() => navigation.navigate('PEI', {studentId: student.id})}
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
            {student.name}
          </Text>
          <View className="flex-row mb-3 justify">
            <Text className="text-sm text-subtitle">{student.birthdate}</Text>
            <Text className="ml-2 text-sm text-subtitle">
              {getSexLabel(student.gender || '')}
            </Text>
          </View>

          <Text className="text-sm text-subtitle ">
            Nivel de apoio: {getSupportLevelLabel(student.support_level)}
          </Text>
          <Text className="text-sm text-subtitle ">
            Nivel de Autismo: {getAutismLevelLabel(student.autism_level)}
          </Text>
          <Text className="text-sm text-subtitle ">Comunicação:</Text>
        </View>
      </View>
      <StudentProfileTabView student={student} navigation={navigation} />
    </View>
  );
}
