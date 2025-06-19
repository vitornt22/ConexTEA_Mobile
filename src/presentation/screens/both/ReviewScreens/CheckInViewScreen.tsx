import {View, Text, ScrollView, Image} from 'react-native';
import {RootStackParamList} from '../../../navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ReviewItemRow} from '../../../components/ReviewItemRow';
import {formatDate} from '../../../../utils/helpers/format_date_helper';
import {getActivityTypeDescription} from '../../../../utils/constants/activity_view_helper';
import {RatingIndicator} from '../../../components/RatingIndicator';
import {getImage} from '../../../../utils/constants/getImages';
import {getEmotionByNumber} from '../../../../utils/constants/checkIn_descriptions';

type CheckInViewScreenRouteProp = RouteProp<RootStackParamList, 'checkInView'>;

export default function CheckInViewScreen() {
  const route = useRoute<CheckInViewScreenRouteProp>();
  const {item} = route.params;
  console.log(item.othersInformations);

  const activityInfo = getActivityTypeDescription(
    item.othersInformations.activityType,
  );
  const descriptionEmoction = getEmotionByNumber(
    item.othersInformations.emoctionSelected,
  );

  const image = getImage(item.othersInformations.emoctionSelected);

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding: 20, paddingBottom: 100}}>
      {/* Header */}
      <View className="mb-6 items-start">
        <Text className="text-3xl font-bold text-primary mb-1">
          Check-In Emocional Coletado
        </Text>
        <Text className="text-base text-slate-600 text-center">
          Registro de Atividade Realizada
        </Text>
      </View>

      {/* Informations Card */}
      <View className="bg-white elevation-lg rounded-lg p-5">
        <Image className="absolute right-0 w-40 h-40" source={image} />

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
        <View className="items-start">
          <Text className="text-xl  font-bold text-primary mb-1">
            O Aluno Estava Sentindo: {item.othersInformations.emoctionName}
          </Text>
          <Text className="text-base text-slate-600 text-center">
            Avaliação da participação do aluno na atividade
          </Text>
        </View>
      </View>
      <View className="bg-white mt-4  elevation-lg rounded-lg p-5">
        <View className="items-start">
          <Text className="text-xl  font-bold text-primary mb-1">
            Descrição do Professor:
          </Text>
          <Text className="text-base text-slate-600 text-center">
            {item.othersInformations.teacherDescription}
          </Text>
        </View>
      </View>
      <View className="bg-white mt-4  elevation-lg rounded-lg p-5">
        <View className="items-start">
          <Text className="text-xl  font-bold text-primary mb-1">
            Descrição da emoção:
          </Text>
          <Text className="text-base text-slate-600 text-start">
            {descriptionEmoction.descricao}
          </Text>
        </View>
        <View className="items-start mt-3 ">
          <Text className="text-xl  font-bold text-primary mb-1">
            Quais Comportamentos Comuns?
          </Text>
          {descriptionEmoction.comportamentos.map(item => {
            return (
              <Text className="text-base text-slate-600 text-start">
                {item}
              </Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
