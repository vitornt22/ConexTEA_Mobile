import React from 'react';
import {Text, View} from 'react-native';
import {CardsCarousel} from '../../components/CardsCarousel';
import {StatisticCard} from '../../components/statisticCard';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StudentsListTile} from '../../components/listTiles/StudentsListTile';
import {studentsList} from '../../../data/mockups/studentsList';
import {NavigationProp} from '../../navigation/types';

export function HomeTeacherScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="px-7 bg-white">
      <Text className="mt-3 text-2xl text-blueText font-semibold">
        Bem Vinda, Mãe da Valentina
      </Text>
      <CardsCarousel type="teacher" navigation={navigation} />
      <View>
        <Text className="mt-3 text-2xl text-blueText font-semibold ">
          Estatísticas
        </Text>
        <View className="flex-row justify-between">
          <StatisticCard
            count={20}
            title={'Registros'}
            iconName={'chart-bar'}
          />
          <StatisticCard
            count={100}
            title={'Alunos'}
            iconType="solid"
            iconName={'book-open'}
          />
          <StatisticCard
            count={20}
            title={'Check-Ins'}
            iconName={'face-smile'}
          />
        </View>
      </View>
      <View>
        <Text className="mt-3 text-2xl text-blueText font-semibold">
          Alunos em observação
        </Text>
        <ScrollView>
          {studentsList.map(item => (
            <StudentsListTile key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
