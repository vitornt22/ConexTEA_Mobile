import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../navigation/types';
import {useEffect, useState} from 'react';
import {useAppContext} from '../contexts/AppContext';
import {Parent, Student} from '../../models/ParentModel';
import api from '../../infra/services/api';

export function StudentsScreenHook() {
  const navigation = useNavigation<NavigationProp>();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const {studentId} = useAppContext();
  const [searchText, setSearchText] = useState('');

  // Função para filtrar por nome ou disciplina (subject)
  const filteredChats = data?.students?.filter((item: Student) => {
    const lowerText = searchText.toLowerCase();
    const nameMatches = item.name.toLowerCase().includes(lowerText);
    const subjectMatches = item.gender?.toLowerCase().includes(lowerText);
    return nameMatches || subjectMatches;
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<any>(
        `teacher/students-by-teacher/${studentId}/`,
      );
      setData(response.data);
      console.log(response.data);
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
    filteredChats,
    studentId,
    searchText,
    setSearchText,
  };
}
