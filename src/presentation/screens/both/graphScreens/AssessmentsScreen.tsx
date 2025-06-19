import {View} from 'react-native';
import {StudentHeader} from '../../../components/headers/StudentHeader';
import {ChipsPagerView} from '../../../components/ChipsPagerView';
import {InsideOutRank} from './InsideOutRank';
import {HabilitiesRank} from './HabilitiesRank';
import {BehaviorRank} from './BehaviorRank';
import {GenerateReportButton} from '../../../components/GenerationReportButton';
import {evolutionReportText} from '../../../../data/mockups/evolutionReportText';
import {useState} from 'react';
import {InformationModal} from '../../../components/modals/InformationModal';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../../utils/constants/theme';
import {assessmentsInformation} from '../../../../utils/constants/information_texts';
import {width} from '../../../../utils/constants/screenSize';

export function AssessmentsScreen({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);

  const chips = [
    {name: 'Emoções', component: <InsideOutRank />},
    {name: 'Habilidades', component: <HabilitiesRank />},
    {name: 'Comportamento', component: <BehaviorRank />},
  ];
  return (
    <View className="bg-white p-5 flex-1">
      <InformationModal
        text={assessmentsInformation}
        modalVisible={{
          state: modalVisible,
          setState: setModalVisible,
        }}
      />
      <View className="flex-row items-center justify-between">
        <GenerateReportButton
          navigation={navigation}
          text={evolutionReportText}
          title={'Gerar Relatório de Avaliações'}
          reportName={'Relatório de Evolução'}
        />
        <Icon
          onPress={() => setModalVisible(true)}
          style={{marginRight: 10}}
          size={20}
          color={theme.primary}
          name="circle-info"
          iconStyle="solid"
        />
      </View>
      <StudentHeader />
      <View className="h-3"></View>
      <ChipsPagerView chips={chips} style={{left: -15, width: '110%'}} />
    </View>
  );
}
