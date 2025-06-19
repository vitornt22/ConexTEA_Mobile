import {FlatList, Text, View} from 'react-native';
import {SearchInput} from '../../components/inputs/searchInput';
import {chatParentsList} from '../../../data/mockups/chatsParents';

export function TeachersChatScreen() {
  return (
    <View className="bg-white flex-1 p-5">
      <SearchInput placeholder="Pesquisar Conversas" />
      <FlatList
        className="p-3 px-5"
        data={chatParentsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <Text>sksk</Text>;
        }}
      />
    </View>
  );
}
