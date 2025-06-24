import React, {useState} from 'react';
import {BottomNavigation, Provider} from 'react-native-paper';
import {theme} from '../../utils/constants/theme';
import {HomeParentsScreen} from '../screens/parents/HomeParentsScreen';
import {ReportsScreen} from '../screens/parents/ReportsScreen';
import {NotificationsScreen} from '../screens/parents/NotificationsScreen';
import {ProfileParentsScreen} from '../screens/parents/ProfileParentsScreen';
import {BottomBarDefaultHeader} from '../components/headers/bottomBarDefaultHeader';
import {getNavigationIcon} from './getNavigationIcon';
import {View} from 'react-native';

export function BottomNavigationParentsScreen() {
  const [index, setIndex] = useState(0);
  const title = {0: 'Home'};

  const [routes] = useState([
    {
      key: 'HomeParents',
      title: 'Início',
      focusedIcon: ({color, focused}: any) =>
        getNavigationIcon(focused, color, 'house'),
    },
    {
      key: 'Reports',
      title: 'Relatórios',
      focusedIcon: ({color, focused}: any) =>
        getNavigationIcon(focused, color, 'chart-bar'),
    },
    {
      key: 'Notifications',
      title: 'Notificações',
      focusedIcon: ({color, focused}: any) =>
        getNavigationIcon(focused, color, 'note-sticky'),
    },
    {
      key: 'ProfileParents',
      title: 'Perfil',
      focusedIcon: ({color, focused}: any) =>
        getNavigationIcon(focused, color, 'user'),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    HomeParents: HomeParentsScreen,
    Reports: ReportsScreen,
    Notifications: NotificationsScreen,
    ProfileParents: ProfileParentsScreen,
  });

  return (
    <Provider>
      {index == 0 ? null : <BottomBarDefaultHeader />}
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="white"
        inactiveColor={theme.primary}
        labeled={true} // <<< importante para esconder labels padrão
        barStyle={{backgroundColor: 'white'}}
        activeIndicatorStyle={{
          height: 40,
          borderRadius: 80,
          width: 80,
          backgroundColor: theme.primary,
        }}
      />
    </Provider>
  );
}
