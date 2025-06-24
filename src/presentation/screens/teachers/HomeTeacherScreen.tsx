import React from 'react';
import {Text, View} from 'react-native';
import {CardsCarousel} from '../../components/CardsCarousel';
import {StatisticCard} from '../../components/statisticCard';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StudentsListTile} from '../../components/listTiles/StudentsListTile';
import {studentsList} from '../../../data/mockups/studentsList';
import {NavigationProp} from '../../navigation/types';
import {HomeTeacherScreenHook} from '../../hooks/HomeTeacherScreenHook';

export function HomeTeacherScreen() {
  const {data, loading, navigation, studentId} = HomeTeacherScreenHook();

  return (
    <ScrollView className="px-7 bg-white">
      <Text className="mt-3 text-2xl text-blueText font-semibold">
        Bem Vindo(A), {data?.teacher.name}
      </Text>
      <CardsCarousel type="teacher" navigation={navigation} />
      <View>
        <Text className="mt-3 text-2xl text-blueText font-semibold ">
          Estatísticas
        </Text>
        <View className="flex-row justify-between">
          <StatisticCard
            count={data?.totalActivities || 0}
            title={'Atividades'}
            iconName={'chart-bar'}
          />
          <StatisticCard
            count={data?.totalStudents || 0}
            title={'Alunos'}
            iconType="solid"
            iconName={'book-open'}
          />
          <StatisticCard
            count={data?.totalCheckins || 0}
            title={'Check-Ins'}
            iconName={'face-smile'}
          />
        </View>
      </View>
      <View>
        <Text className="mt-3 text-2xl text-blueText font-semibold">
          Alunos
        </Text>
        <ScrollView>
          {data?.students.map(item => (
            <StudentsListTile key={item.id} student={item} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
