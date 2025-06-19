import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ChipsPagerView} from '../../components/ChipsPagerView';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../utils/constants/theme';
import {AllReviews} from './allReviews';
import {InformationModal} from '../../components/modals/InformationModal';
import {notificationsInformation} from '../../../utils/constants/information_texts';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

export function NotificationsScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [modalVisible, setModalVisible] = useState(false);

  const chips = [
    {name: 'Todos', component: <AllReviews type="all" key="all" />},
    {name: 'Check-Ins', component: <AllReviews type="CheckIn" key="check" />},
    {name: 'Avaliações', component: <AllReviews type="Review" key="review" />},
    {
      name: 'Atividades',
      component: <AllReviews type="Activitie" key="activity" />,
    },
    {name: 'Ações', component: <AllReviews type="Action" key="action" />},
  ];

  return (
    <View className="flex-1">
      <InformationModal
        text={notificationsInformation}
        modalVisible={{
          state: modalVisible,
          setState: setModalVisible,
        }}
      />
      <View className="p-3 px-5 bg-white items-center  flex-row justify-between">
        <Text className=" text-2xl text-blueText font-semibold">Registros</Text>
        <Icon
          onPress={() => setModalVisible(true)}
          color={theme.blueText}
          name="circle-info"
          size={20}
          iconStyle="solid"
        />
      </View>
      <ChipsPagerView chips={chips} />
    </View>
  );
}
