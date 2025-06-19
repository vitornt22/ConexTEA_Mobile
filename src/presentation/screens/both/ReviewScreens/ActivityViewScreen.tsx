import {View, Text, ScrollView} from 'react-native';
import {RootStackParamList} from '../../../navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ReviewItemRow} from '../../../components/ReviewItemRow';
import {formatDate} from '../../../../utils/helpers/format_date_helper';
import {getActivityTypeDescription} from '../../../../utils/constants/activity_view_helper';
import {RatingIndicator} from '../../../components/RatingIndicator';

type ActivityViewScreenRouteProp = RouteProp<
  RootStackParamList,
  'activityView'
>;

export default function ActivityViewScreen() {
  const route = useRoute<ActivityViewScreenRouteProp>();
  const {item} = route.params;
  console.log(item.othersInformations);

  const activityInfo = getActivityTypeDescription(
    item.othersInformations.activityType,
  );

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding: 20, paddingBottom: 100}}>
      {/* Header */}
      <View className="mb-6 items-start">
        <Text className="text-3xl font-bold text-primary mb-1">
          Avaliação do Aluno
        </Text>
        <Text className="text-base text-slate-600 text-center">
          Registro de Atividade Realizada
        </Text>
      </View>
      {/* Informations Card */}
      <View className="bg-white elevation-lg rounded-lg p-5">
        <ReviewItemRow
          iconName={'book-open-reader'}
          title={'Disciplina'}
          text={item?.subjectName}
        />
        <ReviewItemRow
          iconName={'user'}
          title={'Disciplina'}
          text={item?.subjectName}
        />
        <ReviewItemRow
          iconName={'calendar-days'}
          title={'Data'}
          text={formatDate(item?.date)}
        />
      </View>
      <View className="bg-white mt-4  elevation-lg rounded-lg p-5">
        <View className="mb-6 items-start">
          <Text className="text-xl  font-bold text-primary mb-1">
            Atividade Registrada
          </Text>
          <Text className="text-base text-slate-600 text-center">
            Avaliação da participação do aluno na atividade
          </Text>
        </View>
        <View className="  border-primary">
          <Text className="my-3 font-bold">Tipo de Atividade</Text>
          <Text>{activityInfo.name}</Text>
          <Text className="my-3 font-bold">O que significa? </Text>
          <Text>{activityInfo.description}</Text>
        </View>
      </View>
      <View className="bg-white mt-4  elevation-lg rounded-lg p-5">
        <Text className="font-bold mb-4">
          O Aluno: {item.othersInformations.participationSelectedLabel}
        </Text>
        <RatingIndicator
          rating={Number(item.othersInformations.participationSelect)}
          maxRating={3}
        />
      </View>
      <View className="bg-white mt-4  elevation-lg rounded-lg p-5">
        <Text className="font-bold mb-4">Desempenho do Aluno</Text>
        <Text>{item.othersInformations.performance}</Text>
      </View>
    </ScrollView>
  );
}
