import {TouchableOpacity} from 'react-native';
import {Image, Text, View} from 'react-native';
import {images} from '../../../utils/constants/images';
import {StatisticCard} from '../../components/statisticCard';
import Icon from '@react-native-vector-icons/fontawesome6';
import {DefaultButton} from '../../components/buttons/defaultButton';
import {theme} from '../../../utils/constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import {FloatButton} from '../../components/buttons/FloatButton';
import {useProfileParentsScreenHook} from '../../hooks/ProfileParentsScreenHook';
import LoadingScreen from '../../components/LoadingScreen';
import {getRelationshipDegreeLabel} from '../../../utils/helpers/get_relationship_name';

export function ProfileParentsScreen() {
  const {data, loading, navigation, studentId} = useProfileParentsScreenHook();
  const contentScreen = (
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
      <View className="px-6 py-12 absolute bottom-0 self-center bg-white h-[80%] w-[100%] rounded-t-[55]">
        <View className="top-10">
          <Text className=" text text-primary font-bold text-2xl">
            {data?.name}
          </Text>
          <Text className="text-lg">
            {getRelationshipDegreeLabel(data?.relationship_degree || '')}
            <Text> de </Text>
            {data?.student?.name}
          </Text>
          <View className="mt-4 p-5 rounded-lg  bg-white elevation-lg">
            <Text className="mb-3">Informações Pessoais:</Text>
            <Text className="text-start text-subtitle">
              Nascimento: {data?.birth_date}
            </Text>
            <Text className="text-start text-subtitle">
              Contato: {data?.contact}
            </Text>
            <Text className="text-start text-subtitle">
              Email:{data?.email}
            </Text>
            <Text className="text-start text-subtitle">
              Endereço: {data?.address}
            </Text>
          </View>
          <View className=" flex-row justify-between space-x-1">
            <StatisticCard
              count={20}
              title={'Interações'}
              iconName={'computer-mouse'}
              iconType="solid"
            />
            <StatisticCard count={10} title={'Chat'} iconName={'comments'} />
            <StatisticCard
              count={20}
              title={'Registros Lidos'}
              iconName={'book'}
              iconType="solid"
            />
          </View>
          <DefaultButton
            icon={<Icon name="user" color={'white'} />}
            color={theme.primary}
            placeholder={'Perfil do Filho'}
            buttonFunction={() => {
              if (data?.student) {
                navigation.navigate('studentProfile', {student: data?.student});
              } else {
                console.warn('Student não disponível');
              }
            }}
          />
        </View>
      </View>
    </View>
  );

  return loading === true ? <LoadingScreen /> : contentScreen;
}
