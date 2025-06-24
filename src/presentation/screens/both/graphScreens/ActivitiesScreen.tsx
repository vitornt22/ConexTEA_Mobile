import {ScrollView, Text, View} from 'react-native';
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
import {activitiesInformation} from '../../../../utils/constants/information_texts';
import {useState} from 'react';
import {ActivityScreenHook} from '../../../hooks/ActivityScreenHook';
import LoadingScreen from '../../../components/LoadingScreen';
import {studenHeaderMock} from '../../../../data/mockups/graphs';

export function ActivitiesScreen({navigation}: any) {
  const {data, loading, studentId, modalVisible} = ActivityScreenHook();

  const contentView = (
    <ScrollView className="bg-white p-5">
      {/* Cabeçalho */}
      <StudentHeader student={data?.student || studenHeaderMock} />
      <InformationModal
        text={activitiesInformation}
        modalVisible={modalVisible}
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
        iconFunction={() => modalVisible.setState(true)}
        title={'Participação nas Atividades'}
      />
      <View className="mt-5 p-5 items-center rounded-lg elevation-lg bg-white ">
        <ParticipationPieChart data={data?.pieData || []} />
      </View>
      <DefaultTitleHeader icon={false} title={'Tipos de Atividades '} />
      <View className="my-5 p-5 items-center rounded-lg elevation-lg bg-white ">
        <BarChart
          data={data?.typeActivityChart}
          barWidth={15}
          height={400}
          spacing={20}
          hideYAxisText={false}
          yAxisThickness={1}
          xAxisThickness={1}
          maxValue={30}
          showGradient
        />
      </View>
      <View className="h-24"></View>
    </ScrollView>
  );
  return loading === true ? <LoadingScreen /> : contentView;
}
