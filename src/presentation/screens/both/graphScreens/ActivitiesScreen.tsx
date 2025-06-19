import {ScrollView, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {
  activitiesTypesData,
  pieData,
} from '../../../../data/mockups/activitiesParticipating';
import ParticipationPieChart from '../../../components/charts/PieChartDefault';
import {StudentHeader} from '../../../components/headers/StudentHeader';
import {GenerateReportButton} from '../../../components/GenerationReportButton';
import {evolutionReportText} from '../../../../data/mockups/evolutionReportText';
import {InformationModal} from '../../../components/modals/InformationModal';
import {
  activitiesInformation,
  evolutionInformation,
} from '../../../../utils/constants/information_texts';
import {useState} from 'react';

export function ActivitiesScreen({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView className="bg-white p-5">
      {/* Cabeçalho */}
      <StudentHeader />
      <InformationModal
        text={activitiesInformation}
        modalVisible={{
          state: modalVisible,
          setState: setModalVisible,
        }}
      />

      <GenerateReportButton
        style={{marginBottom: -10}}
        navigation={navigation}
        text={evolutionReportText}
        title={'Gerar Relatório das Atividades'}
        reportName={'Relatório de Atividades'}
      />
      {/* header Title  */}
      <DefaultTitleHeader
        iconFunction={() => setModalVisible(true)}
        title={'Participação nas Atividades'}
      />
      <View className="mt-5 p-5 items-center rounded-lg elevation-lg bg-white ">
        <ParticipationPieChart data={pieData} />
      </View>
      <DefaultTitleHeader title={'Tipos de Atividades '} />
      <View className="my-5 p-5 items-center rounded-lg elevation-lg bg-white ">
        <BarChart
          data={activitiesTypesData}
          barWidth={15}
          height={400}
          spacing={20}
          hideYAxisText={false}
          yAxisThickness={1}
          xAxisThickness={1}
          maxValue={100}
          showGradient
        />
      </View>
      <View className="h-24"></View>
    </ScrollView>
  );
}
