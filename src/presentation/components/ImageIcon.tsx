import {Image, Pressable, Touchable, TouchableOpacity} from 'react-native';
import {images} from '../../utils/constants/images';
import {theme} from '../../utils/constants/theme';

type ImageIconProps = {
  image: any;
  color?: string;
  onPress: () => void;
};
export function ImageIcon({
  image,
  onPress,
  color = theme.primary,
}: ImageIconProps) {
  return (
    <Pressable onPress={onPress}>
      <Image tintColor={color} className="w-8 h-8" source={image} />
    </Pressable>
  );
}
