import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../utils/constants/images';
import {CommonFormScreen} from './CommonScreen';
import {InformationModal} from '../../../components/modals/InformationModal';
import {teacher_check_in_information} from '../../../../utils/constants/information_teacher_test';
import {useAppContext} from '../../../contexts/AppContext';
import api from '../../../../infra/services/api';
import LoadingScreen from '../../../components/LoadingScreen';
import {DropdownInput} from '../../../components/inputs/DropDownInput';
import {TextArea} from '../../../components/inputs/TextArea';
import {DefaultButton} from '../../../components/buttons/defaultButton';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../../utils/constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../navigation/types';

export function TeacherCheckInView() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<{value: string; label: string}[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();
  const {studentId} = useAppContext();
  const [IdStudent, setIdStudent] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {id: 1, name: 'Alegria', image: images.joyEmoji},
    {id: 2, name: 'Raiva', image: images.angerEmoji},
    {id: 3, name: 'Tédio', image: images.ennuiEmoji},
    {id: 4, name: 'Vergonha', image: images.embarassmentEmoji},
    {id: 5, name: 'Nojinho', image: images.disgustEmoji},
    {id: 6, name: 'Tristeza', image: images.sadnessEmoji},
    {id: 7, name: 'Ansiedade', image: images.anxietyEmoji},
    {id: 8, name: 'Medo', image: images.fearEmoji},
  ];

  useEffect(() => {
    fetchData();
  }, [studentId]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<{value: string; label: string}[]>(
        `student/teacher-students-options/${studentId}/`,
      );
      setData(response.data);
    } catch (err: any) {
      setError(err.response?.data || 'Erro na requisição');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    console.log('cliquei');
    // if (!IdStudent || !selectedId || !description.trim()) {
    //   return;
    // }
    setLoading(true);

    console.log('esse e o idstuden', IdStudent);
    try {
      const response = await api.post('reviews/checkin/create/', {
        teacher: 1,
        student: Number(IdStudent),
        emoction_id: selectedId,
        description: description.trim(),
      });

      if (response.status === 201 || response.status === 200) {
        console.log('Check-in criado com sucesso!');
        navigation.goBack();
        // Exemplo: exibir modal de sucesso ou toast
      }

      setIdStudent(null);
      setSelectedId(null);
      setDescription('');
    } catch (err: any) {
      setLoading(false);

      console.error(
        'Erro ao salvar check-in:',
        err.response?.data || err.message,
      );
    }
  };

  const renderItem = ({item}: any) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        className={`flex-1 items-center justify-center rounded-2xl m-1 p-3 min-h-[130px] ${
          isSelected ? 'bg-blue-200' : 'bg-gray-100'
        }`}>
        <Image
          source={item.image}
          className="w-16 h-16 mb-2"
          resizeMode="contain"
        />
        <Text className="text-center text-sm text-gray-800">{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const contentView = (
    <CommonFormScreen
      title="Check-In Emocional"
      withCard={false}
      iconFunction={() => setModalVisible(true)}>
      <View className="flex-1">
        <InformationModal
          text={teacher_check_in_information}
          modalVisible={{state: modalVisible, setState: setModalVisible}}
        />

        <View className="bg-white elevation-md p-2 rounded-lg my-4">
          <DropdownInput
            data={data}
            label="Selecionar Aluno"
            style={{marginTop: 10}}
            placeholder={'Selecione o Aluno'}
            value={IdStudent}
            onChange={setIdStudent}
          />
        </View>

        <TextArea
          placeholder={'Alguma observação sobre o aluno?'}
          label={'Descrição'}
          value={description}
          onChangeText={setDescription}
        />

        <FlatList
          scrollEnabled
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{padding: 10}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />

        <DefaultButton
          icon={<Icon name="floppy-disk" size={15} color={'white'} />}
          color={theme.primary}
          placeholder={'Salvar'}
          buttonFunction={handleSave}
        />
      </View>
    </CommonFormScreen>
  );

  return loading ? <LoadingScreen /> : contentView;
}
