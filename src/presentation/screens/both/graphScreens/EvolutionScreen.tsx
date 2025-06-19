import {Text, View} from 'react-native';
import {StudentHeader} from '../../../components/headers/StudentHeader';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import SkillsEvolutionChart from '../../../components/charts/SkillsEvolutionChart';
import {
  atention,
  compreension,
  comunication,
  interation,
  resolutio,
} from '../../../../data/mockups/evolutionData';
import {ScrollView} from 'react-native-gesture-handler';
import {evolutionReportText} from '../../../../data/mockups/evolutionReportText';
import {GenerateReportButton} from '../../../components/GenerationReportButton';
import {useState} from 'react';
import {InformationModal} from '../../../components/modals/InformationModal';
import {evolutionInformation} from '../../../../utils/constants/information_texts';

export function EvolutionScreen({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView className="bg-white p-5">
      <StudentHeader />
      <InformationModal
        text={evolutionInformation}
        modalVisible={{
          state: modalVisible,
          setState: setModalVisible,
        }}
      />
      <DefaultTitleHeader
        iconFunction={() => setModalVisible(true)}
        title={'Evolução das Habilidades'}
      />
      <GenerateReportButton
        navigation={navigation}
        text={evolutionReportText}
        title={'Gerar Relatório de Evolução'}
        reportName={'Relatório de Evolução'}
      />
      <SkillsEvolutionChart chartData={interation} title={'Interação Social'} />
      <SkillsEvolutionChart
        chartData={resolutio}
        title={'Resolução de Problemas'}
      />
      <SkillsEvolutionChart
        chartData={comunication}
        title={'Comunicação Funcional'}
      />
      <SkillsEvolutionChart
        chartData={compreension}
        title={'Compreensão de Instruções'}
      />
      <SkillsEvolutionChart chartData={atention} title={'Atenção e Foco'} />
      <View className="h-32"></View>
    </ScrollView>
  );
}
