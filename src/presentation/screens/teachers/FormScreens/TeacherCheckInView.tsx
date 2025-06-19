import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {images} from '../../../../utils/constants/images';
import {CommonFormScreen} from './CommonScreen';
import {ConfirmationDialog} from '../../../components/modals/ConfirmationDialog';
import {DefaultButton} from '../../../components/buttons/defaultButton';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../../utils/constants/theme';
import {SaveCheckInModal} from '../../../components/modals/SaveModal';
import {DropdownInput} from '../../../components/inputs/DropDownInput';

export function TeacherCheckInView() {
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
    <CommonFormScreen title="Check-In Emocional" withCard={false}>
      <View className="flex-1">
        <SaveCheckInModal
          modalVisible={{
            state: visible,
            setState: setVisible,
          }}
        />
        <View className="bg-white elevation-md p-2 rounded-lg my-4">
          <DropdownInput
            label="Selecionar Aluno"
            style={{marginTop: 10}}
            placeholder={'Selecione o Aluno'}
          />
        </View>
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
          buttonFunction={() => setVisible(true)}
        />
      </View>
    </CommonFormScreen>
  );
}
