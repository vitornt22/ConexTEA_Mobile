import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SearchInput} from '../../components/inputs/searchInput';
import {chatParentsList} from '../../../data/mockups/chatsParents';
import {ChatUserListTile} from '../../components/listTiles/chatUserListTile';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import {StudentsListTile} from '../../components/listTiles/StudentsListTile';
import {studentsList} from '../../../data/mockups/studentsList';

export function StudentsScreen() {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation<NavigationProp>();

  // Função para filtrar por nome ou disciplina (subject)
  const filteredChats = studentsList.filter(item => {
    const lowerText = searchText.toLowerCase();
    const nameMatches = item.name.toLowerCase().includes(lowerText);
    const subjectMatches = item.class?.toLowerCase().includes(lowerText);
    return nameMatches || subjectMatches;
  });

  return (
    <View className="bg-white flex-1 p-5">
      <SearchInput
        placeholder="Pesquisar Alunos"
        mode="text"
        // Atualiza o estado com o texto digitado
        onChangeText={setSearchText}
        value={searchText}
      />
      <FlatList
        className="p-3 px-5"
        data={filteredChats}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <StudentsListTile item={item} />;
        }}
      />
    </View>
  );
}
