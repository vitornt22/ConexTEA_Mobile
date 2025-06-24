import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {CommonFormScreen} from './CommonScreen';
import {DropdownInput} from '../../../components/inputs/DropDownInput';
import {TextArea} from '../../../components/inputs/TextArea';
import {DefaultButton} from '../../../components/buttons/defaultButton';
import {theme} from '../../../../utils/constants/theme';
import {InformationModal} from '../../../components/modals/InformationModal';
import {teacher_check_in_information} from '../../../../utils/constants/information_teacher_test';
import api from '../../../../infra/services/api';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../navigation/types';

const ACTIVITY_TYPE_CHOICES = [
  {label: 'Linguagem e Comunicação', value: '1'},
  {label: 'Raciocínio e Cognitivo', value: '2'},
  {label: 'Motricidade e Coordenação', value: '3'},
  {label: 'Atividades Sensorial-Exploratórias', value: '4'},
  {label: 'Autonomia e Organização', value: '5'},
  {label: 'Interação e Participação', value: '6'},
];

const PARTICIPATION_CHOICES = [
  {label: 'Não participou', value: '1'},
  {label: 'Parcialmente', value: '2'},
  {label: 'Participou', value: '3'},
];

export function TeacherActivitieView() {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<NavigationProp>();

  // Dados e seleção do aluno
  const [alunos, setAlunos] = useState<{label: string; value: string}[]>([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState<string | null>(null);

  // Dropdowns fixos: Participação e Tipo de atividade
  const [participacaoSelecionada, setParticipacaoSelecionada] = useState<
    string | null
  >(null);
  const [tipoAtividadeSelecionado, setTipoAtividadeSelecionado] = useState<
    string | null
  >(null);

  // TextAreas
  const [descricao, setDescricao] = useState('');
  const [desempenho, setDesempenho] = useState('');

  // Modal confirmação
  const [visible, setVisible] = useState(false);

  // Simular teacherId fixo (ou pegar do contexto/autenticação)
  const teacherId = 1;

  // Fetch alunos ao montar componente
  useEffect(() => {
    const fetchAlunos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get<{label: string; value: string}[]>(
          `student/teacher-students-options/${teacherId}/`,
        );
        setAlunos(response.data);
      } catch (err: any) {
        setError(err.response?.data || 'Erro ao carregar alunos');
      } finally {
        setLoading(false);
      }
    };
    fetchAlunos();
  }, [teacherId]);

  async function handleSave() {
    if (
      !alunoSelecionado ||
      !participacaoSelecionada ||
      !tipoAtividadeSelecionado
    ) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
      return;
    }

    const payload = {
      teacher: teacherId,
      student: Number(alunoSelecionado),
      participation: participacaoSelecionada,
      activity_type: tipoAtividadeSelecionado,
      description: descricao,
      student_performance: desempenho,
    };

    setLoading(true);
    try {
      const response = await api.post('reviews/activity/create/', payload);
      if (response.status === 201 || response.status === 200) {
        Alert.alert('Sucesso', 'Atividade registrada com sucesso!');
        setVisible(false);
        // Opcional limpar campos
        setAlunoSelecionado(null);
        setParticipacaoSelecionada(null);
        setTipoAtividadeSelecionado(null);
        setDescricao('');
        setDesempenho('');
        navigation.goBack();
      }
    } catch (err: any) {
      Alert.alert('Erro', err.response?.data || 'Erro ao salvar a atividade');
    } finally {
      setLoading(false);
    }
  }

  return (
    <CommonFormScreen title="Registrar Atividades">
      <ScrollView>
        <InformationModal
          text={teacher_check_in_information}
          modalVisible={{state: modalVisible, setState: setModalVisible}}
        />

        <DropdownInput
          placeholder="Selecione o aluno"
          label="Aluno"
          data={alunos}
          value={alunoSelecionado}
          onChange={setAlunoSelecionado}
        />

        <DropdownInput
          placeholder="Participação"
          label="Participação"
          data={PARTICIPATION_CHOICES}
          value={participacaoSelecionada}
          onChange={setParticipacaoSelecionada}
        />

        <DropdownInput
          placeholder="Tipo de Atividade"
          label="Tipo de Atividade"
          data={ACTIVITY_TYPE_CHOICES}
          value={tipoAtividadeSelecionado}
          onChange={setTipoAtividadeSelecionado}
        />

        <TextArea
          placeholder="Digite"
          label="Descrição de Atividade"
          value={descricao}
          onChangeText={setDescricao}
        />

        <TextArea
          placeholder="Descreva o desempenho do aluno"
          label="Desempenho do Aluno"
          value={desempenho}
          onChangeText={setDesempenho}
        />
        <DefaultButton
          color={theme.primary}
          placeholder={'Salvar'}
          buttonFunction={handleSave}
        />
        <View className="h-[40]" />
      </ScrollView>
    </CommonFormScreen>
  );
}
