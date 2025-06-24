import {useNavigation, useRoute} from '@react-navigation/native';
import {LoginRouteProp, NavigationProp} from '../navigation/types';
import {useEffect, useState} from 'react';
import {useAppContext} from '../contexts/AppContext';

export function useLoginScreenHook() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<LoginRouteProp>(); // agora route.params tem o tipo certo
  const {screenRoute = 'teacher'} = route.params || {};
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
    screenRoute,
    modalVisible: {
      state: modalVisible,
      setState: setModalVisible,
    },
  };
}
