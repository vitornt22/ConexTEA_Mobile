import {useEffect, useState} from 'react';
import api from '../../infra/services/api';
import {ParentInitialStats} from '../../models/ParentInitialModel';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../navigation/types';
import {useAppContext} from '../contexts/AppContext';

export function useParentInitialScreenHook() {
  const [data, setData] = useState<ParentInitialStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();
  const {studentId} = useAppContext();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<ParentInitialStats>(
        `parent/parent-student-stats/${studentId}/`,
      );
      setData(response.data);
      console.log('DATA', data);
    } catch (err: any) {
      setError(err.response?.data || 'Erro na requisição');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [studentId]); // Atualiza quando studentId mudar

  return {data, loading, navigation};
}
