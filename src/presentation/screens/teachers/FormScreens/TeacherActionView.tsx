import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../utils/constants/images';
import {CommonFormScreen} from './CommonScreen';
import {DefaultButton} from '../../../components/buttons/defaultButton';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../../utils/constants/theme';
import {SaveActionModal} from '../../../components/modals/SaveActionModal';
import {DropdownInput} from '../../../components/inputs/DropDownInput';
import {InformationModal} from '../../../components/modals/InformationModal';
import {teacher_action_information} from '../../../../utils/constants/information_teacher_test';

export function TeacherActionView() {
  const [modalVisible, setModalVisible] = useState(false);

  const items = [
    {id: 1, name: 'Ir ao banheiro', image: images.bathroom},
    {id: 2, name: 'Comer/Lanchar', image: images.food},
    {id: 3, name: 'Dor/ Doente', image: images.hurt},
    {id: 4, name: 'Descansar/Dormir', image: images.rest},
    {id: 5, name: 'Lavar as mãos', image: images.washing},
    {id: 6, name: 'Beber Água', image: images.water},
  ];

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handlePress = (item: any) => {
    setSelectedId(item.id);
    setText(item.name);
    setVisible(true);
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

  return (
    <CommonFormScreen
      title="Mapear Desejos"
      withCard={false}
      iconFunction={() => setModalVisible(true)}>
      <View className="flex-1">
        <InformationModal
          text={teacher_action_information}
          modalVisible={{
            state: modalVisible,
            setState: setModalVisible,
          }}
        />
        <SaveActionModal
          modalVisible={{
            state: visible,
            setState: setVisible,
          }}
        />
        <View className="bg-white p-4 py-6  my-3 rounded-lg elevation-lg">
          <DropdownInput
            label="Selecionar Aluno"
            style={{marginTop: -10}}
            placeholder={'Selecione o Aluno'}
          />
        </View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{padding: 10}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          ListFooterComponent={
            <DefaultButton
              icon={<Icon name="floppy-disk" size={15} color={'white'} />}
              color={theme.primary}
              placeholder={'Salvar'}
              buttonFunction={() => setVisible(true)}
            />
          }
        />
      </View>
    </CommonFormScreen>
  );
}
