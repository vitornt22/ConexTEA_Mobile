import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
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
import axios from 'axios';
import api from '../../../../infra/services/api';

type TipoAvaliacao = 'comportamento' | 'habilidades';
type AvaliacaoState = Record<string, number>;

const criteriosComportamento = [
  'Regulação emocional',
  'Respeito ao Próximo',
  'Resistência a transições',
  'Comportamentos Desafiadores',
  'Participação Tranquila',
  'Pontualidade de Rotina',
];

const criteriosHabilidades = [
  'Atenção e foco',
  'Interação Social',
  'Compreensão de instruções',
  'Comunicação Funcional',
  'Resolução de Problemas',
  'Autonomia',
];

// Exemplo de lista de alunos, você deve buscar via API
const alunos = [
  {label: 'João Silva', value: '1'},
  {label: 'Maria Santos', value: '2'},
];

export default function TeacherAssessmentScreen() {
  const [comportamento, setComportamento] = useState<AvaliacaoState>({});
  const [habilidades, setHabilidades] = useState<AvaliacaoState>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState<string | null>(null);

  const navigation = useNavigation<NavigationProp>();

  const handleChange = (type: TipoAvaliacao, key: string, value: number) => {
    const updater =
      type === 'comportamento' ? setComportamento : setHabilidades;
    updater(prev => ({...prev, [key]: value}));
  };

  async function handleSave() {
    if (!alunoSelecionado) {
      Alert.alert('Erro', 'Selecione um aluno antes de salvar');
      return;
    }

    const payload = {
      student: alunoSelecionado,
      interation: habilidades['Interação Social'] || 1,
      concentration: habilidades['Atenção e foco'] || 1,
      autonomy: habilidades['Autonomia'] || 1,
      comunication: habilidades['Comunicação Funcional'] || 1,
      problemSolving: habilidades['Resolução de Problemas'] || 1,
      compreension: habilidades['Compreensão de instruções'] || 1,
      regulation: comportamento['Regulação emocional'] || 1,
      respect: comportamento['Respeito ao Próximo'] || 1,
      resistance: comportamento['Resistência a transições'] || 1,
      challenges: comportamento['Comportamentos Desafiadores'] || 1,
      participation: comportamento['Participação Tranquila'] || 1,
      punctuality: comportamento['Pontualidade de Rotina'] || 1,
    };

    try {
      const response = await api.post('reviews/review/create/', payload);

      if (response.status === 201 || response.status === 200) {
        Alert.alert('Sucesso', 'Avaliação salva com sucesso!');
        navigation.goBack();
      } else {
        Alert.alert(
          'Erro',
          `Resposta inesperada do servidor: ${response.status}`,
        );
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data
          ? JSON.stringify(error.response.data)
          : error.message;
        Alert.alert('Erro ao salvar', message);
      } else {
        Alert.alert('Erro', 'Não foi possível salvar a avaliação.');
      }
      console.error(error);
    }
  }

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
        <DropdownInput
          placeholder={'Selecione o aluno'}
          label="Aluno"
          data={alunos}
          value={alunoSelecionado}
          onChange={setAlunoSelecionado}
        />
      </View>

      {/* Cards Comportamento e Habilidades seguem iguais */}

      {/* ... (seu código dos sliders comportamentais e habilidades) */}

      <View className="bg-white p-4 rounded-xl elevation-lg">
        <Text className="text-xl text-primary font-bold ">Comportamentos</Text>
        <Text className="text-md text-subtitle  mb-3">
          Avalie o comportamento do aluno
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

      <View className="bg-white mt-4  p-4 rounded-xl elevation-lg">
        <Text className="text-xl text-primary font-bold ">Habilidades</Text>
        <Text className="text-md text-subtitle  mb-3">
          Avalie as Habilidades do aluno
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
        buttonFunction={handleSave}
      />
      <View style={{height: 50}} />
    </ScrollView>
  );
}
