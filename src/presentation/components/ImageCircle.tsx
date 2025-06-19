import {Image} from 'react-native';
import {View} from 'react-native';
import {ImageKey, images} from '../../utils/constants/images';

export type ImageCircleProps = {
  circleColor: string;
  image: ImageKey;
};

export function ImageCircle({circleColor, image}: ImageCircleProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="relative items-center justify-center">
        {/* Imagem sobreposta */}
        <Image
          source={images[image]}
          className="w-[150] h-[150] absolute z-10 "
        />
        {/* Círculo */}
        <View
          style={{backgroundColor: circleColor}}
          className="rounded-full h-[120px] w-[120px] opacity-50"></View>
      </View>
    </View>
  );
}
