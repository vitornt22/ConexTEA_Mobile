import {ScrollView, View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {behaviorData} from '../../../../data/mockups/rankData';
import {InsideOutListTile} from '../../../components/listTiles/insideOutListTile';
import {BehaviorReport} from '../../../../models/Graphs';

type BehaviorRankProps = {behaviors: BehaviorReport[]};
export function BehaviorRank({behaviors}: BehaviorRankProps) {
  return (
    <View className="flex-1  bg-white">
      <DefaultTitleHeader icon={false} title="Comportamento" />
      <ScrollView className="mt-4 px-3">
        {behaviors.map((item: any) => (
          <InsideOutListTile key={item.id} item={item} typeTile="review" />
        ))}
      </ScrollView>
    </View>
  );
}
