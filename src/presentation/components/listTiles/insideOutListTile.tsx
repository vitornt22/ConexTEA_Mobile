import {Image, Text, View} from 'react-native';
import {CircularProgressMultiColor} from '../CircularProgressDefault';
import {
  getImage,
  getImageOficial,
  getReviewImage,
} from '../../../utils/constants/getImages';
import {ImageKey} from '../../../utils/constants/images';
import {EmotionReport} from '../../../models/Graphs';

type InsideOutListTileProps = {
  item: EmotionReport;
  typeTile: 'insideOut' | 'review';
};
export function InsideOutListTile({item, typeTile}: InsideOutListTileProps) {
  const image =
    typeTile == 'insideOut'
      ? getImageOficial(Number(item.id))
      : getReviewImage(item.image);
  return (
    <View className=" flex-row items-center justify-between    h-20 bg-white">
      <View className="flex-row items-center">
        <Image className="w-[50] h-[50] rounded-md" source={image} />
        <View>
          <Text className="ml-3 text-xl font-semibold">{item.title}</Text>
          <Text className="ml-3 text-sm ">{item.title}</Text>
        </View>
      </View>
      <CircularProgressMultiColor percentage={item.percent} />
    </View>
  );
}
