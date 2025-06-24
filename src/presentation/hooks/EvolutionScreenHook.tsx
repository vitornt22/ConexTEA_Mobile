import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../navigation/types';
import {useEffect, useState} from 'react';
import {useAppContext} from '../contexts/AppContext';
import {Parent} from '../../models/ParentModel';
import api from '../../infra/services/api';
import {Evolution} from '../../models/Graphs';

export function useEvolutionScreenHook() {
  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Evolution>();
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {studentId} = useAppContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<Evolution>(
        `student/${studentId}/review-summary/`,
      );
      setData(response.data);
    } catch (err: any) {
      setError(err.response?.data || 'Erro na requisição');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    navigation,
    studentId,
    modalVisible: {state: modalVisible, setState: setModalVisible},
  };
}
