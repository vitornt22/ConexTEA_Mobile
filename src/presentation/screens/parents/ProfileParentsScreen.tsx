import {TouchableOpacity} from 'react-native';
import {Image, Text, View} from 'react-native';
import {images} from '../../../utils/constants/images';
import {StatisticCard} from '../../components/statisticCard';
import Icon from '@react-native-vector-icons/fontawesome6';

export function ProfileParentsScreen({navigation}: any) {
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
            Antonia Maria de Sousa
          </Text>
          <Text className="text-lg ">Mãe de Valentina Maria da Silva</Text>
          <View className="mt-4 p-5 rounded-lg  bg-white elevation-lg">
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
          <View className="flex-row justify-between">
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
          <TouchableOpacity className=" rounded-lg bg-primaryRed p-5 flex-row justify-between">
            <Text className="text-white text-2xl font-bold">
              Perfil da Valentina
            </Text>
            <Icon
              name="chevron-right"
              color="white"
              iconStyle="solid"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
