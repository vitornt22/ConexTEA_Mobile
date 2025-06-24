import {Image, ScrollView, Text, View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {InsideOutListTile} from '../../../components/listTiles/insideOutListTile';
import {images} from '../../../../utils/constants/images';
import {Emotions} from '../../../../models/EmoctionModel';
import {useInsideOutRankHook} from '../../../hooks/InsideOutRankHook';
import {getImageOficial} from '../../../../utils/constants/getImages';
import {ParentInitialStats} from '../../../../models/ParentInitialModel';
import {CircularProgressMultiColor} from '../../../components/CircularProgressDefault';

type InsideOutRankProps = {
  initialData: ParentInitialStats | undefined | null;
};
export function InsideOutRankInitial({initialData}: InsideOutRankProps) {
  const {sortedData} = useInsideOutRankHook(initialData?.emotions);
  return (
    <View className="flex-1  bg-white">
      <DefaultTitleHeader icon={false} title="Divertidamente" />
      <ScrollView className="mt-4 px-3">
        {sortedData.map((item: any) => (
          <View
            key={item.id}
            className=" flex-row items-center justify-between    h-20 bg-white">
            <View className="flex-row items-center">
              <Image className="w-[50] h-[50] rounded-md" source={item.image} />
              <View>
                <Text className="ml-3 text-xl font-semibold">{item.title}</Text>
                <Text className="ml-3 text-sm ">{item.title}</Text>
              </View>
            </View>
            <CircularProgressMultiColor percentage={item.percentual} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
