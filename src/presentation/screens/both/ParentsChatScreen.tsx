import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SearchInput} from '../../components/inputs/searchInput';
import {chatParentsList} from '../../../data/mockups/chatsParents';
import {ChatUserListTile} from '../../components/listTiles/chatUserListTile';

export function ParentsChatScreen() {
  const [searchText, setSearchText] = useState('');

  // Função para filtrar por nome ou disciplina (subject)
  const filteredChats = chatParentsList.filter(item => {
    const lowerText = searchText.toLowerCase();
    const nameMatches = item.name.toLowerCase().includes(lowerText);
    const subjectMatches = item.subject?.toLowerCase().includes(lowerText);
    return nameMatches || subjectMatches;
  });

  return (
    <View className="bg-white flex-1 p-5">
      <SearchInput
        placeholder="Pesquisar por nome ou disciplina"
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
          return <ChatUserListTile item={item} />;
        }}
      />
    </View>
  );
}
