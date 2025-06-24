import React from 'react';
import {FlatList, View} from 'react-native';
import {SearchInput} from '../../components/inputs/searchInput';
import {StudentsListTile} from '../../components/listTiles/StudentsListTile';
import {StudentsScreenHook} from '../../hooks/StudentsScreenHook';
import LoadingScreen from '../../components/LoadingScreen';

export function StudentsScreen() {
  const {
    data,
    loading,
    navigation,
    studentId,
    searchText,
    filteredChats,
    setSearchText,
  } = StudentsScreenHook();
  const contentView = (
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
          return <StudentsListTile student={item} />;
        }}
      />
    </View>
  );
  return loading == true ? <LoadingScreen /> : contentView;
}
