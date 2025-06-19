import {ScrollView, Text, View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {InsideOutListTile} from '../../../components/listTiles/insideOutListTile';
import {insideOutData} from '../../../../data/mockups/rankData';

export function InsideOutRank() {
  return (
    <View className="flex-1  bg-white">
      <DefaultTitleHeader icon={false} title="Divertidamente" />
      <ScrollView className="mt-4 px-3">
        {insideOutData.map((item: {id: any}) => (
          <InsideOutListTile key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
