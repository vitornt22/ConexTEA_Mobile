import {View} from 'react-native';
import {StudentHeader} from '../../../components/headers/StudentHeader';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import SkillsEvolutionChart from '../../../components/charts/SkillsEvolutionChart';
import {ScrollView} from 'react-native-gesture-handler';
import {evolutionReportText} from '../../../../data/mockups/evolutionReportText';
import {GenerateReportButton} from '../../../components/GenerationReportButton';
import {InformationModal} from '../../../components/modals/InformationModal';
import {evolutionInformation} from '../../../../utils/constants/information_texts';
import {useEvolutionScreenHook} from '../../../hooks/EvolutionScreenHook';
import {studenHeaderMock} from '../../../../data/mockups/graphs';

export function EvolutionScreen({navigation}: any) {
  const {data, loading, studentId, modalVisible} = useEvolutionScreenHook();
  return (
    <ScrollView className="bg-white p-5">
      <StudentHeader student={data?.student || studenHeaderMock} />
      <InformationModal
        text={evolutionInformation}
        modalVisible={modalVisible}
      />
      <DefaultTitleHeader
        iconFunction={() => modalVisible.setState(true)}
        title={'Evolução das Habilidades'}
      />
      <GenerateReportButton
        navigation={navigation}
        text={evolutionReportText}
        title={'Gerar Relatório de Evolução'}
        reportName={'Relatório de Evolução'}
      />
      <SkillsEvolutionChart
        chartData={data?.reviews.interation}
        title={'Interação Social'}
      />
      <SkillsEvolutionChart
        chartData={data?.reviews.problemSolving}
        title={'Resolução de Problemas'}
      />
      <SkillsEvolutionChart
        chartData={data?.reviews.comunication}
        title={'Comunicação Funcional'}
      />
      <SkillsEvolutionChart
        chartData={data?.reviews.compreension}
        title={'Compreensão de Instruções'}
      />
      <SkillsEvolutionChart
        chartData={data?.reviews.autonomy}
        title={'Autonomia'}
      />
      <View className="h-32"></View>
    </ScrollView>
  );
}
