import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import {theme} from '../../../../utils/constants/theme';
import {DropdownInput} from '../../../components/inputs/DropDownInput';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {DefaultButton} from '../../../components/buttons/defaultButton';
import Icon from '@react-native-vector-icons/fontawesome6';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../navigation/types';
import {InformationModal} from '../../../components/modals/InformationModal';
import {teacher_assessment_information} from '../../../../utils/constants/information_teacher_test';

type TipoAvaliacao = 'comportamento' | 'habilidades';
type AvaliacaoState = Record<string, number>;

const criteriosComportamento: string[] = [
  'Regulação emocional',
  'Respeito ao Próximo',
  'Resistência a transições',
  'Comportamentos Desafiadores',
  'Participação Tranquila',
  'Pontualidade de Rotina',
];

const criteriosHabilidades: string[] = [
  'Atenção e foco',
  'Interação Social',
  'Compreensão de instruções',
  'Comunicação Funcional',
  'Resolução de Problemas',
  'Autonomia',
];

export default function TeacherAssessmentScreen() {
  const [comportamento, setComportamento] = useState<AvaliacaoState>({});
  const [modalVisible, setModalVisible] = useState(false);

  const [habilidades, setHabilidades] = useState<AvaliacaoState>({});
  const navigation = useNavigation<NavigationProp>();

  const handleChange = (type: TipoAvaliacao, key: string, value: number) => {
    const updater =
      type === 'comportamento' ? setComportamento : setHabilidades;
    updater(prev => ({...prev, [key]: value}));
  };

  return (
    <ScrollView contentContainerStyle={{padding: 16}} className="space-y-6">
      <InformationModal
        text={teacher_assessment_information}
        modalVisible={{
          state: modalVisible,
          setState: setModalVisible,
        }}
      />
      <DefaultTitleHeader
        title="Avaliação"
        iconFunction={() => setModalVisible(true)}
      />

      <View className="bg-white mt-3 p-4 rounded-xl elevation-lg mb-3">
        <DropdownInput placeholder={'Selecione o aluno'} label="Aluno" />
      </View>
      {/* Card Comportamentos */}
      <View className="bg-white p-4 rounded-xl elevation-lg">
        <Text className="text-xl text-primary font-bold ">Comportamentos</Text>
        <Text className="text-md text-subtitle  mb-3">
          Avalies o comportamento do aluno
        </Text>

        <Text className="text-md text-subtitle">
          Obs: Arraste os sliders para atribuir a nota.
        </Text>
        <Text className="text-md text-subtitle mb-4">
          1-Não demonstrou/ 2-Parcialmente / 3-Demonstrou plenamente
        </Text>

        {criteriosComportamento.map((item, index) => (
          <View key={index} className="mb-4">
            <Text className="text-lg my-2">{item}</Text>
            <Slider
              style={{width: '100%'}}
              minimumValue={1}
              maximumValue={3}
              step={1}
              value={comportamento[item] || 1}
              onValueChange={(value: number) =>
                handleChange('comportamento', item, value)
              }
              minimumTrackTintColor={theme.primary}
              maximumTrackTintColor="#ccc"
              thumbTintColor={theme.primary}
            />
            <Text className="text-sm text-right text-gray-600">
              Nota: {comportamento[item] || 1}
            </Text>
          </View>
        ))}
      </View>

      {/* Card Habilidades */}
      <View className="bg-white mt-4  p-4 rounded-xl elevation-lg">
        <Text className="text-xl text-primary font-bold ">Habilidades</Text>
        <Text className="text-md text-subtitle  mb-3">
          Avalies as Habilidades do aluno
        </Text>
        <Text className="text-md text-subtitle">
          Obs: Arraste os sliders para atribuir a nota.
        </Text>
        <Text className="text-md text-subtitle mb-4">
          1-Não demonstrou/ 2-Parcialmente / 3-Demonstrou plenamente
        </Text>
        {criteriosHabilidades.map((item, index) => (
          <View key={index} className="mb-4">
            <Text className="text-base mb-1">{item}</Text>
            <Slider
              style={{width: '100%'}}
              minimumValue={1}
              maximumValue={3}
              step={1}
              value={habilidades[item] || 1}
              onValueChange={(value: number) =>
                handleChange('habilidades', item, value)
              }
              minimumTrackTintColor="#2196F3"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#2196F3"
            />
            <Text className="text-sm text-right text-gray-600">
              Nota: {habilidades[item] || 1}
            </Text>
          </View>
        ))}
      </View>
      <DefaultButton
        icon={<Icon name="floppy-disk" size={15} color={'white'} />}
        color={theme.primary}
        placeholder={'Salvar'}
        buttonFunction={() => navigation.goBack()}
      />
      <View className="h-[50]" />
    </ScrollView>
  );
}
