import {Text, View} from 'react-native';
import {StudentHeader} from '../../../components/headers/StudentHeader';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../../utils/constants/theme';
import {AudioReportButton} from '../../../components/ReportAudioButton';
import {InformationModal} from '../../../components/modals/InformationModal';
import {useState} from 'react';
import {peiInformation} from '../../../../utils/constants/information_texts';
import {TeacherObservationListTile} from '../../../components/listTiles/TeacherObservationListTile';
import {studenHeaderMock} from '../../../../data/mockups/graphs';

export function EducationalPlanScreen({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView className="flex-1 bg-white p-5 ">
      <InformationModal
        text={peiInformation}
        modalVisible={{
          state: modalVisible,
          setState: setModalVisible,
        }}
      />
      <Text
        onPress={() => setModalVisible(true)}
        className="text-primary underline text-lg mb-3">
        Entenda o que é o PEI
      </Text>
      <StudentHeader student={studenHeaderMock} />
      <AudioReportButton bg={theme.primary} style={{marginBottom: -10}} />
      <ScrollView />
      <View className="bg-white rounded-lg elevation-lg mt-5 p-5">
        <Text className="text-lg font-semibold">Objetivos Personalizados</Text>
        <Text className="text-sm">• Melhorar Interação Social</Text>
        <Text className="text-sm">• Desenvolver Habilidade de Comunicação</Text>
      </View>
      <View className="bg-white rounded-lg elevation-lg my-5 p-5">
        <Text className="text-lg font-semibold">Recursos Aplicados</Text>
        <Text className="text-sm">• Uso de quadros visuais</Text>
        <Text className="text-sm">• Reforço Positivo</Text>
      </View>
      <View className="bg-white h-[250] rounded-lg elevation-lg  p-5">
        <Text className="text-lg font-semibold mb-4">
          Observações do Professor
        </Text>
        <ScrollView>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <TeacherObservationListTile key={item.toString()} />
          ))}
        </ScrollView>
      </View>
      <View className="flex-row items-center justify-between elevation-lg bg-white p-5 rounded-lg mt-3 ">
        <Text className="text-blueText text-xl font-bold">
          Avaliações Periódicas
        </Text>
        <Icon
          onPress={() => navigation.navigate('periodicReports')}
          size={25}
          color={theme.blueText}
          name="circle-chevron-right"
          iconStyle="solid"
        />
      </View>
      <View className="h-[100]" />
    </ScrollView>
  );
}
