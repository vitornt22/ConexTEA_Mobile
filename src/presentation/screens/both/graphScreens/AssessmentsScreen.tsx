import {View} from 'react-native';
import {StudentHeader} from '../../../components/headers/StudentHeader';
import {ChipsPagerView} from '../../../components/ChipsPagerView';
import {HabilitiesRank} from './HabilitiesRank';
import {BehaviorRank} from './BehaviorRank';
import {GenerateReportButton} from '../../../components/GenerationReportButton';
import {evolutionReportText} from '../../../../data/mockups/evolutionReportText';
import {InformationModal} from '../../../components/modals/InformationModal';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../../utils/constants/theme';
import {assessmentsInformation} from '../../../../utils/constants/information_texts';
import {InsideOutRank} from './InsideOutRank';
import {AssessmentScreenHook} from '../../../hooks/AssesmentsScreenHook';
import LoadingScreen from '../../../components/LoadingScreen';
import {studenHeaderMock} from '../../../../data/mockups/graphs';

export function AssessmentsScreen({navigation}: any) {
  const {data, loading, studentId, modalVisible} = AssessmentScreenHook();

  const chips = [
    //  ADICIONAR EMOÇÔES AQUI
    {
      name: 'Emoções',
      component: (
        <InsideOutRank key={'emotions'} emotionReport={data?.emotions || []} />
      ),
    },
    {
      name: 'Habilidades',
      component: (
        <HabilitiesRank key={'habilities'} skillReport={data?.skills || []} />
      ),
    },
    {
      name: 'Comportamento',
      component: (
        <BehaviorRank key={'behaviors'} behaviors={data?.behaviors || []} />
      ),
    },
  ];
  const contentView = (
    <View className="bg-white p-5 flex-1">
      <InformationModal
        text={assessmentsInformation}
        modalVisible={modalVisible}
      />
      <View className="flex-row items-center justify-between">
        <GenerateReportButton
          navigation={navigation}
          text={evolutionReportText}
          title={'Gerar Relatório de Avaliações'}
          reportName={'Relatório de Evolução'}
        />
        <Icon
          onPress={() => modalVisible.setState(true)}
          style={{marginRight: 10}}
          size={20}
          color={theme.primary}
          name="circle-info"
          iconStyle="solid"
        />
      </View>
      <StudentHeader student={data?.student || studenHeaderMock} />
      <View className="h-3"></View>
      <ChipsPagerView chips={chips} style={{left: -15, width: '110%'}} />
    </View>
  );
  return loading === true ? <LoadingScreen /> : contentView;
}
