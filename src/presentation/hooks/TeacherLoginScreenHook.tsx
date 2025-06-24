import {useNavigation, useRoute} from '@react-navigation/native';
import {NavigationProp} from '../navigation/types';
import {useEffect, useState} from 'react';
import {useAppContext} from '../contexts/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export function useTeacherLoginScreenHook() {
  const navigation = useNavigation<NavigationProp>();
  const [modalVisible, setModalVisible] = useState(false); // Modal visível por padrão
  const parentsText =
    'Faça o login para acompanhar a evolução e progresso do seu filho na nossa escola.';
  const teacherText =
    'Faça o login para registrar e acompanhar a evolução dos seus alunos com TEA';
  const {setStudentId} = useAppContext();

  useEffect(() => {
    setStudentId(1);
  }, []);

  return {
    teacherText,
    parentsText,
    navigation,
    modalVisible: {
      state: modalVisible,
      setState: setModalVisible,
    },
  };
}
