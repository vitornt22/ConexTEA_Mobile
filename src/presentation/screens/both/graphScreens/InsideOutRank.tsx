import {ScrollView, View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {InsideOutListTile} from '../../../components/listTiles/insideOutListTile';
import {Emotions} from '../../../../models/EmoctionModel';
import {useInsideOutRankHook} from '../../../hooks/InsideOutRankHook';
import {CheckInModel} from '../../../../models/CheckInItem';
import {EmotionReport} from '../../../../models/Graphs';

type InsideOutRankProps = {
  emotionReport: EmotionReport[] | [];
};
export function InsideOutRank({emotionReport}: InsideOutRankProps) {
  return (
    <View className="flex-1  bg-white">
      <DefaultTitleHeader icon={false} title="Divertidamente" />
      <ScrollView className="mt-4 px-3">
        {emotionReport.map((item: any) => (
          <InsideOutListTile key={item.id} item={item} typeTile={'insideOut'} />
        ))}
      </ScrollView>
    </View>
  );
}
