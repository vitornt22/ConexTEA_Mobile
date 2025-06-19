import React, {useState} from 'react';
import {BottomNavigation, Provider} from 'react-native-paper';
import {HomeTeacherScreen} from '../screens/teachers/HomeTeacherScreen';
import {StudentsScreen} from '../screens/teachers/StudentsScreen';
import {ProfileTeacherScreen} from '../screens/teachers/ProfileTeacherScreen';
import {theme} from '../../utils/constants/theme';
import {getNavigationIcon} from './getNavigationIcon';
import {HomeParentsHeader} from '../components/headers/homeParentsHeader';
import {BottomBarDefaultHeader} from '../components/headers/bottomBarDefaultHeader';
import {TeacherReviewScreen} from '../screens/teachers/TeacherReviewScreen';

export function BottomNavigationTeacherScreen() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: 'homeTeacher',
      title: 'Início',
      focusedIcon: ({color, focused}: any) =>
        getNavigationIcon(focused, color, 'house'),
    },
    {
      key: 'review',
      title: 'Registros',
      focusedIcon: ({color, focused}: any) =>
        getNavigationIcon(focused, color, 'pen'),
    },
    {
      key: 'students',
      title: 'Estudantes',
      focusedIcon: ({color, focused}: any) =>
        getNavigationIcon(focused, color, 'user-group'),
    },
    {
      key: 'profileTeacher',
      title: 'Perfil',
      focusedIcon: ({color, focused}: any) =>
        getNavigationIcon(focused, color, 'person'),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    homeTeacher: HomeTeacherScreen,
    review: TeacherReviewScreen,
    students: StudentsScreen,
    profileTeacher: ProfileTeacherScreen,
  });

  return (
    <Provider>
      {index == 0 ? <HomeParentsHeader /> : <BottomBarDefaultHeader />}

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
