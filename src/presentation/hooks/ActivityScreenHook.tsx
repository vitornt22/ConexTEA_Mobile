import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../navigation/types';
import {useEffect, useState} from 'react';
import {useAppContext} from '../contexts/AppContext';
import {Parent} from '../../models/ParentModel';
import api from '../../infra/services/api';
import {StudentActivitiesSummary} from '../../models/Graphs';

export function ActivityScreenHook() {
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<StudentActivitiesSummary>();

  const [error, setError] = useState<string | null>(null);
  const {studentId} = useAppContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<StudentActivitiesSummary>(
        `student/activities-summary/${studentId}`,
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
    studentId,
    modalVisible: {state: modalVisible, setState: setModalVisible},
  };
}
