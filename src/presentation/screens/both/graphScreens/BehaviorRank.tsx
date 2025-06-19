import {ScrollView, View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {behaviorData} from '../../../../data/mockups/rankData';
import {InsideOutListTile} from '../../../components/listTiles/insideOutListTile';

export function BehaviorRank() {
  return (
    <View className="flex-1  bg-white">
      <DefaultTitleHeader icon={false} title="Comportamento" />
      <ScrollView className="mt-4 px-3">
        {behaviorData.map((item: {id: any}) => (
          <InsideOutListTile key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
