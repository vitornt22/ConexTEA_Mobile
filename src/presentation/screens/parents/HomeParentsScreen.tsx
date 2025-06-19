import React from 'react';
import {Text, View} from 'react-native';
import {CardsCarousel} from '../../components/CardsCarousel';
import {StatisticCard} from '../../components/statisticCard';
import {ScrollView} from 'react-native-gesture-handler';
import {InsideOutListTile} from '../../components/listTiles/insideOutListTile';
import {insideOutData} from '../../../data/mockups/rankData';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp, RootStackParamList} from '../../navigation/types';

export function HomeParentsScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="px-7 bg-white">
      <Text className="mt-3 text-2xl text-blueText font-semibold">
        Bem Vinda, Mãe da Valentina
      </Text>
      <CardsCarousel type="parents" navigation={navigation} />
      <View>
        <Text className="mt-3 text-2xl text-blueText font-semibold ">
          Estatísticas
        </Text>
        <View className="flex-row justify-between">
          <StatisticCard
            count={20}
            title={'Atividades'}
            iconName={'chart-bar'}
          />
          <StatisticCard count={100} title={'Avaliações'} iconName={'star'} />
          <StatisticCard
            count={20}
            title={'Check-Ins'}
            iconName={'face-smile'}
          />
        </View>
      </View>
      <View>
        <Text className="mt-3 text-2xl text-blueText font-semibold">
          Divertidamente de Valentina
        </Text>
        <ScrollView className="mt-4 ">
          {insideOutData.map(item => (
            <InsideOutListTile key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
