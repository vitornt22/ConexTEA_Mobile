import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {CardsCarousel} from '../../components/CardsCarousel';
import {StatisticCard} from '../../components/statisticCard';
import {ScrollView} from 'react-native-gesture-handler';
import {useParentInitialScreenHook} from '../../hooks/parentInitialScreenHook';
import {HomeParentsHeader} from '../../components/headers/homeParentsHeader';
import LoadingScreen from '../../components/LoadingScreen';
import {InsideOutRankInitial} from '../both/graphScreens/InsideOutRankInitial';
import {theme} from '../../../utils/constants/theme';

export function HomeParentsScreen() {
  const {data, loading, navigation} = useParentInitialScreenHook();

  const contentScreen = (
    <View style={{flex: 1}}>
      {/* Header fixo */}
      <HomeParentsHeader
        name={data?.student_name}
        year={data?.current_year}
        schoolClass={data?.school_student_class}
      />
      <ScrollView className="px-7 bg-white">
        <Text className="mt-3 text-2xl text-blueText font-semibold">
          Bem Vinda, {data?.relationship_degree} {data?.preposition}{' '}
          {data?.student_name}
        </Text>
        <CardsCarousel type="parents" navigation={navigation} />
        <View>
          <Text className="mt-3 text-2xl text-blueText font-semibold ">
            Estatísticas
          </Text>
          <View className="flex-row justify-between">
            <StatisticCard
              count={data?.total_activities || 0}
              title={'Atividades'}
              iconName={'chart-bar'}
            />
            <StatisticCard
              count={data?.total_assessments || 0}
              title={'Avaliações'}
              iconName={'star'}
            />
            <StatisticCard
              count={data?.total_checkins || 0}
              title={'Check-Ins'}
              iconName={'face-smile'}
            />
          </View>
        </View>
        <InsideOutRankInitial initialData={data} />
      </ScrollView>
    </View>
  );

  return loading == true ? <LoadingScreen /> : contentScreen;
}
