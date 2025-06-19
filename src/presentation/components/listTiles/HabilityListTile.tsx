import {Image, Text, View} from 'react-native';
import {CircularProgressMultiColor} from '../CircularProgressDefault';

type HabilityListTileProps = {
  item: any;
};

export function HabilityListTile({item}: HabilityListTileProps) {
  return (
    <View className=" flex-row items-center justify-between    h-20 bg-white">
      <View className="flex-row items-center">
        <Image className="w-[50] h-[50] rounded-md" source={item.image} />
        <View>
          <Text className="ml-3 text-xl font-semibold">{item.title}</Text>
          <Text className="ml-3 text-sm ">{item.title}</Text>
        </View>
      </View>
      <CircularProgressMultiColor percentage={item.percentual} />
    </View>
  );
}
