import {View, Text, ScrollView, Image} from 'react-native';
import {RootStackParamList} from '../../../navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ReviewItemRow} from '../../../components/ReviewItemRow';
import {formatDate} from '../../../../utils/helpers/format_date_helper';
import {getPictogramas} from '../../../../utils/constants/getImages';
import {ReviewInformationCard} from '../../../components/ReviewInformationCard';

type ActionViewScreenRouteProp = RouteProp<RootStackParamList, 'actionView'>;

export default function ActionViewScreen() {
  const route = useRoute<ActionViewScreenRouteProp>();
  const {item} = route.params;
  const image = getPictogramas(item.othersInformations.imageSelected);

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding: 20, paddingBottom: 100}}>
      {/* Header */}
      <View className="mb-6 items-start">
        <Text className="text-3xl font-bold text-primary mb-1">
          Ações Requeridas
        </Text>
        <Text className="text-base text-slate-600 text-center">
          Pedidos feitos pelo aluno com uso de pictogramas
        </Text>
      </View>

      {/* Informations Card */}
      <ReviewInformationCard item={item} />
      <View className="bg-white mt-4  elevation-lg rounded-lg p-5">
        <View className="items-start">
          <Text className="text-lg font-bold text-primary mb-1">
            O Aluno seleciou o pictograma:
            {item.othersInformations.imageName}
          </Text>

          <Image className="mt-4 w-40 h-40" source={image} />
        </View>
      </View>
      <View className="bg-white mt-4  elevation-lg rounded-lg p-5">
        <View className="items-start">
          <Text className="text-xl font-bold text-primary mb-1">
            Comentário do Professor
          </Text>
          <Text className="text-base">
            {item.othersInformations.teacherDescription}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
