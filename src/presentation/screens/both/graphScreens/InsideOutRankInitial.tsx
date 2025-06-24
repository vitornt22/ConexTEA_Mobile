import {ScrollView, Text, View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {InsideOutListTile} from '../../../components/listTiles/insideOutListTile';
import {images} from '../../../../utils/constants/images';
import {Emotions} from '../../../../models/EmoctionModel';
import {useInsideOutRankHook} from '../../../hooks/InsideOutRankHook';

type InsideOutRankProps = {
  item: Emotions | undefined;
};
export function InsideOutRankInitial({item}: InsideOutRankProps) {
  const {sortedData} = useInsideOutRankHook(item);

  return (
    <View className="flex-1  bg-white">
      <DefaultTitleHeader icon={false} title="Divertidamente" />
      <ScrollView className="mt-4 px-3">
        {sortedData.map((item: any) => (
          <InsideOutListTile typeTile="insideOut" key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
