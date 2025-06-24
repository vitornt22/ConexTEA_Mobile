import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ChipsPagerView} from '../../components/ChipsPagerView';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../utils/constants/theme';
import {AllReviews} from './allReviews';
import {InformationModal} from '../../components/modals/InformationModal';
import {notificationsInformation} from '../../../utils/constants/information_texts';
import {useNotificationHook} from '../../hooks/NotificationsHook';
import LoadingScreen from '../../components/LoadingScreen';

export function NotificationsScreen() {
  const {data, loading, navigation, modalVisible} = useNotificationHook();
  const chips = [
    {
      name: 'Todos',
      component: <AllReviews type="all" key="all" reviewItems={data || []} />,
    },
    {
      name: 'Check-Ins',
      component: (
        <AllReviews type="CheckIn" key="check" reviewItems={data || []} />
      ),
    },
    {
      name: 'Avaliações',
      component: (
        <AllReviews type="Review" key="review" reviewItems={data || []} />
      ),
    },
    {
      name: 'Atividades',
      component: (
        <AllReviews type="Activitie" key="activity" reviewItems={data || []} />
      ),
    },
    {
      name: 'Ações',
      component: (
        <AllReviews type="Action" key="action" reviewItems={data || []} />
      ),
    },
  ];

  const contentView = (
    <View className="flex-1">
      <InformationModal
        text={notificationsInformation}
        modalVisible={modalVisible}
      />
      <View className="p-3 px-5 bg-white items-center  flex-row justify-between">
        <Text className=" text-2xl text-blueText font-semibold">Registros</Text>
        <Icon
          onPress={() => modalVisible.setState(true)}
          color={theme.blueText}
          name="circle-info"
          size={20}
          iconStyle="solid"
        />
      </View>
      <ChipsPagerView chips={chips} />
    </View>
  );
  return loading == true ? <LoadingScreen /> : contentView;
}
