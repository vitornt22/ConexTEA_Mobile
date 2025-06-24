import {useEffect, useState} from 'react';
import api from '../../infra/services/api';
import {ParentInitialStats} from '../../models/ParentInitialModel';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../navigation/types';
import {useAppContext} from '../contexts/AppContext';
import {ReviewItemModel} from '../../models/ReviewItem';

export function useNotificationHook() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<ReviewItemModel[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();
  const {studentId} = useAppContext();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<ReviewItemModel[]>(
        `parent/parent-student-last-events/${studentId}/`,
      );
      setData(response.data);
    } catch (err: any) {
      setError(err.response?.data || 'Erro na requisição');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [studentId]); // Atualiza quando studentId mudar

  return {
    data,
    loading,
    navigation,
    modalVisible: {state: modalVisible, setState: setModalVisible},
  };
}
