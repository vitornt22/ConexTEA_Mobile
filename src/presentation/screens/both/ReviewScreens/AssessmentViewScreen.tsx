import {View, Text, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/types';
import {ReviewItemRow} from '../../../components/ReviewItemRow';
import {formatDate} from '../../../../utils/helpers/format_date_helper';
import {RatingIndicator} from '../../../components/RatingIndicator';

type AssessmentViewScreenRouteProp = RouteProp<
  RootStackParamList,
  'assessmentView'
>;

export default function AssessmentViewScreen() {
  const route = useRoute<AssessmentViewScreenRouteProp>();
  const {item} = route.params;
  const skills = item.othersInformations?.habilities;
  const behaviors = item.othersInformations?.behavior;

  const skillLabels = {
    interation: 'Interação Social',
    concentration: 'Atenção e Foco',
    autonomy: 'Autonomia',
    comunication: 'Comunicação Funcional',
    problemSolving: 'Resolução de Problemas',
    compreension: 'Compreensão de Instruções',
  };
  const behaviorLabels = {
    regulation: 'Regulação Emocional',
    respect: 'Respeito ao Espaço do Outro',
    resistance: 'Resistência às Transições',
    challenges: 'Comportamentos Desafiadores',
    participation: 'Participação Tranquila',
    punctuality: 'Pontualidade na Rotina',
  };

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
          Relatório de Desenvolvimento
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
            Habilidades
          </Text>
          <Text className="text-base text-slate-600 text-center">
            Avaliação das capacidades desenvolvidas
          </Text>
        </View>
        <View>
          {Object.entries(skills).map(([key, value]) => {
            return (
              <View key={key}>
                <View>
                  <Text>{skillLabels[key as keyof typeof skillLabels]}</Text>
                </View>
                <RatingIndicator rating={Number(value)} maxRating={3} />
              </View>
            );
          })}
        </View>
      </View>
      <View className="bg-white mt-4  elevation-lg rounded-lg p-5">
        <View className="mb-6 items-start">
          <Text className="text-xl  font-bold text-primary mb-1">
            Comportamento
          </Text>
          <Text className="text-base text-slate-600 text-center">
            Avaliação dos padrões comportamentais
          </Text>
        </View>
        <View>
          {Object.entries(behaviors).map(([key, value]) => {
            return (
              <View key={key}>
                <View>
                  <Text>
                    {behaviorLabels[key as keyof typeof behaviorLabels]}
                  </Text>
                </View>
                <RatingIndicator rating={Number(value)} maxRating={3} />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
