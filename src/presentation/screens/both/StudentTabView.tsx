import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {theme} from '../../../utils/constants/theme';
import {parentsHomeCards} from '../../../utils/constants/parents_home_cards';
import {DefaultCard} from '../../components/DefaultCard';
import {ScrollView} from 'react-native-gesture-handler';
import {InformationSection} from '../../components/InformationSection';
import {Student} from '../../../models/ParentModel';

type StudentProfileTabViewProps = {
  student: Student;
  navigation: any;
};
export function StudentProfileTabView({
  navigation,
  student,
}: StudentProfileTabViewProps) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Relatórios'},
    {key: 'second', title: 'Informações'},
  ]);

  const FirstRoute = () => (
    <ScrollView className="px-5 flex-1  ">
      {parentsHomeCards.map((item, index) => (
        <DefaultCard
          key={index}
          image={item.image as any}
          title={item.title}
          subtitle={item.subtitle}
          buttonPlaceholder={item.buttonLabel}
          primaryColor={item.primaryColor}
          secondaryColor={item.secondaryColor}
          thirdColor={item.thirdColor}
          buttonFunction={() => navigation.navigate(item.routeName)}
        />
      ))}
      <View className="h-[100]" />
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView className="flex-1  ">
      <InformationSection text={student.preferences} title={'Preferências'} />
      <InformationSection
        text={student.triggers_sensitivities[0]}
        title={'Gatilhos ou sensibilidades:'}
      />
      <InformationSection
        text={student.what_helps_to_calm_down}
        title={'O que ajuda a acalmar:'}
      />
      <View className="h-[100]" />
    </ScrollView>
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      })}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          activeColor={theme.primary}
          inactiveColor={theme.subtitle}
          style={{backgroundColor: 'white'}}
          indicatorStyle={{backgroundColor: theme.primary}}
        />
      )}
    />
  );
}
